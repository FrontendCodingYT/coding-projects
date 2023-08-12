import "./Tile.css";

interface Props {
    image?: string;
    highlight: boolean;
}

export default function Tile({ image, highlight }: Props) {
    return (
        <div
            className={`tile ${highlight && "tile-highlight"} ${
                image && "chess-piece-tile"
            }`}
        >
            {image && (
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="chess-piece"
                ></div>
            )}
        </div>
    );
}
