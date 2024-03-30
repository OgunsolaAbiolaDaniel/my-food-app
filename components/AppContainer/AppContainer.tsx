import React, { ReactNode } from "react";

function AppContainer({
  children,
  className = "",
  containerClasss = "white",
}: {
  children: ReactNode;
  className?: string;
  containerClasss?: string;
}) {
  return (
    <div className={`w-full max-md:px-2 px-[100px] ${containerClasss || ""}`}>
      <div className={`max-w-[1440px] ${className || ""}`}>{children}</div>
    </div>
  );
}

export default AppContainer;
