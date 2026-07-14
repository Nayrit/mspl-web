import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  SESSION_TTL_MS,
  createSessionToken,
  isValidSessionToken,
  verifyAdminCredentials,
} from "@/lib/admin-session";

export { verifyAdminCredentials, COOKIE_NAME };

export async function createAdminSession(): Promise<void> {
  const token = await createSessionToken();
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function destroyAdminSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return isValidSessionToken(jar.get(COOKIE_NAME)?.value);
}
