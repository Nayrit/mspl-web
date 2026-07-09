"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface SplashContextValue {
  splashDone: boolean;
  completeSplash: () => void;
}

const SplashContext = createContext<SplashContextValue>({
  splashDone: false,
  completeSplash: () => {},
});

export function SplashProvider({ children }: { children: ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  const completeSplash = useCallback(() => {
    setSplashDone(true);
  }, []);

  const value = useMemo(
    () => ({ splashDone, completeSplash }),
    [splashDone, completeSplash],
  );

  return <SplashContext.Provider value={value}>{children}</SplashContext.Provider>;
}

export function useSplash() {
  return useContext(SplashContext);
}
