/* ./setup/shiki.ts */
import fs from 'node:fs'

import { defineShikiSetup } from '@slidev/types'

const myTheme = JSON.parse(fs.readFileSync('setup/theme/penguin-theme.json', 'utf8'))

export default defineShikiSetup(() => ({
  theme: myTheme,
}))