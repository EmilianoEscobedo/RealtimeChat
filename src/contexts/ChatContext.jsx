/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import {createContext, 
  useContext, 
  useState, 
  useRef
} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {
  collection,
  orderBy,
  limit,
  query,
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import {db,
   auth
  } from "../firebase/Functions";

export const chatContext = createContext();
export const useChatContext = () => {
  const context = useContext(chatContext);
  return context;
};
export default function ChatContextProvider(props) {
  const {children} = props;
  
  // Creates scrollRef hook
  const scroll = useRef()

  // Set actual chat, onLogin is Welcome
  const [actualChat, setActualChat] = useState("👋 Welcome");

  // References messages and charge hook
  const messagesRef = collection(db, `channels/${actualChat}/messages`);
  const queryChats = query(messagesRef, orderBy("createdAt", "asc"), limit(40));

  const [messages] = useCollectionData(queryChats);
  // References channels and charge hook
  const queryChannels = query(
    collection(db, "channels/"),
    orderBy("id", "asc"),
    limit(20)
  );
  const [channels] = useCollectionData(queryChannels);

  // Submit new messages
  const [formValue, setFormValue] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if(formValue !== ''){
      setFormValue("");
      const {uid, photoURL} = auth.currentUser;
      const docRef = collection(db, `channels/${actualChat}/messages`);
      await addDoc(docRef, {
        author: auth.currentUser.displayName,
        content: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
      scroll.current.scrollIntoView({ behavior:'smooth' })
    }
  };
  
  const createNewChannel = async (nameChannel) => {
    if (nameChannel) {
      const docRef = doc(db, `channels/${nameChannel}`);
      setDoc(docRef, {
        id: new Date().getTime(),
        name: nameChannel,
      });
    }
  };

  return (
    <chatContext.Provider
      value={{
        scroll,
        setActualChat,
        actualChat,
        channels,
        createNewChannel,
        submit,
        formValue,
        setFormValue,
        messages,
      }}
    >
      {children}
    </chatContext.Provider>
  );
}
