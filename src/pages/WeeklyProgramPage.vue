<template>
  <PageFrame
    kicker="Weekly Program"
    title="Progression from one sense to multi-sensory integration"
    summary="BIP offers a structured progression so the practice feels teachable and repeatable rather than scattered."
    :tags="['8 weeks', 'Beginner', 'Intermediate', 'Workshop-ready']"
  >
    <PageHero kicker="Weekly Program" title="A realistic progression instead of isolated exercises" subtitle="One-sense weeks come first, followed by two-sense and multi-sensory integration. This keeps the program easy to teach, easy to pilot, and easy to revise." />

    <div class="space-y-4">
      <div v-for="step in weeklyProgram" :key="step.week" class="card-soft p-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="font-semibold text-base-content">{{ step.title }}</div>
            <div class="text-sm text-base-content/70">{{ step.focus }}</div>
          </div>
          <span class="badge badge-outline rounded-full">{{ step.mode }}</span>
        </div>
      </div>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-3">
      <div class="card-soft p-5"><div class="kicker">At home</div><p class="mt-3 text-sm leading-7 text-base-content/75">5–10 minute practices, journaling, single-sense focus, low logistical burden.</p></div>
      <div class="card-soft p-5"><div class="kicker">Outdoor</div><p class="mt-3 text-sm leading-7 text-base-content/75">Parks, rivers, urban walking, hiking, or gardens where safe and practical.</p></div>
      <div class="card-soft p-5"><div class="kicker">Pair and group</div><p class="mt-3 text-sm leading-7 text-base-content/75">Reflection, consent-aware touch exercises, shared noticing, and comparison of descriptions.</p></div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import { weeklyProgram } from '../data/sensory'
</script>
