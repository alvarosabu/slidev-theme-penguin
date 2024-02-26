import fs from 'node:fs'

/* ./setup/shiki.ts */

import { defineShikijiSetup } from '@slidev/types'

const myTheme = JSON.parse(fs.readFileSync('setup/theme/penguin-theme.json', 'utf8'))
console.log(myTheme)

export default defineShikijiSetup(() => ({
  theme: myTheme,
}))