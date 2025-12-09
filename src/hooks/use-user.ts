import { use } from "react";

import { UserProviderContext } from "@/components/user-provider-context";

export const useUser = () => {
  const context = use(UserProviderContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
