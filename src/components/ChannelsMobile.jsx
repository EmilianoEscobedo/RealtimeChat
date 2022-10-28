/* eslint-disable react/button-has-type */
import "../assets/css/channels.css";
import Swal from "sweetalert2";
import {Add } from "@mui/icons-material"
import { useChatContext } from "../contexts/ChatContext";
import Channel from "./Channel";

export default function ChannelsMobile() {
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
    <>
        <div className="channels__list-mobile">
            <ul>
            {channels &&
                channels.map((cnl) => <Channel key={cnl.id} channel={cnl} />)}
            </ul>
        </div>
        <button onClick={newChannel} className="channels__add-mobile">
        <p>Add new Channel</p> 
        <Add />
        </button>
    </>
  );
}
