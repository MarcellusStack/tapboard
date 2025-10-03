import {
  ClerkLoaded,
  ClerkProvider as ClerkProviderClerk,
} from "@clerk/clerk-expo";
import { resourceCache } from "@clerk/clerk-expo/resource-cache";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import React from "react";

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }
  return (
    <ClerkProviderClerk
      tokenCache={tokenCache}
      publishableKey={publishableKey}
      __experimental_resourceCache={resourceCache}
    >
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProviderClerk>
  );
};
