/* eslint-disable react/prop-types */
import "../assets/css/header.css";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthContext} from "../contexts/AuthContext";

export default function Header(props) {
  const {children} = props;
  const {signOut} = useAuthContext();
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <header>
        <h1>🗣️ TalkIT!</h1>
        <button type="button" onClick={handleSignOut}>
          <LogoutIcon  />
        </button>
      </header>
      {children}
    </>
  );
}
