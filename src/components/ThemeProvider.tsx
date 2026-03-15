import React, { useEffect } from "react";

import useAppStore from "../store/useAppStore";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useAppStore.use.theme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};
