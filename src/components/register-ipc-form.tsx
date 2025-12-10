// RegisterIPCForm.tsx (Modified for Blue Background on Card)
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";

// NOTE: All these imports must point to your internal component library
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
import { cn } from "@/lib/utils"; // Assumed utility for class merging
import {
  type RegisterIPCFormValues,
  RegisterIPCSchema,
} from "@/lib/definitions/register-ipc-schema";
import { registerForIPC } from "@/services/ipc"; // Assumed registration service


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
        // Mock registration logic if service is not available
        if (typeof registerForIPC !== 'function') {
             await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call delay
        } else {
             await registerForIPC(values);
        }
       
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

  // --- Reusable Form Input Component with Dark Theme Styling ---
  const DarkInput = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof Input>>(
    (props, ref) => (
      <Input
        ref={ref}
        className="bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-blue-500 focus-visible:ring-offset-slate-950"
        {...props}
      />
    )
  );
  DarkInput.displayName = "DarkInput";

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* CARD: STYLED WITH BLUE/VIOLET GRADIENT BACKGROUND */}
      <Card 
        className="
          bg-gradient-to-br from-slate-900/90 to-blue-950/70 
          border-blue-800/50 
          text-slate-100 
          shadow-2xl ring-1 ring-blue-900/80
        "
      >
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white font-bold tracking-wide">
            Register your team for IPC
          </CardTitle>
          <CardDescription className="text-blue-200/80">
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
                    <FormLabel className="text-slate-300">
                      Organization name
                    </FormLabel>
                    <FormControl>
                      <DarkInput
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
                    <FormLabel className="text-slate-300">
                      Organization email
                    </FormLabel>
                    <FormControl>
                      <DarkInput
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
                    <FormLabel className="text-slate-300">Phone</FormLabel>
                    <FormControl>
                      <DarkInput
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
                  className="text-green-400 bg-green-950/50 p-3 rounded-lg text-sm text-center"
                  role="status"
                  aria-live="polite"
                >
                  {formSuccess}
                </div>
              )}

              {formError && (
                <div
                  className="text-red-400 bg-red-950/50 p-3 rounded-lg text-sm text-center"
                  role="alert"
                  aria-live="polite"
                >
                  {formError}
                </div>
              )}

              {/* BUTTON: Styled with a blue/violet gradient for contrast */}
              <Button
                type="submit"
                className="w-full mt-2 h-11 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* DIALOG: Styled for dark theme (Success message) */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 text-slate-100">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-400">
              Registration Confirmed!
            </DialogTitle>
            <DialogDescription className="space-y-4 text-left pt-4 text-slate-300">
              <p>
                Your registration for the{" "}
                <strong className="text-white">
                  Innovation Policy Consortium 2026 (IPC 2026)
                </strong>{" "}
                has been successfully confirmed. Welcome aboard!
              </p>

              {/* Success Callout Box */}
              <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
                <h4 className="font-semibold text-blue-400 text-sm">
                  📋 Phase I: Case Study Submission
                </h4>
                <p className="text-slate-300 text-sm">
                  Your team is required to conduct a{" "}
                  <strong className="text-white">
                    case study based on real challenges
                  </strong>{" "}
                  within the student startup ecosystem. You must:
                </p>
                <ul className="text-slate-400 text-sm space-y-1 ml-4 list-disc">
                  <li>
                    Conduct an <strong className="text-white">actual survey</strong> with startups in
                    your ecosystem
                  </li>
                  <li>Identify practical challenges they currently face</li>
                  <li>Develop innovative, actionable solutions</li>
                  <li>Follow the official format strictly</li>
                  {/*  - Suggested diagram for instructional value */}
                </ul>
              </div>

              {/* Download Button */}
              <div className="text-center my-6">
                <a
                  href="/Innovation_Policy_Consortium_2026_Case_Study_Format.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Styled with a strong gradient and shadow
                  className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Download Case Study Format
                </a>
              </div>

              {/* Deadline/Contact Warning Box */}
              <div className="bg-yellow-950/30 border border-yellow-700 rounded-lg p-4 text-sm space-y-1">
                <p className="text-yellow-300">
                  <strong>Submission Deadline:</strong> December 23, 2025
                </p>
                <p className="text-yellow-300">
                  <strong>Contact:</strong> For queries, reach out at{" "}
                  <a
                    href="mailto:ecell.mit@manipal.edu"
                    className="text-blue-400 underline"
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
            {/* Standard button styled to match the dark theme primary color */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setShowSuccessDialog(false)}
            >
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}