<template>
  <div class="bg-main slidev-layout" :class="{ grid: $attrs.center }">
    <CornerCurves class="absolute transform bottom-0 right-0 flip-x" />
    <div class="my-auto z-10">
      <slot />
    </div>
  </div>
</template>
