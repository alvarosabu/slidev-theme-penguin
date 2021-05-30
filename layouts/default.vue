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
  <div class="bg-main slidev-layout">
    <CornerCurves class="absolute transform bottom-0 right-0 flip-x" />
    <LayoutHeader :logo-header="logoHeader" />
    <div class="my-auto z-10">
      <slot />
    </div>
    <LayoutFooter
      :event-logo="eventLogo"
      :event-url="eventUrl"
      :twitter="twitter"
      :twitter-url="twitterUrl"
    />
  </div>
</template>
