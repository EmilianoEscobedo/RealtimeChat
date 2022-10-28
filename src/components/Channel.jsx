/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */

import "../assets/css/channels.css";
import TagIcon from '@mui/icons-material/Tag';
import {useChatContext} from "../contexts/ChatContext";


export default function Channel(props) {
  const {name} = props.channel;
  const { setActualChat } = useChatContext();
  const handleActualChat = (e) => {
    if (e.target.innerText != null){
      setActualChat(e.target.innerText);
    }
    
  };
  return (
    <li>
      {name !== '👋 Welcome' ?
      <button onClick={handleActualChat}><TagIcon />{name}</button>
      :
      <button onClick={handleActualChat}>{name}</button>} 
    </li>
  );
}
