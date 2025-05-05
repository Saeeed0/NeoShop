import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
  let [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) setUserToken(token);
  }, []);
  return (
    <userContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </userContext.Provider>
  );
}
