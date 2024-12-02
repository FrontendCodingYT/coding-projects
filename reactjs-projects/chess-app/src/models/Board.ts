import { getPossibleBishopMoves, getPossibleKingMoves, getPossibleKnightMoves, getPossiblePawnMoves, getPossibleQueenMoves, getPossibleRookMoves, getCastlingMoves } from "../referee/rules";
import { PieceType, TeamType } from "../Types";
import { Move } from "./Move";
import { Pawn } from "./Pawn";
import { Piece } from "./Piece";
import { Position } from "./Position";
import { SimplifiedPiece } from "./SimplifiedPiece";

export class Board {
    pieces: Piece[];
    totalTurns: number;
    winningTeam?: TeamType;
    stalemate: boolean;
    draw: boolean;
    moves: Move[];
    boardHistory: { [key: string]: number };
    turnsWithNoCaptureOrPawnMove: number;

    constructor(pieces: Piece[], totalTurns: number, moves: Move[],
        boardHistory: { [key: string]: number },
        turnsWithNoCaptureOrPawnMove: number
    ) {
        this.pieces = pieces;
        this.totalTurns = totalTurns;
        this.stalemate = false;
        this.draw = false;
        this.moves = moves;
        this.boardHistory = boardHistory;
        this.turnsWithNoCaptureOrPawnMove =
            turnsWithNoCaptureOrPawnMove;
    }

    get currentTeam(): TeamType {
        return this.totalTurns % 2 === 0 ? TeamType.OPPONENT : TeamType.OUR;
    }

    calculateAllMoves() {
        // Calculate the moves of all the pieces
        for (const piece of this.pieces) {
            piece.possibleMoves = this.getValidMoves(piece, this.pieces)
        }

        // Calculate castling moves
        for (const king of this.pieces.filter(p => p.isKing)) {
            if (king.possibleMoves === undefined) continue;

            king.possibleMoves = [...king.possibleMoves, ...getCastlingMoves(king, this.pieces)];
        }

        // Check if the current team moves are valid
        this.checkCurrentTeamMoves();

        const enemyMoves = this.pieces.filter(p => p.team !== this.currentTeam)
        .map(p => p.possibleMoves).flat();

        // Remove the posibble moves for the team that is not playing
        for (const piece of
            this.pieces.filter(p => p.team !== this.currentTeam)) {
            piece.possibleMoves = [];
        }

        this.checkForFiftyMoveRule();
        this.checkForDraw();
        this.checkForThreeFoldRepitition();

        // Check if the playing team still has moves left
        // Otherwise, checkmate!
        if (this.pieces.filter(p => p.team === this.currentTeam)
            .some(p => p.possibleMoves !== undefined && p.possibleMoves.length > 0)) return;

        this.checkForStalemate(enemyMoves);
    }

    checkCurrentTeamMoves() {
        // Loop through all the current team's pieces
        for (const piece of this.pieces.filter(p => p.team === this.currentTeam)) {
            if (piece.possibleMoves === undefined) continue;

            // Simulate all the piece moves
            for (const move of piece.possibleMoves) {
                const simulatedBoard = this.clone();

                // Remove the piece at the destination position
                simulatedBoard.pieces = simulatedBoard.pieces.filter(p => !p.samePosition(move));

                // Get the piece of the cloned board
                const clonedPiece = simulatedBoard.pieces.find(p => p.samePiecePosition(piece))!;
                clonedPiece.position = move.clone();

                // Get the king of the cloned board
                const clonedKing = simulatedBoard.pieces.find(p => p.isKing && p.team === simulatedBoard.currentTeam)!;

                // Loop through all enemy pieces, update their possible moves
                // And check if the current team's king will be in danger
                for (const enemy of simulatedBoard.pieces.filter(p => p.team !== simulatedBoard.currentTeam)) {
                    enemy.possibleMoves = simulatedBoard.getValidMoves(enemy, simulatedBoard.pieces);

                    if (enemy.isPawn) {
                        if (enemy.possibleMoves.some(m => m.x !== enemy.position.x
                            && m.samePosition(clonedKing.position))) {
                            piece.possibleMoves = piece.possibleMoves?.filter(m => !m.samePosition(move));
                        }
                    } else {
                        if (enemy.possibleMoves.some(m => m.samePosition(clonedKing.position))) {
                            piece.possibleMoves = piece.possibleMoves?.filter(m => !m.samePosition(move));
                        }
                    }
                }
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
        const destinationPiece = this.pieces.find(p => p.samePosition(destination));

        const piecesBeforeMove = this.pieces?.length;
        // If the move is a castling move do this
        if (playedPiece.isKing && destinationPiece?.isRook
            && destinationPiece.team === playedPiece.team) {
            const direction = (destinationPiece.position.x - playedPiece.position.x > 0) ? 1 : -1;
            const newKingXPosition = playedPiece.position.x + direction * 2;
            this.pieces = this.pieces.map(p => {
                if (p.samePiecePosition(playedPiece)) {
                    p.position.x = newKingXPosition;
                } else if (p.samePiecePosition(destinationPiece)) {
                    p.position.x = newKingXPosition - direction;
                }

                return p;
            });
        } else if (enPassantMove) {
            this.pieces = this.pieces.reduce((results, piece) => {
                if (piece.samePiecePosition(playedPiece)) {
                    if (piece.isPawn)
                        (piece as Pawn).enPassant = false;
                    piece.position.x = destination.x;
                    piece.position.y = destination.y;
                    piece.hasMoved = true;
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
                    piece.hasMoved = true;
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
        } else {
            return false;
        }

        this.turnsWithNoCaptureOrPawnMove ++;

        if(playedPiece.isPawn || this.pieces.length < piecesBeforeMove) {
            // reset 50 move rule
            this.turnsWithNoCaptureOrPawnMove = 0;
        }

        // En passent or valid move or castling
        this.moves.push(new Move(playedPiece.team, playedPiece.type,
            playedPiece.position.clone(), destination.clone()));
        this.calculateAllMoves();

        return true;
    }

    checkForFiftyMoveRule(): void {
        // Check for the 50 move rule
        if(this.turnsWithNoCaptureOrPawnMove >= 50) {
            this.draw = true;
        }
    }

    checkForDraw(): void {
        // Check for draw
        // true if our team has only king or
        // has king + knight or bishop
        const ourTeamEligibleForDraw = 
        this.pieces.filter(p => p.team === TeamType.OUR).length === 1||
        this.pieces.filter(p => p.team === TeamType.OUR &&
             (p.isKing || p.isKnight || p.isBishop)).length === 2;
        
        // true if opponent team has only king or
        // has king + knight or bishop
        const opponentTeamEligibleForDraw = 
        this.pieces.filter(p => p.team === TeamType.OPPONENT).length === 1||
        this.pieces.filter(p => p.team === TeamType.OPPONENT &&
            (p.isKing || p.isKnight || p.isBishop)).length === 2;

        if(ourTeamEligibleForDraw && opponentTeamEligibleForDraw) {
            this.draw = true
        } else if(this.pieces.filter(p => p.team === TeamType.OUR).length === 3 &&
                  this.pieces.filter(p => p.team === TeamType.OUR && p.isKnight).length === 2 &&
                  this.pieces.filter(p => p.team === TeamType.OPPONENT).length === 1) {
                    // 1 king + 2 knights (our) vs 1 king
                    this.draw = true;
        } else if(this.pieces.filter(p => p.team === TeamType.OPPONENT).length === 3 &&
                  this.pieces.filter(p => p.team === TeamType.OPPONENT && p.isKnight).length === 2 &&
                  this.pieces.filter(p => p.team === TeamType.OUR).length === 1) {
                    // 1 king + 2 knights (opponent) vs 1 king
                    this.draw = true;
        }
    }

    checkForThreeFoldRepitition(): void {
        const simplifiedPieces = 
        this.pieces.map(p => new SimplifiedPiece(p));
        
        const simplifiedPiecesStringified = 
        JSON.stringify(simplifiedPieces);

        if(this.boardHistory[simplifiedPiecesStringified] === undefined) {
            this.boardHistory[simplifiedPiecesStringified] = 1;
        } else {
            this.boardHistory[simplifiedPiecesStringified] += 1;
        }

        if(this.boardHistory[simplifiedPiecesStringified] === 3) {
            // Threefold repition
            this.draw = true;
        }
    }

    checkForStalemate(enemyMoves: (Position | undefined)[]): void {
        // If any of the opponents team pieces can attack the king tile
        // Then he is in check and the other team has won
        const kingPosition = this.pieces.find(p => p.isKing 
            && p.team === this.currentTeam)!.position;
            
        if(enemyMoves.some(m => m?.samePosition(kingPosition))) {
            // King is in check!
            this.winningTeam = (this.currentTeam === TeamType.OUR) ? TeamType.OPPONENT : TeamType.OUR;
        } else {
            // Stalemate
            this.stalemate = true;
        }
    }

    clone(): Board {
        return new Board(this.pieces.map(p => p.clone()),
            this.totalTurns, this.moves.map(m => m.clone()),
            this.boardHistory, 
            this.turnsWithNoCaptureOrPawnMove);
    }
}