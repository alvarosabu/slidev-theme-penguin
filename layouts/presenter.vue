<script setup lang="ts">
import { defineProps, defineComponent } from 'vue'
import Default from './default.vue'

const components = defineComponent({ Default })
const props = defineProps({
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
  presenterImage: {
    type: String,
  },
})
</script>

<template>
  <default
    class="presenter"
    :logo-header="logoHeader"
    :event-logo="eventLogo"
    :event-url="eventUrl"
    :twitter="twitter"
    :twitter-url="twitterUrl"
  >
    <div class="flex items-center">
      <figure class="w-1/2 ">
      <TheDots />
        <img
          :src="presenterImage"
          class="
            relative  
            rounded-full
            object-cover
            h-80
            w-80
            border border-8 border-secondary-400 z-10
          "
        />
      </figure>
      <div class="w-1/2">
        <slot />
      </div>
    </div>
  </default>
</template>
