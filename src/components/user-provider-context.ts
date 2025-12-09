import { type User } from "@/constants/user";
import { createContext } from "react";

export type UserProviderState = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
};

const initialState: UserProviderState = {
  user: null,
  setUser: () => null,
  isLoading: true,
};

export const UserProviderContext =
  createContext<UserProviderState>(initialState);
