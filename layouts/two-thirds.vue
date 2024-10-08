<template>
  <div class="slidev-layout">
    <div class="flex gap-16">
      <div class="prose w-2/3">
        <slot name="default"></slot>
      </div>
      <div class="prose w-1/3">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
