export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const GRID_SIZE = 100;

export function samePosition(p1: Position, p2: Position) {
  return p1.x === p2.x && p1.y === p2.y;
}

export interface Position {
  x: number;
  y: number;
}

export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT,
  ROOK,
  QUEEN,
  KING,
}

export enum TeamType {
  OPPONENT,
  OUR,
}

export interface Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

export const initialBoardState: Piece[] = [
  {
    image: `assets/images/rook_b.png`,
    position: {
      x: 0,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/knight_b.png`,
    position: {
      x: 1,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/bishop_b.png`,
    position: {
      x: 2,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/queen_b.png`,
    position: {
      x: 3,
      y: 7,
    },
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/king_b.png`,
    position: {
      x: 4,
      y: 7,
    },
    type: PieceType.KING,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/bishop_b.png`,
    position: {
      x: 5,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/knight_b.png`,
    position: {
      x: 6,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/rook_b.png`,
    position: {
      x: 7,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 0,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 1,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 2,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 3,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 4,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 5,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 6,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    image: `assets/images/pawn_b.png`,
    position: {
      x: 7,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },

  {
    image: `assets/images/rook_w.png`,
    position: {
      x: 0,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/knight_w.png`,
    position: {
      x: 1,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/bishop_w.png`,
    position: {
      x: 2,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/queen_w.png`,
    position: {
      x: 3,
      y: 0,
    },
    type: PieceType.QUEEN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/king_w.png`,
    position: {
      x: 4,
      y: 0,
    },
    type: PieceType.KING,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/bishop_w.png`,
    position: {
      x: 5,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/knight_w.png`,
    position: {
      x: 6,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/rook_w.png`,
    position: {
      x: 7,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 0,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 1,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 2,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 3,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 4,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 5,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 6,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    image: `assets/images/pawn_w.png`,
    position: {
      x: 7,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
];
