/* eslint-disable react/no-array-index-key */
import "../assets/css/chat.css";
import SendIcon from '@mui/icons-material/Send';
import {useChatContext} from "../contexts/ChatContext";
import ChatMessage from "./ChatMessage";
import ChatTitle from "./ChatTitle";
import Emojis from "./Emojis";

export default function Chat() {
  const {messages, formValue, setFormValue, submit, actualChat, scroll} =
    useChatContext();  
  const handleInput = (e) => {
    setFormValue(e.target.value);
  };
  const handleSubmit = (e) => {
    submit(e);
  };
  return (
    <div className="chat__screen">
          <ChatTitle />
      <div className="chat__msgs">
        {messages &&
          messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
        <div ref={scroll}/>
      </div>
        <form onSubmit={handleSubmit}>
          <input
            disabled={actualChat === "👋 Welcome"}
            type="text"
            className="chat__input"
            placeholder="  yo' type here :)"
            value={formValue}
            onChange={handleInput}
          />
          <div className="chat__input-action">
          <Emojis />
          <button
            disabled={actualChat === "👋 Welcome"}
            type="submit"
            className="ms-3 btn btn-dark"
          >
            <SendIcon />
          </button>
          </div>
        </form>
    </div>
  );
}
