import React from "react";
import { ClerkProvider } from "./clerk-provider";
import { JazzAndAuth } from "./jazz-provider";

export const Providers = ( {children} : {children: React.ReactNode}) => {
  return (
    <ClerkProvider>
      <JazzAndAuth>
        {children}
      </JazzAndAuth>
    </ClerkProvider>
  );
};
