import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext("example");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (newUser, cb) => {
    setUser(newUser);
    // cb();
  };

  const logout = (cb) => {
    setUser(null);
    // cb();
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
