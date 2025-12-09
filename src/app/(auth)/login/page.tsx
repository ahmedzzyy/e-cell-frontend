"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import { useUser } from "@/hooks/use-user";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard");
    }
  }, [user, router, isLoading]);

  return (
    <main>
      <Navbar />
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
