import { useUser } from "@/hooks/use-user";
import React, { useTransition } from "react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { setUser } = useUser();
  const [isPending, startTransition] = useTransition();

  return <div {...props}></div>;
}
