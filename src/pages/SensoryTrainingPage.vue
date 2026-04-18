<template>
  <PageFrame
    kicker="Sensory Training"
    title="Five-sense and body-awareness practice"
    summary="These exercises are framed as attention and observation practices. They are not presented as disease cures or proof of a hidden doctrine."
    :tags="['Vision', 'Hearing', 'Smell', 'Touch', 'Taste']"
  >
    <PageHero
      kicker="Sensory Training"
      title="Observe more carefully without overstating what observation proves"
      subtitle="The goal is disciplined noticing: what changes when attention changes, what stays stable, and how people can describe experience more clearly."
    />

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="track in sensoryTracks" :key="track.id" class="card-soft p-5">
        <div class="flex items-center gap-3">
          <div class="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
            <i class="fa-solid" :class="track.icon"></i>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-base-content">{{ track.title }}</h2>
            <div class="text-sm text-base-content/60">Low-risk observation practice</div>
          </div>
        </div>
        <p class="mt-4 text-sm leading-7 text-base-content/75">{{ track.goal }}</p>
        <ul class="mt-4 space-y-2 text-sm leading-7 text-base-content/75">
          <li v-for="practice in track.practices" :key="practice">• {{ practice }}</li>
        </ul>
        <div class="mt-4 rounded-2xl bg-warning/10 p-3 text-sm leading-7 text-warning-content">
          <strong>Caution:</strong> {{ track.caution }}
        </div>
      </div>
    </div>

    <div class="mt-8 card-soft p-6">
      <div class="kicker">Adjacent awareness categories</div>
      <p class="mt-3 text-sm leading-7 text-base-content/75">
        BIP also discusses proprioception, interoception, temperature, movement awareness, spatial presence, and social presence.
        These can be valuable to practice, but they are described carefully rather than mislabeled as a brand-new canonical sense system.
      </p>
      <div class="mt-4"><ReferenceLinks :refs="['ref-interoception-craig', 'ref-vision-attention', 'ref-walking-guidelines']" /></div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'
import { sensoryTracks } from '../data/sensory'
</script>
