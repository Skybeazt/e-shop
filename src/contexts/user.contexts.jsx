import { createAction } from "../utils/reducer/reducer.utils.js";
import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "./../utils/firebase/firebase.utils.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default: {
      throw new Error(`Unhandled type ${type}`);
    }
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserContextProvider = function ({ children }) {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = function (user) {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

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
