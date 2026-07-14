export const COOKIE_NAME = "mspl_admin_session";
export const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin1234";

function getSecret(): string {
  return process.env.ADMIN_SECRET || "mspl-admin-dev-secret-change-in-production";
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );
  return toHex(signature);
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  if (username.length !== ADMIN_USERNAME.length || password.length !== ADMIN_PASSWORD.length) {
    return false;
  }
  let userMismatch = 0;
  let passMismatch = 0;
  for (let i = 0; i < ADMIN_USERNAME.length; i += 1) {
    userMismatch |= username.charCodeAt(i) ^ ADMIN_USERNAME.charCodeAt(i);
  }
  for (let i = 0; i < ADMIN_PASSWORD.length; i += 1) {
    passMismatch |= password.charCodeAt(i) ^ ADMIN_PASSWORD.charCodeAt(i);
  }
  return userMismatch === 0 && passMismatch === 0;
}

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `admin:${expires}`;
  const signature = await sign(payload);
  return `${payload}.${signature}`;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = await sign(payload);
  if (!timingSafeEqualHex(signature, expected)) return false;
  const [, expiresStr] = payload.split(":");
  const expires = Number(expiresStr);
  return Number.isFinite(expires) && expires > Date.now();
}
