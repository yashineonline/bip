<template>
  <button class="btn btn-ghost btn-sm rounded-full" @click="goBack">
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
