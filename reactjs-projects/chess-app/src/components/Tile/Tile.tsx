import "./Tile.css";

interface Props {
  image?: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="tile black-tile">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        <img src={image} />
      </div>
    );
  }
}
