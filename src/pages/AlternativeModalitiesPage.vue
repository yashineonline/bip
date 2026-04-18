<template>
  <PageFrame
    kicker="Alternative Modalities"
    title="Respectful discussion without automatic endorsement"
    summary="The aim here is to avoid two opposite mistakes: dismissing culturally important practices without looking, and overstating weak or mixed evidence as settled fact."
    :tags="['History', 'Phenomenology', 'Evidence', 'Uncertainty']"
  >
    <PageHero kicker="Alternative modalities" title="Separate history, reported experience, and present evidence" subtitle="BIP treats modalities as real topics of inquiry. It does not force every practice into the same evidence bucket or the same mechanism story." />

    <div class="grid gap-4 md:grid-cols-2">
      <div v-for="item in items" :key="item.title" class="card-soft p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-base-content">{{ item.title }}</h2>
            <div class="mt-1 text-sm text-base-content/60">{{ item.label }}</div>
          </div>
          <span class="badge badge-outline rounded-full">{{ item.grade }}</span>
        </div>
        <p class="mt-4 text-sm leading-7 text-base-content/75">{{ item.body }}</p>
        <div class="mt-4"><ReferenceLinks :refs="item.refs" /></div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'

const items = [
  {
    title: 'Acupuncture',
    label: 'Historical practice with active research programs',
    grade: 'mixed / condition-specific',
    body: 'BIP presents acupuncture as a long-standing practice that can be studied for specific outcomes and safety. Historical use does not automatically prove mechanism, but it does justify careful investigation and respectful description.',
    refs: ['ref-acupuncture-nccih', 'ref-who-tcim']
  },
  {
    title: 'Tai chi and yoga',
    label: 'Movement-based practices with clearer evidence for selected outcomes',
    grade: 'supported for some outcomes',
    body: 'These practices can be framed around movement, balance, breath, pain management, and stress-related outcomes without requiring a single hidden-energy explanation.',
    refs: ['ref-tai-chi-nccih', 'ref-yoga-nccih', 'ref-pain-review']
  },
  {
    title: 'Reiki',
    label: 'Commonly discussed but mechanistically controversial',
    grade: 'not established',
    body: 'BIP can acknowledge why users are interested in Reiki while stating clearly that claimed human energy-field mechanisms are not established by current scientific evidence.',
    refs: ['ref-reiki-nccih']
  },
  {
    title: 'Past life regression',
    label: 'Reflective or spiritual topic, not a validated clinical mechanism',
    grade: 'exploratory / philosophical boundary',
    body: 'BIP treats this as a boundary case. It may matter to some users existentially or spiritually, but that is different from presenting it as an evidence-established health intervention.',
    refs: ['ref-past-life-boundaries']
  }
]
</script>
