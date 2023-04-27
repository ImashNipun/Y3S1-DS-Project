import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});
const cartDataLocal = JSON.parse(localStorage.getItem("auth"));

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(cartDataLocal);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
