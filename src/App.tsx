import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import YouTube from "react-youtube";
import firebase, { signInWithGoogle } from "./services/firebase";
import { Plan } from "./pages/plan/Plan";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign-in with Goolge
      </button>
      {user && <Plan />}
    </div>
  );
}

export default App;
