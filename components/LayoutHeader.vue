<template>
  <header
    v-if="
      $slidev.themeConfigs.logoHeader && $slidev.nav.currentLayout === 'intro'
    "
    class="absolute w-full px-16 py-8 top-0 h-10 z-10"
  >
    <img
      :src="$slidev.themeConfigs.logoHeader"
      class="w-16 h-16 object-contain"
    >
  </header>
</template>
