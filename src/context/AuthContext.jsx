import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  function login(dbUser) {
    setUser(dbUser);
    setAuth(true);
  }

  function logout() {
    setUser({});
    setAuth(false);
  }

  const contextContent = {
    auth,
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextContent}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
