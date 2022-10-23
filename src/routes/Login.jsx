/* eslint-disable react/jsx-no-useless-fragment */
import {Navigate} from "react-router";
import SignIn from "../components/SignIn";
import {useAuthContext} from "../contexts/AuthContext";

export default function Login() {
  const {user} = useAuthContext();
  return <>{user ? <Navigate replace to="/" /> : <SignIn />}</>;
}
