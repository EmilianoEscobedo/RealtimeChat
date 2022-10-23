import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import ChatContextProvider from "./contexts/ChatContext";
import {AuthContextProvider} from "./contexts/AuthContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
