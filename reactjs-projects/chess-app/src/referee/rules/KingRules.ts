import { Piece, Position } from "../../models";
import { TeamType } from "../../Types";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const kingMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
  for (let i = 1; i < 2; i++) {
    //Diagonal
    let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0;
    let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0;

    let passedPosition = new Position(initialPosition.x + (i * multiplierX), initialPosition.y + (i * multiplierY));

    if (passedPosition.samePosition(desiredPosition)) {
      if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
        return true;
      }
    } else {
      if (tileIsOccupied(passedPosition, boardState)) {
        break;
      }
    }
  }
  return false;
}

export const getPossibleKingMoves = (king: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  // Top movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x, king.position.y + i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x, king.position.y - i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Left movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x - i, king.position.y);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Right movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x + i, king.position.y);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Upper right movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x + i, king.position.y + i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom right movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x + i, king.position.y - i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom left movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x - i, king.position.y - i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }

    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Top left movement
  for (let i = 1; i < 2; i++) {
    const destination = new Position(king.position.x - i, king.position.y + i);

    // If the move is outside of the board don't add it
    if(destination.x < 0 || destination.x > 7 
      || destination.y < 0 || destination.y > 7) {
        break;
    }
    
    if (!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if (tileIsOccupiedByOpponent(destination, boardstate, king.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  return possibleMoves;
}

// In this method the enemy moves have already been calculated
export const getCastlingMoves = (king: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  if (king.hasMoved) return possibleMoves;

  // We get the rooks from the king's team which haven't moved
  const rooks = boardstate.filter(p => p.isRook
    && p.team === king.team && !p.hasMoved);

  // Loop through the rooks
  for (const rook of rooks) {
    // Determine if we need to go to the right or the left side
    const direction = (rook.position.x - king.position.x > 0) ? 1 : -1;

    const adjacentPosition = king.position.clone();
    adjacentPosition.x += direction;

    if(!rook.possibleMoves?.some(m => m.samePosition(adjacentPosition))) continue;

    // We know that the rook can move to the adjacent side of the king

    const conceringTiles = rook.possibleMoves.filter(m => m.y === king.position.y);

    // Checking if any of the enemy pieces can attack the spaces between
    // The rook and the king
    const enemyPieces = boardstate.filter(p => p.team !== king.team);

    let valid = true;

    for(const enemy of enemyPieces) {
      if(enemy.possibleMoves === undefined) continue;

      for(const move of enemy.possibleMoves) {
        if(conceringTiles.some(t => t.samePosition(move))) {
          valid = false;
        }

        if(!valid)
          break;
      }

      if(!valid)
        break;
    }

    if(!valid) continue;

    // We now want to add it as a possible move!
    possibleMoves.push(rook.position.clone());
  }


  return possibleMoves;
}