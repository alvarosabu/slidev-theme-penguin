import AsUI from '@alvarosabu/ui/'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  Preset,
} from 'unocss'

export default defineConfig({
  theme: { ...AsUI.unoconfig.theme },
  shortcuts: AsUI.unoconfig.shortcuts,
  rules: AsUI.unoconfig.rules,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(AsUI.unoconfig.fonts) as unknown as Preset,
    presetTypography(AsUI.unoconfig.typography) as unknown as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
