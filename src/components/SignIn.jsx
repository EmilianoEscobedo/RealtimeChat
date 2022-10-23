/* eslint-disable react/button-has-type */
import {useAuthContext} from "../contexts/AuthContext";

export default function SignIn() {
  const {signIn} = useAuthContext();

  const handleSignIn = () => {
    signIn();
  };
  return <button onClick={handleSignIn}>Sign in with Google</button>;
}
