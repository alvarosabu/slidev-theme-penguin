import { theme, shortcuts, rules, fonts, typography } from "@alvarosabu/ui";
import {
  defineConfig,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  Preset,
} from "unocss";

export default defineConfig({
  theme,
  shortcuts,
  rules,
  presets: [
    presetWebFonts(fonts) as unknown as Preset,
    presetTypography(typography) as unknown as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
