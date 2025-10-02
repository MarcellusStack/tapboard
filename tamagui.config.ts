import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

export const tamaguiConfig = createTamagui({
  ...defaultConfig,

  media: {
    ...defaultConfig.media,
    sm: { maxWidth: 600 },
    md: { maxWidth: 900 },
    lg: { minWidth: 901 },
  },

  settings: {
    disableSSR: true,
    allowedStyleValues: "somewhat-strict-web",
  },
});

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
