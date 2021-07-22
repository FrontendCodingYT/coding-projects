import {
  PieceType,
  TeamType,
  Piece,
  Position,
  samePosition,
} from "../Constants";

export default class Referee {
  tileIsEmptyOrOccupiedByOpponent(
    position: Position,
    boardState: Piece[],
    team: TeamType
  ) {
    return (
      !this.tileIsOccupied(position, boardState) ||
      this.tileIsOccupiedByOpponent(position, boardState, team)
    );
  }

  tileIsOccupied(position: Position, boardState: Piece[]): boolean {
    const piece = boardState.find((p) => samePosition(p.position, position));

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  tileIsOccupiedByOpponent(
    position: Position,
    boardState: Piece[],
    team: TeamType
  ): boolean {
    const piece = boardState.find(
      (p) => samePosition(p.position, position) && p.team !== team
    );

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  isEnPassantMove(
    initialPosition: Position,
    desiredPosition: Position,
    type: PieceType,
    team: TeamType,
    boardState: Piece[]
  ) {
    const pawnDirection = team === TeamType.OUR ? 1 : -1;

    if (type === PieceType.PAWN) {
      if (
        (desiredPosition.x - initialPosition.x === -1 ||
          desiredPosition.x - initialPosition.x === 1) &&
        desiredPosition.y - initialPosition.y === pawnDirection
      ) {
        const piece = boardState.find(
          (p) =>
            p.position.x === desiredPosition.x &&
            p.position.y === desiredPosition.y - pawnDirection &&
            p.enPassant
        );
        if (piece) {
          return true;
        }
      }
    }

    return false;
  }
  
  pawnMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    const specialRow = team === TeamType.OUR ? 1 : 6;
    const pawnDirection = team === TeamType.OUR ? 1 : -1;

    //MOVEMENT LOGIC
    if (
      initialPosition.x === desiredPosition.x &&
      initialPosition.y === specialRow &&
      desiredPosition.y - initialPosition.y === 2 * pawnDirection
    ) {
      if (
        !this.tileIsOccupied(desiredPosition, boardState) &&
        !this.tileIsOccupied(
          { x: desiredPosition.x, y: desiredPosition.y - pawnDirection },
          boardState
        )
      ) {
        return true;
      }
    } else if (
      initialPosition.x === desiredPosition.x &&
      desiredPosition.y - initialPosition.y === pawnDirection
    ) {
      if (!this.tileIsOccupied(desiredPosition, boardState)) {
        return true;
      }
    }
    //ATTACK LOGIC
    else if (
      desiredPosition.x - initialPosition.x === -1 &&
      desiredPosition.y - initialPosition.y === pawnDirection
    ) {
      //ATTACK IN UPPER OR BOTTOM LEFT CORNER
      if (this.tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
        return true;
      }
    } else if (
      desiredPosition.x - initialPosition.x === 1 &&
      desiredPosition.y - initialPosition.y === pawnDirection
    ) {
      //ATTACK IN THE UPPER OR BOTTOM RIGHT CORNER
      if (this.tileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
        return true;
      }
    }

    return false;
  }

  knightMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    for (let i = -1; i < 2; i += 2) {
      for (let j = -1; j < 2; j += 2) {
        //TOP AND BOTTOM SIDE MOVEMENT
        if (desiredPosition.y - initialPosition.y === 2 * i) {
          if (desiredPosition.x - initialPosition.x === j) {
            if (
              this.tileIsEmptyOrOccupiedByOpponent(
                desiredPosition,
                boardState,
                team
              )
            ) {
              return true;
            }
          }
        }

        //RIGHT AND LEFT SIDE MOVEMENT
        if (desiredPosition.x - initialPosition.x === 2 * i) {
          if (desiredPosition.y - initialPosition.y === j) {
            if (
              this.tileIsEmptyOrOccupiedByOpponent(
                desiredPosition,
                boardState,
                team
              )
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  bishopMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    for(let i = 1; i < 8; i++) {
      //Up right movement
      if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition: Position = {x: initialPosition.x + i, y: initialPosition.y + i};
        //Check if the tile is the destination tile
        if(samePosition(passedPosition, desiredPosition)) {
          //Dealing with destination tile
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          //Dealing with passing tile
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
        
      //Bottom right movement
      if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition: Position = {x: initialPosition.x + i, y: initialPosition.y - i};
        //Check if the tile is the destination tile
        if(samePosition(passedPosition, desiredPosition)) {
          //Dealing with destination tile
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }

      //Bottom left movement
      if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {
        let passedPosition: Position = {x: initialPosition.x - i, y: initialPosition.y - i};
        //Check if the tile is the destination tile
        if(samePosition(passedPosition, desiredPosition)) {
          //Dealing with destination tile
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }

      //Top left movement
      if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {
        let passedPosition: Position = {x: initialPosition.x - i, y: initialPosition.y+i};
        //Check if the tile is the destination tile
        if(samePosition(passedPosition, desiredPosition)) {
          //Dealing with destination tile
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }
    return false;
  }

  rookMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    if(initialPosition.x === desiredPosition.x) {
      for(let i = 1; i < 8; i++) {
        let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;

        let passedPosition: Position = {x: initialPosition.x, y: initialPosition.y + (i * multiplier)}; 
        if(samePosition(passedPosition, desiredPosition)) {
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }

    if(initialPosition.y === desiredPosition.y) {
      for(let i = 1; i < 8; i++) {
        let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;

        let passedPosition: Position = {x: initialPosition.x + (i * multiplier), y: initialPosition.y};
        if(samePosition(passedPosition, desiredPosition)) {
          if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
            return true;
          }
        } else {
          if(this.tileIsOccupied(passedPosition, boardState)) {
            break;
          }
        }
      }
    }
    return false;
  }

  queenMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    for(let i = 1; i < 8; i++) {
      //Diagonal
      let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0;
      let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0;

      let passedPosition: Position = {x: initialPosition.x + (i * multiplierX), y: initialPosition.y + (i * multiplierY)};

      if(samePosition(passedPosition, desiredPosition)) {
        if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if(this.tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    return false;
  }

  kingMove(initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean {
    for(let i = 1; i < 2; i++) {
      //Diagonal
      let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0;
      let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0;

      let passedPosition: Position = {x: initialPosition.x + (i * multiplierX), y: initialPosition.y + (i * multiplierY)};

      if(samePosition(passedPosition, desiredPosition)) {
        if(this.tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if(this.tileIsOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
    return false;
  }


  //TODO
  //Pawn promotion!
  //Prevent the king from moving into danger!
  //Add castling!
  //Add check!
  //Add checkmate!
  //Add stalemate!
  isValidMove(initialPosition: Position, desiredPosition: Position, type: PieceType, team: TeamType, boardState: Piece[]) {
    let validMove = false;
    switch(type) {
      case PieceType.PAWN:
        validMove = this.pawnMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.KNIGHT:
        validMove = this.knightMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.BISHOP:
        validMove = this.bishopMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.ROOK:
        validMove = this.rookMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.QUEEN:
        validMove = this.queenMove(initialPosition, desiredPosition, team, boardState);
        break;
      case PieceType.KING:
        validMove = this.kingMove(initialPosition, desiredPosition, team, boardState);
    }

    return validMove;
  }
}
