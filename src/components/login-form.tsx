"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useUser } from "@/hooks/use-user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  type LoginFormValues,
  LoginUserSchema,
} from "@/lib/definitions/login-user-schema";
import { loginUser } from "@/services/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import type { TokenResponseData } from "@/services/types";
import { type User } from "@/constants/user";

interface LoginResponseData extends TokenResponseData {
  user: User;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [formError, setFormError] = React.useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  React.useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);

  const onSubmit = (values: LoginFormValues) => {
    setFormError(null);
    startTransition(async () => {
      try {
        const response = await loginUser(values);
        if (response?.success && response.payload) {
          const data = response.payload as LoginResponseData;
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          setUser(data.user);
          router.push("/dashboard");
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Login failed";
        setFormError(message);
      }
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formError && (
                <div
                  className="text-red-500 text-sm text-center"
                  role="alert"
                  aria-live="polite"
                >
                  {formError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full mt-2"
                disabled={isPending}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
