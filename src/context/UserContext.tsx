import { createContext } from "react";

const UserContext = createContext(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ name: João }}>
      {children}
    </UserContext.Provider>
  );
};
