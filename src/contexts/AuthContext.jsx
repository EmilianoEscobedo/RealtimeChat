/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import {createContext, useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {signIn, signOut, auth} from "../firebase/Functions";

export const authContext = createContext();
export const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};
export default function AuthContextProvider(props){
  const [user] = useAuthState(auth);
  const {children} = props;

  return (
    <authContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
