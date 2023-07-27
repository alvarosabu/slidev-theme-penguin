<script setup lang="ts">
import { computed } from "vue";
import { useNow } from "@vueuse/core";

defineProps({
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
});

const { now } = useNow();

const date = computed(() => now?.value.toLocaleDateString("en-US"));
</script>
<template>
  <footer
    v-if="eventLogo || twitter"
    class="mt-auto flex justify-between items-center w-full text-primary dark:text-white z-10"
  >
    <div class="mb-0 flex items-center">
      <a :href="eventUrl" target="_blank"
        ><img :src="eventLogo" class="h-8 mr-4" alt="Event image" /></a
      ><span>{{ date }}</span>
    </div>
    <a v-if="twitter" :href="twitterUrl" target="_blank">{{ twitter }}</a>
  </footer>
</template>

<style scoped>
a {
  border-color: transparent;
}
</style>
