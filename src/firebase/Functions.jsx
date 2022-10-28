import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {app} from "./credentials";

export const auth = getAuth(app);
export const db = getFirestore(app);

export const signIn = () => {
  auth.lenguageCode = "en";
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};
export const signOut = () => auth.currentUser && auth.signOut();
export const parseDate = (createdAt) => {
  const date = new Date(createdAt.seconds * 1000);
  const parsedDate = date.toDateString().slice(0, 3);
  const parsedTime = date.toTimeString().slice(0, 5);
  return (`${parsedDate} ${parsedTime}`)
  };

