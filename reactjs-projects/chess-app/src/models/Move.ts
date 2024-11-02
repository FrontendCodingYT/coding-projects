import { PieceType, TeamType } from "../Types";
import { Position } from "./Position";

export class Move {
    team: TeamType;
    piece: PieceType;
    fromPosition: Position;
    toPosition: Position;

    constructor(team: TeamType,
        piece: PieceType,
        fromPosition: Position,
        toPosition: Position) {
            this.team = team;
            this.piece = piece;
            this.fromPosition = fromPosition;
            this.toPosition = toPosition;
    }

    toMessage(): string {
        return `${this.team === TeamType.OPPONENT ? "Black" : "White"} 
        moved ${this.piece} from position 
        ${this.fromPosition.x}, ${this.fromPosition.y} to position 
        ${this.toPosition.x}, ${this.toPosition.y}.`;
    }

    clone(): Move {
        return new Move(this.team, this.piece,
             this.fromPosition.clone(), this.toPosition.clone())
    }
}