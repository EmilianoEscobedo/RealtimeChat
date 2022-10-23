/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */

import "../assets/css/channels.css";
import {useChatContext} from "../contexts/ChatContext";

export default function Channel(props) {
  const {name} = props.chanel;
  const {setActualChat} = useChatContext();
  const handleActualChat = (e) => {
    setActualChat(e.target.textContent);
  };
  return (
    <li>
      <button onClick={handleActualChat}>{name}</button>
    </li>
  );
}
