import { createContext } from "react";

const UserContext = createContext(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};
