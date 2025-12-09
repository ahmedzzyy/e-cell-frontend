"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import {
  type RegisterIPCFormValues,
  RegisterIPCSchema,
} from "@/lib/definitions/register-ipc-schema";
import { registerForIPC } from "@/services/ipc";

export function RegisterIPCForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [formError, setFormError] = React.useState<string | null>(null);
  const [formSuccess, setFormSuccess] = React.useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterIPCFormValues>({
    resolver: zodResolver(RegisterIPCSchema),
    defaultValues: {
      nameOrg: "",
      emailOrg: "",
      phoneOrg: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (values: RegisterIPCFormValues) => {
    setFormError(null);
    setFormSuccess(null);
    startTransition(async () => {
      try {
        await registerForIPC(values);
        setFormSuccess(
          "You're registered for IPC. We'll email submission steps shortly.",
        );
        setShowSuccessDialog(true);
        form.reset();
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Registration failed";
        setFormError(message);
      }
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Register your team for IPC</CardTitle>
          <CardDescription>
            E-Cells (or similar business development club) can register once.
            Use your official details to be used for IPC submissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="nameOrg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="organization"
                        placeholder="e.g. E-Cell NIT Delhi"
                        disabled={isPending || !!formSuccess}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailOrg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="ecell.college@college.edu"
                        disabled={isPending || !!formSuccess}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneOrg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        autoComplete="tel"
                        placeholder="10-digit contact number"
                        maxLength={10}
                        disabled={isPending || !!formSuccess}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formSuccess && (
                <div
                  className="text-green-600 text-sm text-center"
                  role="status"
                  aria-live="polite"
                >
                  {formSuccess}
                </div>
              )}

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
                disabled={isPending || !!formSuccess}
              >
                {formSuccess
                  ? "Registered"
                  : isPending
                    ? "Registering..."
                    : "Register"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration received</DialogTitle>
            <DialogDescription>
              You&apos;re registered for IPC. We&apos;ll email submission
              timelines shortly. Please watch your inbox.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
