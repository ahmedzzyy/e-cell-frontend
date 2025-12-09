"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  UpdateProfileSchema,
  type UpdateProfileFormValues,
} from "@/lib/definitions/update-profile-schema";
import { updateUserProfile } from "@/services/user";
import { type User } from "@/constants/user";

interface EditProfileDialogProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
  children: React.ReactNode;
}

export default function EditProfileDialog({
  user,
  onUpdate,
  children,
}: EditProfileDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone ?? "",
      college: user.college ?? "",
      expectedGraduationYear: user.expectedGraduationYear ?? null,
      studentCollegeID: user.studentCollegeID ?? "",
    },
  });

  const onSubmit = (data: UpdateProfileFormValues) => {
    setError("");
    startTransition(async () => {
      try {
        // Filter out empty strings and convert them to undefined
        const cleanedData: Partial<UpdateProfileFormValues> = {};
        (Object.keys(data) as Array<keyof UpdateProfileFormValues>).forEach(
          (key) => {
            const value = data[key];
            if (value !== "" && value !== null && value !== undefined) {
              cleanedData[key] = value as never;
            }
          },
        );

        const response = await updateUserProfile(cleanedData);
        const updatedUser = response.payload as { user: User };
        onUpdate(updatedUser.user);
        setOpen(false);
        form.reset({
          name: updatedUser.user.name,
          email: updatedUser.user.email,
          phone: updatedUser.user.phone ?? "",
          college: updatedUser.user.college ?? "",
          expectedGraduationYear:
            updatedUser.user.expectedGraduationYear ?? null,
          studentCollegeID: updatedUser.user.studentCollegeID ?? "",
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to update profile",
        );
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile information here. Click save when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
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
                      placeholder="you@example.com"
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
                  <FormLabel>Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="10-digit number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your college name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectedGraduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Graduation Year (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="2025"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        field.onChange(val === "" ? null : parseInt(val, 10));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="studentCollegeID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student ID (Optional)</FormLabel>
                  <FormDescription>
                    This is the unique ID number assigned to you by your college
                    or university.
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Your student ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
