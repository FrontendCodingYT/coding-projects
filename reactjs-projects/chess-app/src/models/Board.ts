import { getPossibleBishopMoves, getPossibleKingMoves, getPossibleKnightMoves, getPossiblePawnMoves, getPossibleQueenMoves, getPossibleRookMoves } from "../referee/rules";
import { PieceType, TeamType } from "../Types";
import { Pawn } from "./Pawn";
import { Piece } from "./Piece";
import { Position } from "./Position";

export class Board {
    pieces: Piece[];

    constructor(pieces: Piece[]) {
        this.pieces = pieces;
    }

    calculateAllMoves() {
        // Calculate the moves of all the pieces
        for (const piece of this.pieces) {
            piece.possibleMoves = this.getValidMoves(piece, this.pieces)
        }

        this.checkKingMoves();
    }

    checkKingMoves() {
        const king = this.pieces.find(p => p.isKing && p.team === TeamType.OPPONENT);

        if (king?.possibleMoves === undefined) return;

        // Simulate king moves
        for (const move of king.possibleMoves) {
            const simulatedBoard = this.clone();

            const pieceAtDestination = simulatedBoard.pieces.find(p => p.samePosition(move));

            // If there is a piece at the destination remove it
            if (pieceAtDestination !== undefined) {
                simulatedBoard.pieces = simulatedBoard.pieces.filter(p => !p.samePosition(move));
            }

            // We tell the compiler that the simulated king is always present
            const simulatedKing = simulatedBoard.pieces.find(p => p.isKing && p.team === TeamType.OPPONENT);
            simulatedKing!.position = move;

            for (const enemy of simulatedBoard.pieces.filter(p => p.team === TeamType.OUR)) {
                enemy.possibleMoves = simulatedBoard.getValidMoves(enemy, simulatedBoard.pieces);
            }

            let safe = true;

            // Determine if the move is safe
            for (const p of simulatedBoard.pieces) {
                if (p.team === TeamType.OPPONENT) continue;

                if (p.isPawn) {
                    const possiblePawnMoves = simulatedBoard.getValidMoves(p, simulatedBoard.pieces);

                    if (possiblePawnMoves?.some(ppm => ppm.x !== p.position.x
                        && ppm.samePosition(move))) {
                        safe = false;
                        break;
                    }
                } else if (p.possibleMoves?.some(p => p.samePosition(move))) {
                    safe = false;
                    break;
                }
            }

            // Remove the move from possibleMoves
            if (!safe) {
                king.possibleMoves = king.possibleMoves?.filter(m => !m.samePosition(move))
            }
        }
    }

    getValidMoves(piece: Piece, boardState: Piece[]): Position[] {
        switch (piece.type) {
            case PieceType.PAWN:
                return getPossiblePawnMoves(piece, boardState);
            case PieceType.KNIGHT:
                return getPossibleKnightMoves(piece, boardState);
            case PieceType.BISHOP:
                return getPossibleBishopMoves(piece, boardState);
            case PieceType.ROOK:
                return getPossibleRookMoves(piece, boardState);
            case PieceType.QUEEN:
                return getPossibleQueenMoves(piece, boardState);
            case PieceType.KING:
                return getPossibleKingMoves(piece, boardState);
            default:
                return [];
        }
    }

    playMove(enPassantMove: boolean,
        validMove: boolean,
        playedPiece: Piece,
        destination: Position): boolean {
        const pawnDirection = playedPiece.team === TeamType.OUR ? 1 : -1;

        if (enPassantMove) {
            this.pieces = this.pieces.reduce((results, piece) => {
                if (piece.samePiecePosition(playedPiece)) {
                    if (piece.isPawn)
                        (piece as Pawn).enPassant = false;
                    piece.position.x = destination.x;
                    piece.position.y = destination.y;
                    results.push(piece);
                } else if (
                    !piece.samePosition(new Position(destination.x, destination.y - pawnDirection))
                ) {
                    if (piece.isPawn) {
                        (piece as Pawn).enPassant = false;
                    }
                    results.push(piece);
                }

                return results;
            }, [] as Piece[]);

            this.calculateAllMoves();
        } else if (validMove) {
            //UPDATES THE PIECE POSITION
            //AND IF A PIECE IS ATTACKED, REMOVES IT
            this.pieces = this.pieces.reduce((results, piece) => {
                // Piece that we are currently moving
                if (piece.samePiecePosition(playedPiece)) {
                    //SPECIAL MOVE
                    if (piece.isPawn)
                        (piece as Pawn).enPassant =
                            Math.abs(playedPiece.position.y - destination.y) === 2 &&
                            piece.type === PieceType.PAWN;
                    piece.position.x = destination.x;
                    piece.position.y = destination.y;
                    results.push(piece);
                } else if (!piece.samePosition(destination)) {
                    if (piece.isPawn) {
                        (piece as Pawn).enPassant = false;
                    }
                    results.push(piece);
                }

                // The piece at the destination location
                // Won't be pushed in the results
                return results;
            }, [] as Piece[]);

            this.calculateAllMoves();
        } else {
            return false;
        }

        return true;
    }

    clone(): Board {
        return new Board(this.pieces.map(p => p.clone()));
    }
}