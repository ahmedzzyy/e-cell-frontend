"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Home,
  IdCard,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { type User } from "@/constants/user";
import EditProfileDialog from "@/components/edit-profile-dialog";
import LogoutButton from "@/components/logout-button";

interface DashboardContentProps {
  user: User;
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border/80 bg-card/70 px-4 py-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function formatDate(value?: Date | string) {
  if (!value) return "Not available";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Not available";
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const [currentUser, setCurrentUser] = useState<User>(user);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-12 py-16">
        <div className="mb-8 flex items-start justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </div>
        <div className="mb-8 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Dashboard
          </p>
          <h1 className="text-3xl font-bold">
            Welcome back,{" "}
            <span className="text-primary">{currentUser.name}</span>
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border border-border/80 bg-card/80 p-6 shadow-md">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserRound className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">{currentUser.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="break-all">{currentUser.email}</span>
                    </div>
                  </div>
                </div>
                {/* Verification backend pending */}
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {currentUser.emailVerified ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verification Pending</span>
                    </>
                  )}
                </div> */}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoItem
                  icon={Phone}
                  label="Phone"
                  value={currentUser.phone ?? "Not added"}
                />
                <InfoItem
                  icon={MapPin}
                  label="College"
                  value={currentUser.college ?? "Not added"}
                />
                <InfoItem
                  icon={CalendarDays}
                  label="Expected Graduation"
                  value={
                    currentUser.expectedGraduationYear
                      ? currentUser.expectedGraduationYear.toString()
                      : "Not set"
                  }
                />
                <InfoItem
                  icon={IdCard}
                  label="Student ID"
                  value={currentUser.studentCollegeID ?? "Not provided"}
                />
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border/80 bg-card/80 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Account
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <span>Member since</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {formatDate(currentUser.createdAt)}
                  </span>
                </div>
                {/* Verification backend pending */}
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>Status</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {currentUser.emailVerified ? "Verified" : "Pending verification"}
                  </span>
                </div> */}
              </div>
            </Card>

            <Card className="border border-border/80 bg-card/80 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Quick links
              </p>
              <div className="mt-4 grid gap-3">
                <EditProfileDialog user={currentUser} onUpdate={setCurrentUser}>
                  <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                    Edit profile
                  </button>
                </EditProfileDialog>
                <LogoutButton />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
