<!-- global-top.vue -->

<template>
  <footer
    v-if="$slidev.themeConfigs.eventLogo || $slidev.themeConfigs.twitter"
    class="absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary dark:text-white z-10"
  >
    <div class="mb-0 flex items-center">
      <a
        :href="$slidev.themeConfigs.eventUrl"
        target="_blank"
      ><img
        :src="$slidev.themeConfigs.eventLogo"
        class="h-8 mr-4"
        alt="Event image"
      ></a>
    </div>
    <a
      v-if="$slidev.themeConfigs.twitter"
      :href="$slidev.themeConfigs.twitterUrl"
      target="_blank"
    ><logos-twitter />{{ $slidev.themeConfigs.twitter }}</a>
  </footer>
</template>
