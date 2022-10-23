/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "../assets/css/chat.css";
import {parseDate} from "../firebase/Functions";

export default function ChatMessage(props) {
  const {author, content, photoURL, createdAt} = props.message;

  return (
    <div>
      <div className="chat__msgs">
        <div className="message">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img className="msgPhoto me-2" src={photoURL} alt="" />
              <p className="msgAuthor">{author}</p>
            </div>

            <p id="msgTime">{createdAt ? parseDate(createdAt) : "🕒"}</p>
          </div>
          <p className="msgContent" id="msgContent">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
