import { APIResponse } from "@/services/types";
import { BASE_URL } from "@/services/config";

export const registerUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({}),
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

export const loginUser = async (): Promise<APIResponse | undefined> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({}),
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
    body: JSON.stringify({}),
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
    body: JSON.stringify({}),
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
