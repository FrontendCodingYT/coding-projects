import "./IconButton.css"

interface IconButtonProps {
    icon: React.ReactElement
}

export default function IconButton({ icon }: IconButtonProps) {
    return (
        <button className="icon-button">
            {icon}
        </button>)
}