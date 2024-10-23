import { createContext, useState } from "react";

// actual value that you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// context provider
export const UserProvider = function ({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
