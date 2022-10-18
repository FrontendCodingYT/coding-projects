import { PieceType, TeamType } from "../Constants";
import { Position } from "./Position";

export class Piece {
    image: string;
    position: Position;
    type: PieceType;
    team: TeamType;
    enPassant?: boolean;
    possibleMoves?: Position[];
    constructor(position: Position, type: PieceType,
        team: TeamType) {
        this.image = `assets/images/${type}_${team}.png`;
        this.position = position;
        this.type = type;
        this.team = team;
    }
}