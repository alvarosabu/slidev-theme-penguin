<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-8" :class="{ 'gap-16': $attrs.reverse }">
      <div class="prose pr-16" :class="{ 'order-1 text-right': $attrs.reverse }">
        <slot name="default" />
      </div>
      <figure class="relative flex flex-col justify-center">
        <AsGraphic type="zigzag" absolute bottom-4 right-0 />
        <img :src="$attrs.media" class="rounded-lg shadow-lg object-cover z-10" />
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
