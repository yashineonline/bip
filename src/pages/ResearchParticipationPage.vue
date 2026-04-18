<template>
  <PageFrame
    kicker="Research Participation"
    title="Pilot readiness and ethical participation"
    summary="This page shows that the app is ready for an initial cohort and that user data can be treated carefully rather than casually."
    :tags="['Pilot', 'Feedback loop', 'De-identified', 'Consent']"
  >
    <PageHero kicker="Pilot workflow" title="Ready for a first cohort of at least 10 participants" subtitle="The initial pilot can include the general public plus clinicians and researchers in adjacent fields who can stress-test wording, trust, and usefulness." />

    <div class="grid gap-4 md:grid-cols-2">
      <div class="card-soft p-5">
        <div class="kicker">Who the first users are</div>
        <ul class="mt-3 space-y-2 text-sm leading-7 text-base-content/75">
          <li v-for="item in pilotOutline.audience" :key="item">• {{ item }}</li>
        </ul>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What they do</div>
        <ul class="mt-3 space-y-2 text-sm leading-7 text-base-content/75">
          <li v-for="item in pilotOutline.tasks" :key="item">• {{ item }}</li>
        </ul>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What data are collected</div>
        <ul class="mt-3 space-y-2 text-sm leading-7 text-base-content/75">
          <li v-for="item in pilotOutline.data" :key="item">• {{ item }}</li>
        </ul>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What success looks like</div>
        <ul class="mt-3 space-y-2 text-sm leading-7 text-base-content/75">
          <li v-for="item in pilotOutline.success" :key="item">• {{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-8 card-soft p-6">
      <div class="kicker">Consent boundary</div>
      <p class="mt-3 text-sm leading-7 text-base-content/75">
        Private journaling stays private by default. Optional research contribution should use separate consent,
        de-identified storage where possible, and a plain-language explanation of how the information will be used.
        This demo page models that separation rather than hiding it.
      </p>
      <div class="mt-4"><ReferenceLinks :refs="['ref-consent-report']" /></div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'
import { pilotOutline } from '../data/pilot'
</script>
