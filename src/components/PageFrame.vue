<template>
  <div class="page-grid">
    <aside class="side-panel">
      <div class="kicker">{{ kicker }}</div>
      <h2 class="mt-2 text-lg font-semibold text-base-content">{{ title }}</h2>
      <p class="mt-2 text-sm leading-7 text-base-content/70">{{ summary }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="badge-soft">{{ tag }}</span>
      </div>
      <slot name="side" />
    </aside>
    <section class="content-panel">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  summary: string
  tags: string[]
}>()
</script>
