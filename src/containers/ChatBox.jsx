import Channels from "../components/Channels";
import Chat from "../components/Chat";
import "../assets/css/chatbox.css";

export default function ChatBox() {
  return (
    <div className="container__chatBox">
      <Channels /> <Chat />
    </div>
  );
}
