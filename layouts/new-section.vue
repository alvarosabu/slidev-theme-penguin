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
  <div class="bg-section slidev-layout new-section">
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

<style>
.slidev-layout.new-section {
  h1 {
    @apply text-primary text-4xl leading-20 mb-0 font-title font-extrabold;
  }

  h1 + p {
    @apply mt-4 opacity-100;
  }

  p > img {
    @apply w-2/3 mx-auto;
  }
}
</style>
