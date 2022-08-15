import "./Contestant.css";

type Props = {
    x: number;
    y: number;
    name: string;
    gameOver: boolean;
}

export default function Contestant({x, y, name, gameOver}: Props) {
    const className = (gameOver) ? "Contestant ContestantGameOver" : "Contestant";
    return <div style={{left: `${x}px`, top: `${y}px`}} className={className}>{name}</div>
}