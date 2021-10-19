import {
  GoogleAuthProvider,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from "../firebase/firebase.init";

initializingAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // Google Signin
  const handleGoogleSignin = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Update user
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  //   Logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Registration new User
  const handleRegistration = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password.length < 6) {
      return setError("Password should be at least in 6 characters");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        setUser(result.user);
        verifyEmail();
        updateName();
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("This email is already been used!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };
  const handlePasswordReset = () => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("reset done", email);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("Email or Password is incorrect!");
        }
      });
  };

  // Update Name

  const updateName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleEmailChanging = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChanging = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return {
    user,
    error,
    handleGoogleSignin,
    logOut,
    isLoading,
    email,
    password,
    setIsLoading,
    handleLogin,
    handleEmailChanging,
    handlePasswordChanging,
    handleRegistration,
    handlePasswordReset,
    handleUpdateName,
  };
};

export default useFirebase;
