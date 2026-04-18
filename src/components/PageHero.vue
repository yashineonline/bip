<template>
  <div class="mb-8">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <div class="kicker">{{ kicker }}</div>
        <h1 class="section-title">{{ title }}</h1>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  subtitle: string
}>()
</script>
