<template>
  <PageFrame
    kicker="Community and Sustainability"
    title="Awareness should lead somewhere practical"
    summary="This module refines bold humanitarian ideas into partnership-ready directions: food redistribution, reuse systems, planting, and dignity-centered participation."
    :tags="['Food redistribution', 'Reuse', 'Planting', 'Dignity']"
  >
    <PageHero kicker="Community" title="From self-observation to social contribution" subtitle="BIP keeps the idea that awareness should make people more considerate of others. In the app, that becomes practical social modules rather than grand but vague promises." />

    <div class="grid gap-4 md:grid-cols-2">
      <div class="card-soft p-5"><div class="kicker">Food redistribution</div><p class="mt-3 text-sm leading-7 text-base-content/75">Instead of talking about “raising the consciousness of a product,” BIP frames this as incentive-aligned food donation, dignified distribution, and partnership with local organizations.</p></div>
      <div class="card-soft p-5"><div class="kicker">Reuse systems</div><p class="mt-3 text-sm leading-7 text-base-content/75">Student housing and local communities often discard usable furniture and goods. BIP can help organize hygiene-aware reuse systems and community logistics rather than simple disposal.</p></div>
      <div class="card-soft p-5"><div class="kicker">Planting and aquaponics</div><p class="mt-3 text-sm leading-7 text-base-content/75">These modules connect sensory practice to stewardship, food systems, and local resilience. They also give the app a tangible outdoor and sustainability dimension.</p></div>
      <div class="card-soft p-5"><div class="kicker">Inclusion and dignity</div><p class="mt-3 text-sm leading-7 text-base-content/75">For people facing exclusion or homelessness, the app can point toward skill-building, structured participation, and dignity-centered service pathways without romanticizing hardship.</p></div>
    </div>

    <div class="mt-8 card-soft p-6">
      <div class="kicker">Human trafficking boundary</div>
      <p class="mt-3 text-sm leading-7 text-base-content/75">
        BIP does not pretend to solve trafficking directly. A realistic contribution would be prevention education,
        awareness materials, referral pathways, and local partnership infrastructure that helps users find credible support.
      </p>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
</script>
