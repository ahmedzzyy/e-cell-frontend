"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import { useUser } from "@/hooks/use-user";
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
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
      <RegisterForm />
    </main>
  );
}
