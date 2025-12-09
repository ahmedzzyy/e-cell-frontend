import { type APIResponse } from "@/services/types";
import { BASE_URL } from "@/services/config";
import { type UpdateProfileFormValues } from "@/lib/definitions/update-profile-schema";

export const getCurrentUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  const data = (await response.json()) as APIResponse;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const updateUserProfile = async (
  profileData: Partial<UpdateProfileFormValues>,
): Promise<APIResponse> => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(profileData),
  });

  const data = (await response.json()) as APIResponse;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
