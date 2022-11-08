import { TeamType, PieceType } from "../Types";
import { Position } from "./Position";

export class Piece {
    image: string;
    position: Position;
    type: PieceType;
    team: TeamType;
    possibleMoves?: Position[];
    constructor(position: Position, type: PieceType,
        team: TeamType, possibleMoves: Position[] = []) {
        this.image = `assets/images/${type}_${team}.png`;
        this.position = position;
        this.type = type;
        this.team = team;
        this.possibleMoves = possibleMoves;
    }

    get isPawn() : boolean {
        return this.type === PieceType.PAWN
    }

    get isRook() : boolean {
        return this.type === PieceType.ROOK
    }

    get isKnight() : boolean {
        return this.type === PieceType.KNIGHT
    }

    get isBishop() : boolean {
        return this.type === PieceType.BISHOP
    }

    get isKing() : boolean {
        return this.type === PieceType.KING
    }

    get isQueen() : boolean {
        return this.type === PieceType.QUEEN
    }

    samePiecePosition(otherPiece: Piece) : boolean {
        return this.position.samePosition(otherPiece.position);
    }

    samePosition(otherPosition: Position) : boolean {
        return this.position.samePosition(otherPosition);
    }

    clone(): Piece {
        return new Piece(this.position.clone(),
             this.type, this.team, 
             this.possibleMoves?.map(m => m.clone()));
    }
}