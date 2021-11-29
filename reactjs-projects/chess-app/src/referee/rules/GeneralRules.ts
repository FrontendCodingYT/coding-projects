import { Piece, Position, samePosition, TeamType } from "../../Constants";

export const tileIsOccupied = (position: Position, boardState: Piece[]): boolean => {
    const piece = boardState.find((p) => samePosition(p.position, position));

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

export const  tileIsOccupiedByOpponent = (
    position: Position,
    boardState: Piece[],
    team: TeamType
  ): boolean => {
    const piece = boardState.find(
      (p) => samePosition(p.position, position) && p.team !== team
    );

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  export const tileIsEmptyOrOccupiedByOpponent =(
    position: Position,
    boardState: Piece[],
    team: TeamType
  ) => {
    return (
      !tileIsOccupied(position, boardState) ||
      tileIsOccupiedByOpponent(position, boardState, team)
    );
  }