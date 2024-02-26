<script setup lang="ts">
</script>

<template>
  <div class="console bg-primary text-white text-xs pt-6 rounded-md relative max-w-400px">
    <ul class="absolute grid grid-cols-3 gap-3 top-2 left-4">
      <li class="!m-0 rounded w-2 h-2 bg-red-400 inline-block" />
      <li class="!m-0 rounded w-2 h-2 bg-yellow-300 inline-block" />
      <li class="!m-0 rounded w-2 h-2 bg-green-500 inline-block" />
    </ul>
    <slot />
  </div>
</template>
