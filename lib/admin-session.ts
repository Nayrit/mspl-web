export const COOKIE_NAME = "mspl_admin_session";
export const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

const DEV_FALLBACK_SECRET = "mspl-admin-dev-secret-change-in-production";

function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

function getAdminUsername(): string {
  const fromEnv = process.env.ADMIN_USERNAME?.trim();
  if (fromEnv) return fromEnv;
  if (isProduction()) {
    throw new Error("ADMIN_USERNAME must be set in production.");
  }
  return "admin";
}

function getAdminPassword(): string {
  const fromEnv = process.env.ADMIN_PASSWORD?.trim();
  if (fromEnv) return fromEnv;
  if (isProduction()) {
    throw new Error("ADMIN_PASSWORD must be set in production.");
  }
  return "admin1234";
}

export function getSessionSecret(): string {
  const fromEnv = process.env.ADMIN_SECRET?.trim();
  if (fromEnv && fromEnv !== DEV_FALLBACK_SECRET && fromEnv.length >= 32) {
    return fromEnv;
  }
  if (isProduction()) {
    throw new Error(
      "ADMIN_SECRET must be set to a strong random value (32+ characters) in production.",
    );
  }
  return fromEnv && fromEnv.length >= 16 ? fromEnv : DEV_FALLBACK_SECRET;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSessionSecret()),
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
  let expectedUser: string;
  let expectedPass: string;
  try {
    expectedUser = getAdminUsername();
    expectedPass = getAdminPassword();
  } catch {
    return false;
  }

  if (username.length !== expectedUser.length || password.length !== expectedPass.length) {
    return false;
  }

  let userMismatch = 0;
  let passMismatch = 0;
  for (let i = 0; i < expectedUser.length; i += 1) {
    userMismatch |= username.charCodeAt(i) ^ expectedUser.charCodeAt(i);
  }
  for (let i = 0; i < expectedPass.length; i += 1) {
    passMismatch |= password.charCodeAt(i) ^ expectedPass.charCodeAt(i);
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
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;
    const expected = await sign(payload);
    if (!timingSafeEqualHex(signature, expected)) return false;
    const [, expiresStr] = payload.split(":");
    const expires = Number(expiresStr);
    return Number.isFinite(expires) && expires > Date.now();
  } catch {
    return false;
  }
}
