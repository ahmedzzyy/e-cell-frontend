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
  type RegisterFormValues,
  RegisterUserSchema,
} from "@/lib/definitions/register-user-schema";
import { registerUser } from "@/services/auth";

export function RegisterForm(props: React.HTMLAttributes<HTMLFormElement>) {
  const router = useRouter();
  const { user } = useUser();
  const [formError, setFormError] = React.useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    mode: "onSubmit",
  });

  React.useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);

  const onSubmit = (values: RegisterFormValues) => {
    setFormError(null);
    startTransition(async () => {
      try {
        await registerUser(values);
        router.push("/login");
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Registration failed";
        setFormError(message);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="form-glass flex flex-col gap-6 p-8 rounded-xl shadow-lg w-full max-w-md mx-auto"
        {...props}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Create your account
        </h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
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
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  autoComplete="tel"
                  placeholder="10-digit phone"
                  maxLength={10}
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

        <Button type="submit" className="w-full mt-2" disabled={isPending}>
          {isPending ? "Registering..." : "Register"}
        </Button>
      </form>
    </Form>
  );
}
