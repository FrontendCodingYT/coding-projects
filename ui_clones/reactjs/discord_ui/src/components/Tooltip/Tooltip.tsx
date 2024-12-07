import "./Tooltip.css"

interface TooltipProps {
    children: React.ReactElement
    title: string
}

export default function Tooltip({ children, title }: TooltipProps) {
    return (
        <>
            <div className="tooltip-container">
                {children}
                <span className="tooltip">{title}</span>
            </div>
        </>)
}