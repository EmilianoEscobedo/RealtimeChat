/* eslint-disable react/prop-types */
import "../assets/css/header.css";
import Dropdown from "react-bootstrap/Dropdown";
import {useAuthContext} from "../contexts/AuthContext";

export default function Header(props) {
  const {children} = props;
  const {signOut, user} = useAuthContext();
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <header>
        <h1>🗣️ TalkIT</h1>
        <div className="user__panel">
          <p>👋 Hi, {user.displayName}</p>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" />
            <Dropdown.Menu variant="dark">
              <Dropdown.Item>Create Channel</Dropdown.Item>
              <Dropdown.Item onClick={handleSignOut}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      {children}
    </>
  );
}
