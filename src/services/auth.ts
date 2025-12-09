import { APIResponse } from "@/services/types";
import { BASE_URL } from "@/services/config";
import { type RegisterFormValues } from "@/lib/definitions/register-user-schema";
import { type LoginFormValues } from "@/lib/definitions/login-user-schema";

export const registerUser = async (
  registerData: RegisterFormValues,
): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(registerData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as APIResponse;

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const loginUser = async (
  loginData: LoginFormValues,
): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as APIResponse;
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const refreshUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    body: JSON.stringify({
      refreshToken: localStorage.getItem("refreshToken"),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = (await response.json()) as APIResponse;
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const logoutUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = (await response.json()) as APIResponse;
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
