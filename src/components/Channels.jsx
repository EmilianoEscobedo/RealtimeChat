/* eslint-disable react/button-has-type */
import "../assets/css/channels.css";
import Swal from "sweetalert2";
import {ExpandMore, Add } from "@mui/icons-material"
import { Avatar } from '@mui/material'
import { useAuthContext } from "../contexts/AuthContext";
import { useChatContext } from "../contexts/ChatContext";
import Channel from "./Channel";

export default function Channels() {
  const { user } = useAuthContext();
  const {createNewChannel, channels} = useChatContext();
  const newChannel = async () => {
    const {value: nameChannel} = await Swal.fire({
      title: "Name of your new Channel",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Create",
    });
    createNewChannel(nameChannel);
  };
  return (
    <div className="channels">
      <div>
        <div className="channels__header">
          <h3>Channels <ExpandMore /></h3>
          <Add type="button" onClick={newChannel} />
        </div>
        <ul>
          {channels &&
            channels.map((cnl) => <Channel key={cnl.id} channel={cnl} />)}
        </ul>
      </div>
      <div className="Channels__profile">
        <Avatar className="ms-2" src={user.photoURL} />
        <p className="ms-3">{user.displayName}</p>
      </div>
    </div>
  );
}
