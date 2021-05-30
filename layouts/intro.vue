<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  logoHeader: {
    type: String,
  },
  eventLogo: {
    type: String,
  },
  eventUrl: {
    type: String,
  },
  twitter: {
    type: String,
  },
  twitterUrl: {
    type: String,
  },
})
</script>

<template>
  <div class="bg-main slidev-layout intro">
    <LayoutHeader :logo-header="logoHeader" />
    <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
    <div class="flex justify-center text-center">
      <slot />
    </div>
    <LayoutFooter
      :event-logo="eventLogo"
      :event-url="eventUrl"
      :twitter="twitter"
      :twitter-url="twitterUrl"
    />
    <Zigzags class="absolute top-20 -right-30" />
  </div>
</template>
