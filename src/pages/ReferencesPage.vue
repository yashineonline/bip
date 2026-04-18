<template>
  <PageFrame
    kicker="References"
    title="Evidence and source map"
    summary="Every major page links back here. Sources are grouped by type so the user can distinguish peer-reviewed papers, reviews, public-health guidance, and official AI documentation."
    :tags="['Peer-reviewed', 'Reviews', 'Public health', 'Official docs']"
  >
    <PageHero kicker="References" title="Citation-aware navigation" subtitle="From any claim, exercise, or concept page, the user can jump here and then return safely to the place they came from.">
      <template #actions>
        <BackButton fallback="/" label="Return" />
      </template>
    </PageHero>

    <div class="mb-6 flex flex-wrap gap-2">
      <button class="btn btn-sm rounded-full" :class="filter === 'all' ? 'btn-primary' : 'btn-outline'" @click="filter = 'all'">All</button>
      <button v-for="type in types" :key="type" class="btn btn-sm rounded-full" :class="filter === type ? 'btn-primary' : 'btn-outline'" @click="filter = type">{{ type }}</button>
    </div>

    <div class="space-y-4">
      <article v-for="ref in filteredRefs" :id="ref.id" :key="ref.id" class="card-soft scroll-mt-28 p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div class="kicker">{{ ref.short }}</div>
            <h2 class="mt-1 text-lg font-semibold text-base-content">{{ ref.title }}</h2>
            <div class="mt-1 text-sm text-base-content/60">{{ ref.source }} · {{ ref.year }} · {{ ref.type }}</div>
          </div>
          <a class="btn btn-outline btn-sm rounded-full" :href="ref.url" target="_blank" rel="noreferrer">Open source</a>
        </div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">{{ ref.note }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="topic in ref.topics" :key="topic" class="badge badge-outline rounded-full">{{ topic }}</span>
        </div>
      </article>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import BackButton from '../components/BackButton.vue'
import { references } from '../data/references'

const types = Array.from(new Set(references.map((ref) => ref.type)))
const filter = ref<'all' | (typeof types)[number]>('all')
const filteredRefs = computed(() => (filter.value === 'all' ? references : references.filter((ref) => ref.type === filter.value)))
</script>
