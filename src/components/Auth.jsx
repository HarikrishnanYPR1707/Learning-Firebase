import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
      setUser(true);
      console.log(auth?.currentUser?.email);
    } catch (err) {
      console.error(err);
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setUser(true);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign in with Email & Password</button>
      <button onClick={googleSignIn}>sign in with google</button>
      {user ? (
        <button style={{ backgroundColor: "red" }} onClick={logout}>
          logout
        </button>
      ) : null}
    </div>
  );
};

export default Auth;
