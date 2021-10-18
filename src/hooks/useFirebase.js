import {
  GoogleAuthProvider,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from "../firebase/firebase.init";

initializingAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const handleGoogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  //   Logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {});
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return setError("Password should be at least in 6 characters");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("This email is already been used!");
        }
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("Email or Password is incorrect!");
        }
      });
  };

  const handleEmailChanging = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChanging = (e) => {
    setPassword(e.target.value);
  };
  return {
    user,
    error,
    handleGoogleSignin,
    logOut,
    email,
    password,
    handleLogin,
    handleEmailChanging,
    handlePasswordChanging,
    handleRegistration,
  };
};

export default useFirebase;
