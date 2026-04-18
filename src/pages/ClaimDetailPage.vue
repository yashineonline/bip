<template>
  <PageFrame
    kicker="Claim Detail"
    :title="claim?.title ?? 'Claim not found'"
    summary="A reference-aware page that separates the strongest charitable interpretation from current evidence boundaries."
    :tags="['Claim', 'Rating', 'Update rule', 'Safety']"
  >
    <template v-if="claim">
      <PageHero
        kicker="Flagship claim page"
        :title="claim.title"
        :subtitle="claim.oneSentenceClaim"
      >
        <template #actions>
          <BackButton fallback="/claim-pages" label="Back to claim pages" />
        </template>
      </PageHero>

      <div class="mb-6 flex flex-wrap items-center gap-3">
        <EvidenceBadge :label="claim.evidenceGrade" />
        <span class="badge badge-outline rounded-full">{{ claim.domain }}</span>
      </div>

      <div class="grid gap-4 xl:grid-cols-2">
        <div class="card-soft p-5"><div class="kicker">Claimant mechanism as stated</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.claimantMechanism }}</p></div>
        <div class="card-soft p-5"><div class="kicker">Why this grade now</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.why }}</p></div>
        <div class="card-soft p-5"><div class="kicker">Strongest steelman</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.steelman }}</p></div>
        <div class="card-soft p-5"><div class="kicker">Strongest critique</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.critique }}</p></div>
        <div class="card-soft p-5"><div class="kicker">Common misuse pattern</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.misuse }}</p></div>
        <div class="card-soft p-5"><div class="kicker">Safety note</div><p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.safety }}</p></div>
      </div>

      <div class="mt-6 card-soft p-5">
        <div class="kicker">What would change the rating</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">{{ claim.whatChangesRating }}</p>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="card-soft p-5">
          <div class="kicker">Change log logic</div>
          <ul class="mt-3 space-y-3 text-sm leading-7 text-base-content/75">
            <li v-for="item in claim.changeLog" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="card-soft p-5">
          <div class="kicker">References</div>
          <div class="mt-4"><ReferenceLinks :refs="claim.references" /></div>
        </div>
      </div>
    </template>
    <template v-else>
      <PageHero kicker="Claim Detail" title="Claim not found" subtitle="Return to the claim pages list and choose one of the available model pages." />
      <BackButton fallback="/claim-pages" label="Back to claim pages" />
    </template>
  </PageFrame>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import BackButton from '../components/BackButton.vue'
import EvidenceBadge from '../components/EvidenceBadge.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'
import { claimPages } from '../data/claims'

const route = useRoute()
const claim = computed(() => claimPages.find((item) => item.id === route.params.id))
</script>
