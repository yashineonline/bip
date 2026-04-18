<template>
  <PageFrame
    kicker="Workshop Mode"
    title="1–3 hour workshop structure"
    summary="This page turns the sensory work into a teachable format with timing, safety, and debrief built in."
    :tags="['Workshops', 'Eight experiences', 'Feedback', 'Facilitator notes']"
  >
    <PageHero kicker="Workshop Mode" title="A workshop people can actually run" subtitle="BIP workshops begin with careful framing, move into guided experience, and end with structured reflection. That keeps the science and the lived experience in conversation." />

    <div class="grid gap-4 md:grid-cols-3">
      <div class="card-soft p-5"><div class="kicker">Opening</div><div class="mt-2 text-2xl font-semibold text-primary">30–60 min</div><p class="mt-3 text-sm leading-7 text-base-content/75">Define terms, set expectations, explain safety, and clarify what the workshop does and does not claim.</p></div>
      <div class="card-soft p-5"><div class="kicker">Guided experience</div><div class="mt-2 text-2xl font-semibold text-primary">60–120 min</div><p class="mt-3 text-sm leading-7 text-base-content/75">Run one to eight experience stations with one-sense to multi-sense progression.</p></div>
      <div class="card-soft p-5"><div class="kicker">Reflection</div><div class="mt-2 text-2xl font-semibold text-primary">30 min</div><p class="mt-3 text-sm leading-7 text-base-content/75">Collect feedback, compare descriptions, and separate observation from interpretation.</p></div>
    </div>

    <div class="mt-8 card-soft p-6">
      <div class="kicker">Eight workshop experiences</div>
      <ol class="mt-3 space-y-2 text-sm leading-7 text-base-content/75">
        <li v-for="item in workshopExperiences" :key="item">{{ item }}</li>
      </ol>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import { workshopExperiences } from '../data/sensory'
</script>
