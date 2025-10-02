import { styled, Text, XStack } from "tamagui";

const BadgeContainer = styled(XStack, {
  name: "Badge",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  paddingVertical: "$2",
  gap: "$2",

  variants: {
    variant: {
      light: {
        backgroundColor: "$green2",
        borderWidth: 0,
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$green10",
      },
      filled: {
        backgroundColor: "$green10",
        borderWidth: 0,
      },
    },
    size: {
      sm: {
        paddingHorizontal: "$2",
        paddingVertical: "$1",
        borderRadius: "$3",
      },
      md: {
        paddingHorizontal: "$3",
        paddingVertical: "$2",
        borderRadius: "$4",
      },
      lg: {
        paddingHorizontal: "$4",
        paddingVertical: "$3",
        borderRadius: "$5",
      },
    },
  } as const,

  defaultVariants: {
    variant: "light",
    size: "md",
  },
});

const BadgeText = styled(Text, {
  name: "BadgeText",
  fontSize: "$3",
  fontWeight: "500",

  variants: {
    variant: {
      light: {
        color: "$green11",
      },
      outline: {
        color: "$green10",
      },
      filled: {
        color: "white",
      },
    },
    size: {
      sm: {
        fontSize: "$2",
      },
      md: {
        fontSize: "$3",
      },
      lg: {
        fontSize: "$4",
      },
    },
  } as const,

  defaultVariants: {
    variant: "light",
    size: "md",
  },
});

interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "outline" | "filled";
  size?: "sm" | "md" | "lg";
  onPress?: () => void;
}

export function Badge({
  children,
  variant = "light",
  size = "md",
  onPress,
}: BadgeProps) {
  return (
    <BadgeContainer
      variant={variant}
      size={size}
      pressable={!!onPress}
      onPress={onPress}
    >
      <BadgeText variant={variant} size={size}>
        {children}
      </BadgeText>
    </BadgeContainer>
  );
}
