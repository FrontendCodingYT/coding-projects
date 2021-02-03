import "./MessageInput.css";

import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";

export default function MessageInput() {
    return (
        <div className="message-section">
        <MoodIcon className="icon-clickable"/>
        <input className="message-input" placeholder="Type a message"/>
        <MicIcon className="icon-clickable"/>
      </div>
    )
}