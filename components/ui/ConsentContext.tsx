"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "mspl-cookie-consent";

export type ConsentStatus = "pending" | "accepted" | "rejected";

function getConsentSnapshot(): ConsentStatus {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "accepted") return "accepted";
  if (stored === "rejected") return "rejected";
  return "pending";
}

function subscribeConsent(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener("mspl-consent-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("mspl-consent-change", onStoreChange);
  };
}

interface ConsentContextValue {
  consent: ConsentStatus;
  bannerVisible: boolean;
  accept: () => void;
  reject: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    () => "pending" as ConsentStatus,
  );

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event("mspl-consent-change"));
  }, []);

  const reject = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    window.dispatchEvent(new Event("mspl-consent-change"));
  }, []);

  const value = useMemo(
    () => ({
      consent,
      bannerVisible: consent === "pending",
      accept,
      reject,
    }),
    [consent, accept, reject],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}
