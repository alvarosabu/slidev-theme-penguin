<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 gap-16 prose">
      <div>
        <slot name="default" />
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
