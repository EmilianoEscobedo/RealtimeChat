/* eslint-disable react/button-has-type */
import '../assets/css/signIn.css'
import GoogleButton from 'react-google-button'
import {useAuthContext} from "../contexts/AuthContext";


export default function SignIn() {
  const {signIn} = useAuthContext();

  const handleSignIn = () => {
    signIn();
  };
  return (
    <div className='signIn__container'>
      <h1 className='mb-5'>🗣️ Welcome to  TalkIt Chat!</h1>
      <GoogleButton type="dark" onClick={handleSignIn}/>
    </div>
  );
}
