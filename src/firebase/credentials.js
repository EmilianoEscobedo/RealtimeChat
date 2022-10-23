/* eslint-disable import/prefer-default-export */
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4i6vilM2fTupGjGOATPTghfZ3t_Yu3Y4",
  authDomain: "talk-it-chat.firebaseapp.com",
  projectId: "talk-it-chat",
  storageBucket: "talk-it-chat.appspot.com",
  messagingSenderId: "992840502289",
  appId: "1:992840502289:web:bf7f35b46e8e525dd0f5b0",
};
export const app = initializeApp(firebaseConfig);
