import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

const Auth = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  //   console.log(auth?.currentUser?.email);

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
      setUser(true);
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
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default Auth;
