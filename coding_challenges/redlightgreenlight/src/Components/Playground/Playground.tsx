import "./Playground.css";

type Props = {
    children: React.ReactNode;
}
export default function Playground({ children }: Props) {
    return <div className="Playground">{children}</div>
}