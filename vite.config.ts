import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    svgLoader(),
    Unocss({
      /* options */
      configFile: 'unocss.config.ts',
    }),
  ],
})
