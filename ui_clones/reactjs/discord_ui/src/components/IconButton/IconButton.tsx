import { useMemo } from "react";
import "./IconButton.css"

interface IconButtonProps {
    icon: React.ReactElement
    iconColor?: "secondary";
}

export default function IconButton({ icon, iconColor }: IconButtonProps) {
    // If icon color is not empty then render the class name
    const className = useMemo(() => {
        return ["icon-button", iconColor]
        .filter(Boolean)
        .join(" ");
    }, [iconColor])

    return (
        <button className={className}>
            {icon}
        </button>)
}