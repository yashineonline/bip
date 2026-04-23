<template>
  <PageFrame
    kicker="Claim Pages"
    title="Two flagship examples"
    summary="These pages show how BIP avoids a single reflexive style. One example is careful skepticism. The other is conditional support for selected outcomes."
    :tags="['Evidence grading', 'Steelman', 'Critique', 'Versioning']"
  >
    <PageHero
      kicker="Claim Pages"
      title="Model pages"
      subtitle="Each page includes a one-sentence claim, evidence grade, charitable interpretation, critique, misuse pattern, safety note, and update rule."
    />
    <div class="grid gap-4 md:grid-cols-2">
      <RouterLink v-for="claim in claimPages" :key="claim.id" :to="`/claim-pages/${claim.id}`" class="card-soft block p-6 transition hover:-translate-y-0.5 hover:shadow-md">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="kicker">{{ claim.domain }}</div>
            <h2 class="mt-2 text-xl font-semibold text-base-content">{{ claim.title }}</h2>
          </div>
          <EvidenceBadge :label="claim.evidenceGrade" />
        </div>
        <p class="mt-4 text-sm leading-7 text-base-content/75">{{ claim.why }}</p>
        <div class="mt-5">
          <ReferenceLinks :refs="claim.references" />
        </div>
      </RouterLink>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import EvidenceBadge from '../components/EvidenceBadge.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'
import { claimPages } from '../data/claims'
</script>
