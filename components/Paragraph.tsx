import React from "react";
import { GetThemeValueForKey, Paragraph as TamaguiParagraph, styled } from "tamagui";

const ParagraphContainer = styled(TamaguiParagraph, {
  name: "Paragraph",
  lineHeight: 1.5,

  variants: {
    paragraphSize: {
      sm: {
        fontSize: "$3",
        lineHeight: "$4",
      },
      md: {
        fontSize: "$4",
        lineHeight: "$5",
      },
      lg: {
        fontSize: "$5",
        lineHeight: "$6",
      },
    },
    variant: {
      normal: {
        color: "$color",
      },
      green: {
        color: "$green10",
      },
      dimmed: {
        color: "$white9",
      },
    },
    textAlign: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
  } as const,

  defaultVariants: {
    paragraphSize: "md",
    variant: "normal",
    textAlign: "left",
  },
});

interface ParagraphProps {
  children: React.ReactNode;
  paragraphSize?: "sm" | "md" | "lg";
  variant?: "normal" | "green" | "dimmed";
  textAlign?: "left" | "center" | "right";
  color?: string;
  onPress?: () => void;
  asChild?: boolean;
  maxWidth?: number | string;
}

export function Paragraph({
  children,
  paragraphSize = "md",
  variant = "normal",
  textAlign = "left",
  color,
  onPress,
  asChild = false,
  maxWidth,
  ...props
}: ParagraphProps) {
  return (
    <ParagraphContainer
      paragraphSize={paragraphSize}
      variant={variant}
      textAlign={textAlign}
      color={color as GetThemeValueForKey<"color">}
      onPress={onPress}
      asChild={asChild}
      maxWidth={maxWidth as GetThemeValueForKey<"maxWidth">}
      {...props}
    >
      {children}
    </ParagraphContainer>
  );
}
