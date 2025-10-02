import React from "react";
import { GetThemeValueForKey, H1, H2, H3, H4 } from "tamagui";

interface HeadingProps {
  children: React.ReactNode;
  headingSize?: "sm" | "md" | "lg" | "xl";
  textAlign?: "left" | "center" | "right";
  color?: GetThemeValueForKey<"color">;
  onPress?: () => void;
  asChild?: boolean;
}

export function Heading({
  children,
  headingSize = "md",
  textAlign = "left",
  color,
  onPress,
  asChild = false,
  ...props
}: HeadingProps) {
  const commonProps = {
    textAlign,
    color,
    onPress,
    asChild,
    ...props,
  };

  switch (headingSize) {
    case "sm":
      return (
        <H4 fontSize="$4" lineHeight="$5" fontWeight="600" {...commonProps}>
          {children}
        </H4>
      );
    case "md":
      return (
        <H3 fontSize="$5" lineHeight="$6" fontWeight="600" {...commonProps}>
          {children}
        </H3>
      );
    case "lg":
      return (
        <H2 fontSize="$6" lineHeight="$8" fontWeight="bold" {...commonProps}>
          {children}
        </H2>
      );
    case "xl":
      return (
        <H1 fontSize="$9" lineHeight="$10" fontWeight="bold" {...commonProps}>
          {children}
        </H1>
      );
    default:
      return (
        <H3 fontSize="$5" lineHeight="$6" fontWeight="600" {...commonProps}>
          {children}
        </H3>
      );
  }
}
