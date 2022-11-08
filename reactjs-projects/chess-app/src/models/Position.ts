export class Position {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    samePosition(otherPosition: Position): boolean {
        return this.x === otherPosition.x &&
            this.y === otherPosition.y;
    }

    clone(): Position {
        return new Position(this.x, this.y);
    }
}