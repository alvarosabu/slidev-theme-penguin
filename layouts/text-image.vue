<template>
  <div class="bg-main slidev-layout">
    <div class="grid grid-cols-2 gap-8" :class="{ 'gap-16': $attrs.reverse }">
      <div
        class="prose pr-16"
        :class="{ 'order-1 text-right': $attrs.reverse }"
      >
        <slot name="default" />
      </div>
      <figure class="relative flex flex-col justify-center">
        <Zigzags
          class="absolute transform scale-75 -bottom-20 -right-16"
          :class="{ 'left-0 bottom-4': $attrs.reverse }"
        />
        <img
          :src="$attrs.media"
          class="rounded-lg shadow-lg object-cover z-10"
        />
      </figure>
    </div>
  </div>
</template>
