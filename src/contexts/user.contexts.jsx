import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./../utils/firebase/firebase.utils.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = function ({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(function () {
    const unsubscribe = onAuthStateChangeListener(function (user) {
      if (user) {
        setCurrentUser(user);
        createUserDocumentFromAuth(user);
      } else setCurrentUser(null);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};
