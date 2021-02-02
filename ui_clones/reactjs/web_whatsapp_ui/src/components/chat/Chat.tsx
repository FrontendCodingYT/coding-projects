import "./Chat.css";

import Message from "../message/Message";

export default function Chat() {
  return (
    <div className="chat-section">
      <Message theirs />
      <Message />
    </div>
  );
}
