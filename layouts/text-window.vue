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
  reverse: {
    type: Boolean
  }
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
    <div class="grid grid-cols-2 gap-8" :class="{ 'gap-16': reverse}">
     
      <div class="prose pr-16 " :class="{ 'order-1 text-right': reverse}">
        <slot name="default" />
      </div>
       <div class="relative" >
        <Zigzags class="absolute transform scale-75 -bottom-20 -right-16" :class="{'left-0' :reverse}" />
        <TheConsole
          class="rounded-lg shadow-lg object-cover z-10"
        >
        <slot name="window"></slot>
        </TheConsole>
      </div>
    </div>
  </default>
</template>
