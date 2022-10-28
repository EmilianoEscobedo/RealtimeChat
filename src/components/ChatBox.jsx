import Channels from "./Channels";
import Chat from "./Chat";
import "../assets/css/chatbox.css";

export default function ChatBox() {
  return (
    <div className="container__chatBox">
      <Channels /> <Chat />
    </div>
  );
}
