<template>
  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    <RouterLink
      v-for="card in cards"
      :key="card.to"
      :to="card.to"
      class="card-soft group block p-5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div class="flex items-center justify-between">
        <div class="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
          <i :class="['fa-solid', card.icon]"></i>
        </div>
        <span v-if="card.badge" class="badge badge-outline rounded-full">{{ card.badge }}</span>
      </div>
      <h3 class="mt-4 text-lg font-semibold text-base-content group-hover:text-primary">{{ card.title }}</h3>
      <p class="mt-2 text-sm leading-7 text-base-content/70">{{ card.text }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cards: { to: string; title: string; text: string; icon: string; badge?: string }[]
}>()
</script>
