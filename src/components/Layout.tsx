import React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-(--background) text-(--foreground) h-dvh">
      {children}
    </div>
  );
};
