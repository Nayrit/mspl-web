"use client";

import { useState, FormEvent } from "react";
import { loginAction } from "@/app/admin/actions";

export default function AdminLoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#25282b]" style={{ cursor: "auto" }}>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white p-8 shadow-xl space-y-5"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#d61016] font-semibold mb-2">MSPL</p>
          <h1 className="text-2xl font-bold text-[#25282b]">Admin login</h1>
          <p className="text-sm text-[#72777d] mt-1">Manage careers and website images.</p>
        </div>

        <div>
          <label htmlFor="username" className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">
            Username
          </label>
          <input
            id="username"
            name="username"
            required
            autoComplete="username"
            className="w-full border border-[#e4e5e6] px-4 py-3 text-sm focus:border-[#d61016] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-[#72777d] mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full border border-[#e4e5e6] px-4 py-3 text-sm focus:border-[#d61016] focus:outline-none"
          />
        </div>

        {error && (
          <p className="text-sm text-[#d61016]" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#d61016] text-white py-3 text-sm font-semibold uppercase tracking-wider disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
