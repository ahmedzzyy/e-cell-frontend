"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/services/auth";
import { useUser } from "@/hooks/use-user";

export default function LogoutButton() {
  const router = useRouter();
  const { setUser } = useUser();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");

  const handleLogout = () => {
    setError("");
    startTransition(async () => {
      try {
        await logoutUser();
        // Clear local storage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // Clear user context
        setUser(null);
        // Redirect to login
        router.push("/login");
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to logout",
        );
      }
    });
  };

  return (
    <>
      <Button
        onClick={handleLogout}
        disabled={isPending}
        variant="secondary"
        className="w-full"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging out...
          </>
        ) : (
          <>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </>
        )}
      </Button>
      {error && (
        <div className="rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
          {error}
        </div>
      )}
    </>
  );
}
