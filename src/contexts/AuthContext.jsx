/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import {createContext, useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {signIn, signOut, auth} from "../firebase/Functions";

export const authContext = createContext();
export const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};
export const AuthContextProvider = (props) => {
  const [user] = useAuthState(auth);
  const {children} = props;

  return (
    <authContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
