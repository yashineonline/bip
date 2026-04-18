<template>
  <div class="flex flex-wrap gap-2">
    <RouterLink
      v-for="refId in refs"
      :key="refId"
      class="badge badge-outline rounded-full border-primary/25 bg-primary/5 px-3 py-3 text-primary"
      :to="{ path: '/references', hash: `#${refId}`, query: { returnTo: route.fullPath } }"
    >
      {{ getShort(refId) }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getReference } from '../data/references'

const route = useRoute()
defineProps<{ refs: string[] }>()

function getShort(refId: string) {
  return getReference(refId)?.short ?? refId
}
</script>
