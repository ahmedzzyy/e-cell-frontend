import { type APIResponse } from "@/services/types";
import { BASE_URL } from "@/services/config";

export const getCurrentUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/user/profile`);

  const data = (await response.json()) as APIResponse;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
