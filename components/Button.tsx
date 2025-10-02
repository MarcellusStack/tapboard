import React from "react";
import { Button as TamaguiButton, styled } from "tamagui";

const ButtonContainer = styled(TamaguiButton, {
  name: "Button",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$4",
  borderWidth: 0,
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  fontWeight: "600",
  gap: "$2",
  outlineWidth: 0,
  position: "relative",
  textAlign: "center",
  userSelect: "none",

  variants: {
    variant: {
      filled: {
        backgroundColor: "$green10",
        color: "white",
        borderWidth: 0,
        hoverStyle: {
          backgroundColor: "$green11",
        },
        pressStyle: {
          backgroundColor: "$green9",
        },
        focusStyle: {
          backgroundColor: "$green10",
          outlineWidth: 2,
          outlineColor: "$green8",
          outlineStyle: "solid",
        },
      },
      outlined: {
        backgroundColor: "transparent",
        color: "$green10",
        borderWidth: 1,
        borderColor: "$green10",
        hoverStyle: {
          backgroundColor: "$green2",
          borderColor: "$green11",
        },
        pressStyle: {
          backgroundColor: "$green3",
          borderColor: "$green9",
        },
        focusStyle: {
          backgroundColor: "transparent",
          borderColor: "$green8",
          outlineWidth: 2,
          outlineColor: "$green8",
          outlineStyle: "solid",
        },
      },
      light: {
        backgroundColor: "$green2",
        color: "$green11",
        borderWidth: 0,
        hoverStyle: {
          backgroundColor: "$green3",
        },
        pressStyle: {
          backgroundColor: "$green4",
        },
        focusStyle: {
          backgroundColor: "$green2",
          outlineWidth: 2,
          outlineColor: "$green8",
          outlineStyle: "solid",
        },
      },
      subtle: {
        backgroundColor: "transparent",
        color: "$green10",
        borderWidth: 0,
        hoverStyle: {
          backgroundColor: "$green2",
        },
        pressStyle: {
          backgroundColor: "$green3",
        },
        focusStyle: {
          backgroundColor: "transparent",
          outlineWidth: 2,
          outlineColor: "$green8",
          outlineStyle: "solid",
        },
      },
    },
    buttonSize: {
      sm: {
        height: "$3",
        paddingHorizontal: "$3",
        borderRadius: "$3",
      },
      md: {
        height: "$4",
        paddingHorizontal: "$4",
        borderRadius: "$4",
      },
      lg: {
        height: "$5",
        paddingHorizontal: "$5",
        borderRadius: "$5",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        hoverStyle: {
          opacity: 0.5,
        },
        pressStyle: {
          opacity: 0.5,
        },
        focusStyle: {
          opacity: 0.5,
        },
      },
    },
  } as const,

  defaultVariants: {
    variant: "filled",
    buttonSize: "md",
  },
});

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "light" | "subtle";
  buttonSize?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "filled",
  buttonSize = "md",
  fullWidth = false,
  disabled = false,
  onPress,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      buttonSize={buttonSize}
      fullWidth={fullWidth}
      disabled={disabled}
      onPress={onPress}
      asChild={asChild}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}
