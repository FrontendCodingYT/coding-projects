import "./Chat.css";

import Message from "../message/Message";
import { Message as MessageModel } from "../../models/Message";

interface Props {
  messages: MessageModel[];
}

export default function Chat({ messages }: Props) {
  return (
    <div className="chat-section">
      {messages.map(m => {
        return <Message message={m.message} timestamp={m.timestamp} theirs={m.from === "them"}/>
      })}
    </div>
  );
}
