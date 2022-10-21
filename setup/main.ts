import { defineAppSetup } from '@slidev/types'

import AsUI from '@alvarosabu/ui'

export default defineAppSetup(({ app }) => {
  // Vue App
  app.use(AsUI)
})
