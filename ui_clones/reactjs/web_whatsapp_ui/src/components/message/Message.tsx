import "./Message.css";

interface Props {
  theirs?: boolean;
}

export default function Message({ theirs }: Props) {
  if (theirs) {
    return (
      <div className="message-container message-theirs">
        <div className="message">I am a message!</div>
      </div>
    );
  } else {
    return (
      <div className="message-container message-us">
        <div className="message">I am a message!</div>
      </div>
    );
  }
}
