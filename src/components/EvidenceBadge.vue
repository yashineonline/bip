<template>
  <span :class="badgeClass">{{ label }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string }>()

const badgeClass = computed(() => {
  if (props.label.includes('supported')) return 'badge badge-success badge-lg rounded-full'
  if (props.label.includes('mixed')) return 'badge badge-warning badge-lg rounded-full'
  if (props.label.includes('plausible')) return 'badge badge-info badge-lg rounded-full'
  if (props.label.includes('not established')) return 'badge badge-neutral badge-lg rounded-full'
  return 'badge badge-error badge-lg rounded-full'
})
</script>
