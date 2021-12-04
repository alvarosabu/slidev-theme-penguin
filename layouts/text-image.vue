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
  media: {
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
     
      <div class="w-1/2 prose pr-16">
        <slot />
      </div>
       <figure class="w-1/2 relative pl-16">
        <Zigzags class="absolute transform scale-75 -bottom-20 -right-16" />
        <img
          :src="media"
          class="rounded-lg shadow-lg object-cover"
        />
      </figure>
    </div>
  </default>
</template>
