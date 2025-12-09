"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";

import {
  UserProviderContext,
  type UserProviderState,
} from "./user-provider-context";
import { type User } from "@/constants/user";
import { getCurrentUser } from "@/services/user";
import { refreshUser } from "@/services/auth";
import { TokenResponseData } from "@/services/types";

type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await getCurrentUser();
        setUser((response?.payload as User) || null);
      } catch {
        try {
          const tokenResponse = await refreshUser();
          if (!tokenResponse) {
            setUser(null);
            return;
          }
          const tokens = tokenResponse.payload as TokenResponseData;
          localStorage.setItem("accessToken", tokens.accessToken);
          localStorage.setItem("refreshToken", tokens.refreshToken);
          const response = await getCurrentUser();
          setUser((response?.payload as User) || null);
        } catch {
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    void fetchCurrentUser();
  }, []);

  const value = useMemo<UserProviderState>(
    () => ({ user, setUser, isLoading }),
    [user, isLoading],
  );

  return <UserProviderContext value={value}>{children}</UserProviderContext>;
}
