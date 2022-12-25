import { Fragment, useEffect, useState } from "react";
import "./App.css";
import firebase, { signInWithGoogle } from "./services/firebase";
import { Plan } from "./pages/plan/Plan";
import { Hello } from "./pages/Hello";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <Hello />;
  }

  return (
    <Router>
      <Fragment>
        <button onClick={signInWithGoogle}>
          <i></i>Sign-in with Goolge
        </button>
        <Routes>
          <Route path="/" element={<Plan />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
