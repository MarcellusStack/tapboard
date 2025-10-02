// Custom colors for TapBoard app with green as primary CTA color
const primary = "#59D2A2"; // Mint Green - goal/nature focused
const secondary = "#9FE2D0"; // Seafoam - calming, supportive
const tertiary = "#F6B56A"; // Apricot Gold - energy, achievement

export default {
  light: {
    // Custom app colors
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,

    // Standard colors for compatibility
    text: "#000",
    background: "#fff",
    tint: primary,
    tabIconDefault: "#ccc",
    tabIconSelected: primary,
  },
  dark: {
    // Custom app colors (adjusted for dark theme)
    primary: "#7DDBA4", // Lighter green for dark mode
    secondary: "#B3E8D9", // Lighter seafoam for dark mode
    tertiary: "#F8C485", // Lighter apricot for dark mode

    // Standard colors for compatibility
    text: "#fff",
    background: "#000",
    tint: "#7DDBA4",
    tabIconDefault: "#ccc",
    tabIconSelected: "#7DDBA4",
  },
};
