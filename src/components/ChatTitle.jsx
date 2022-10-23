import "../assets/css/chat.css";
import {useChatContext} from "../contexts/ChatContext";

export default function ChatTitle() {
  const {actualChat} = useChatContext();
  return (
    <div>
      <div className="chat__title">
        <h5 className="ms-3 py-2 pb-0">{actualChat}</h5>
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
    </div>
  );
}
