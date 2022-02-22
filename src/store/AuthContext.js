import React, { useState, createContext, useMemo } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isLoggedIn = !!token;

  const login = (tkn) => {
    localStorage.setItem("token", tkn);
    setToken(tkn);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const memoedValue = useMemo(
    () => ({ token, login, logout, isLoggedIn }),
    [token, isLoggedIn]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
