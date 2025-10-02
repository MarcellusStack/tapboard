import { styled, Button as TamaguiButton } from "tamagui";

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
        pressStyle: {
          backgroundColor: "$green9",
          opacity: 0.9,
        },
        hoverStyle: {
          backgroundColor: "$green11",
          opacity: 0.9,
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
        pressStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$green9",
        },
        hoverStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$green11",
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
        pressStyle: {
          backgroundColor: "$green3",
          opacity: 0.9,
        },
        hoverStyle: {
          backgroundColor: "$green3",
          opacity: 0.9,
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
        pressStyle: {
          backgroundColor: "$green2",
        },
        hoverStyle: {
          backgroundColor: "transparent",
        },
        focusStyle: {
          backgroundColor: "transparent",
          outlineWidth: 2,
          outlineColor: "$green8",
          outlineStyle: "solid",
        },
      },
    },
    size: {
      sm: {
        size: "$3",
        borderRadius: "$3",
      },
      md: {
        size: "$4",
        borderRadius: "$4",
      },
      lg: {
        size: "$5",
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
        pressStyle: {
          opacity: 0.5,
        },
        hoverStyle: {
          opacity: 0.5,
        },
      },
    },
  } as const,

  defaultVariants: {
    variant: "filled",
    size: "md",
  },
});

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "light" | "subtle";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  href?: string;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "filled",
  size = "md",
  fullWidth = false,
  disabled = false,
  onPress,
  href,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onPress={onPress}
      href={href}
      asChild={asChild}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}
