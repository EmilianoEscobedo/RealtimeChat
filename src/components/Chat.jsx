import "../assets/css/chat.css";
import {useChatContext} from "../contexts/ChatContext";
import ChatMessage from "./ChatMessage";
import ChatTitle from "./ChatTitle";

export default function Chat() {
  const {messages, formValue, setFormValue, submit, actualChat} =
    useChatContext();
  const handleInput = (e) => {
    setFormValue(e.target.value);
  };
  const handleSubmit = (e) => {
    submit(e);
  };
  return (
    <div className="chat__screen">
      <div className="chat__title">
        <h5 className="ms-3 py-2 pb-0">
          <ChatTitle />
        </h5>
        <button
          type="button"
          className="btn btn-dark d-sm-none me-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#channels__mobile"
          aria-controls="offcanvasResponsive"
        >
          Channels
        </button>
      </div>
      <div className="chat__msgs">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div className="chat__newMsg">
        <form onSubmit={handleSubmit}>
          <input
            disabled={actualChat === "👋 Welcome"}
            type="text"
            className="chat__input"
            placeholder="  yo' type here :)"
            value={formValue}
            onChange={handleInput}
          />
          <button
            disabled={actualChat === "👋 Welcome"}
            type="submit"
            className="ms-3 btn btn-dark"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
