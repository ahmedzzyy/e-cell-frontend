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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registration Confirmed!</DialogTitle>
            <DialogDescription className="space-y-4 text-left pt-4">
              <p>
                Your registration for the{" "}
                <strong>Innovation Policy Consortium 2026 (IPC 2026)</strong>{" "}
                has been successfully confirmed. Welcome aboard!
              </p>

              <div className="bg-muted p-4 rounded-lg border-l-4 border-primary space-y-2">
                <h4 className="font-semibold text-foreground text-sm">
                  📋 Phase I: Case Study Submission
                </h4>
                <p className="text-sm">
                  Your team is required to conduct a{" "}
                  <strong>case study based on real challenges</strong> within
                  the student startup ecosystem. You must:
                </p>
                <ul className="text-sm space-y-1 ml-4 list-disc">
                  <li>
                    Conduct an <strong>actual survey</strong> with startups in
                    your ecosystem
                  </li>
                  <li>Identify practical challenges they currently face</li>
                  <li>Develop innovative, actionable solutions</li>
                  <li>Follow the official format strictly</li>
                </ul>
              </div>

              <div className="text-center my-6">
                <a
                  href="/Innovation_Policy_Consortium_2026_Case_Study_Format.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Download Case Study Format
                </a>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm space-y-1">
                <p className="text-yellow-900">
                  <strong>Submission Deadline:</strong> December 23, 2025
                </p>
                <p className="text-yellow-900">
                  <strong>Contact:</strong> For queries, reach out at{" "}
                  <a
                    href="mailto:ecell.mit@manipal.edu"
                    className="text-primary underline"
                  >
                    ecell.mit@manipal.edu
                  </a>
                </p>
              </div>

              <p className="text-sm">
                Detailed guidelines have also been sent to your email. Please
                check your inbox.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
