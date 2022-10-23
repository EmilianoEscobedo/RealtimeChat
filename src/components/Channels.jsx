/* eslint-disable react/button-has-type */
import "../assets/css/channels.css";
import Swal from "sweetalert2";
import {useChatContext} from "../contexts/ChatContext";
import Channel from "./Channel";

export default function Channels() {
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
    <div
      className="channels"
      id="#channels__mobile"
      aria-labelledby="offcanvasResponsiveLabel"
      tabIndex="-1"
    >
      <div>
        <h3>Channels</h3>
        <ul>
          {channels &&
            channels.map((cnl) => <Channel key={cnl.id} chanel={cnl} />)}
        </ul>
      </div>
      <button type="button" className=" mb-1 btn btn-dark" onClick={newChannel}>
        Create Channel
      </button>
    </div>
  );
}
