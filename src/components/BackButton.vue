<template>
<button
  class="btn btn-sm rounded-full border border-base-300/80 bg-base-100/95 text-base-content shadow-md backdrop-blur hover:border-primary/40 hover:bg-primary hover:text-primary-content"
  @click="goBack"
>
    <i class="fa-solid fa-arrow-left"></i>
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const props = withDefaults(defineProps<{ fallback?: string; label?: string }>(), {
  fallback: '/',
  label: 'Back'
})

const route = useRoute()
const router = useRouter()

function goBack() {
  const returnTo = route.query.returnTo
  if (typeof returnTo === 'string' && returnTo) {
    router.push(returnTo)
    return
  }
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push(props.fallback)
  }
}
</script>
