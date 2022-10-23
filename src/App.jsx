import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import {useAuthContext} from "./contexts/AuthContext";

export default function App() {
  const {user} = useAuthContext();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate replace to="/login" />}
      />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}
