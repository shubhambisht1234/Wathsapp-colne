import { createContext, useState } from "react";

export const AccountContext = createContext(null);
export const AcountProvider = ({ children }) => {
  const [account, setAcount] = useState();
  return (
    <>
      <AccountContext.Provider value={{ account, setAcount }}>
        {children}
      </AccountContext.Provider>
    </>
  );
};
