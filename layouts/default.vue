<template>
  <div
    class="slidev-layout"
    :class="{ grid: $attrs.center }"
  >
    <CornerCurves class="absolute bottom-0 right-0 transform scale-x--100" />
    <div class="my-auto z-10 relative">
      <slot></slot>
    </div>
  </div>
</template>
