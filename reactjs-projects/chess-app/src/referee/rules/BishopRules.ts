import { Piece, Position } from "../../models";
import { TeamType } from "../../Types";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const bishopMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    for(let i = 1; i < 8; i++) {
      //Up right movement
      if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition = new Position(initialPosition.x + i, initialPosition.y + i);
        //Check if the tile is the destination tile
        if(passedPosition.samePosition(desiredPosition)) {
          //Dealing with destination tile
          if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          //Dealing with passing tile
          if(tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
        
      //Bottom right movement
      if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition = new Position(initialPosition.x + i, initialPosition.y - i);
        //Check if the tile is the destination tile
        if(passedPosition.samePosition(desiredPosition)) {
          //Dealing with destination tile
          if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }

      //Bottom left movement
      if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition = new Position(initialPosition.x - i, initialPosition.y - i);
        //Check if the tile is the destination tile
        if(passedPosition.samePosition(desiredPosition)) {
          //Dealing with destination tile
          if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }

      //Top left movement
      if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition = new Position(initialPosition.x - i, initialPosition.y+i);
        //Check if the tile is the destination tile
        if(passedPosition.samePosition(desiredPosition)) {
          //Dealing with destination tile
          if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }
    return false;
  }

  export const getPossibleBishopMoves = (bishop: Piece, boardstate: Piece[]): Position[] => {
    const possibleMoves: Position[] = [];

    // Upper right movement
    for(let i = 1; i < 8; i++) {
      const destination = new Position(bishop.position.x + i, bishop.position.y + i);

      if(!tileIsOccupied(destination, boardstate)) {
        possibleMoves.push(destination);
      } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
        possibleMoves.push(destination);
        break;
      } else {
        break;
      }
    }

    // Bottom right movement
    for(let i = 1; i < 8; i++) {
      const destination = new Position(bishop.position.x + i, bishop.position.y - i);

      if(!tileIsOccupied(destination, boardstate)) {
        possibleMoves.push(destination);
      } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
        possibleMoves.push(destination);
        break;
      } else {
        break;
      }
    }

    // Bottom left movement
    for(let i = 1; i < 8; i++) {
      const destination = new Position(bishop.position.x - i, bishop.position.y - i);

      if(!tileIsOccupied(destination, boardstate)) {
        possibleMoves.push(destination);
      } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
        possibleMoves.push(destination);
        break;
      } else {
        break;
      }
    }

    // Top left movement
    for(let i = 1; i < 8; i++) {
      const destination = new Position(bishop.position.x - i, bishop.position.y + i);

      if(!tileIsOccupied(destination, boardstate)) {
        possibleMoves.push(destination);
      } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
        possibleMoves.push(destination);
        break;
      } else {
        break;
      }
    }

    return possibleMoves;
  }