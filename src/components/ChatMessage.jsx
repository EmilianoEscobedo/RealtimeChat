/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "../assets/css/chat.css";
import { Avatar } from '@mui/material'
import {parseDate} from "../firebase/Functions";

export default function ChatMessage(props) {
  const {author, content, photoURL, createdAt} = props.message;
  return (
    <div>
      <div className="chat__msgs">
        <div className="chat__message">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <Avatar className="me-2" src={photoURL}/> 
              <p className="chat__msg-author">{author}</p>
            </div>
            <p className="chat__msg-time">{createdAt ? parseDate(createdAt) : "🕒"}</p>
          </div>
          <p className="ms-5">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
