import { type RegisterIPCFormValues } from "@/lib/definitions/register-ipc-schema";
import { BASE_URL } from "@/services/config";
import { APIResponse } from "@/services/types";

export const registerForIPC = async (
  ipcData: RegisterIPCFormValues,
): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/ipc/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ipcData),
  });
  const data = (await response.json()) as APIResponse;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
