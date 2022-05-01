<template>
  <div class="bg-main slidev-layout">
    <div class="flex items-center">
      <figure class="w-1/2">
        <TheDots />
        <img
          :src="$attrs.presenterImage"
          class="relative rounded-full object-cover h-80 w-80 border border-8 border-secondary-400 z-10"
        />
      </figure>
      <div class="w-1/2">
        <slot />
      </div>
    </div>
  </div>
</template>
