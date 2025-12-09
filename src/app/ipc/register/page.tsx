import Navbar from "@/components/Navbar";
import { RegisterIPCForm } from "@/components/register-ipc-form";

export default function RegisterIPCPage() {
  return (
    <main>
      <Navbar className="bg-primary" />
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <RegisterIPCForm />
        </div>
      </div>
    </main>
  );
}
