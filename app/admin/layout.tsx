import type { ReactNode } from "react";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { logoutAction } from "@/app/admin/actions";
import Link from "next/link";

export const metadata = {
  title: "Admin | Master Simex",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f5]" style={{ fontFamily: "system-ui, sans-serif", cursor: "auto" }}>
      <header className="bg-[#25282b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-semibold tracking-wide">
              MSPL Admin
            </Link>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-white/70">
              <Link href="/admin" className="hover:text-white">
                Dashboard
              </Link>
              <Link href="/admin/careers" className="hover:text-white">
                Careers
              </Link>
              <Link href="/admin/images" className="hover:text-white">
                Images
              </Link>
              <Link href="/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                View site
              </Link>
            </nav>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-xs uppercase tracking-wider px-3 py-2 border border-white/20 hover:border-white/50"
            >
              Log out
            </button>
          </form>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
