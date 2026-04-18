<template>
  <PageFrame
    kicker="Science Concepts"
    title="Terms that should be defined before they are stretched"
    summary="This module protects users from being impressed by scientific words that are never operationally explained."
    :tags="['Magnetic field', 'Electric field', 'Frequency', 'Placebo', 'Evidence']"
  >
    <PageHero kicker="Science literacy" title="Define terms before making them carry a worldview" subtitle="BIP does not ban difficult words. It asks whether they are being used operationally, metaphorically, or rhetorically." />

    <div class="grid gap-4 xl:grid-cols-2">
      <div v-for="concept in concepts" :key="concept.title" class="card-soft p-5">
        <div class="kicker">{{ concept.kicker }}</div>
        <h2 class="mt-2 text-xl font-semibold text-base-content">{{ concept.title }}</h2>
        <p class="mt-3 text-sm leading-7 text-base-content/75">{{ concept.body }}</p>
        <div class="mt-4"><ReferenceLinks :refs="concept.refs" /></div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'

const concepts = [
  {
    kicker: 'Definition first',
    title: 'Magnetic field',
    body: 'A magnetic field is a measurable physical field associated with magnets, electric currents, and changing electric fields. If a page claims a magnetic effect, it should specify intensity, source, exposure geometry, and the outcome being measured.',
    refs: ['ref-emf-niehs']
  },
  {
    kicker: 'Definition first',
    title: 'Electric field',
    body: 'An electric field describes the force that a charge would experience in space. It is not a free-floating synonym for mood, intention, or aura unless the page explicitly shifts into metaphor and says so.',
    refs: ['ref-emf-niehs']
  },
  {
    kicker: 'Definition first',
    title: 'Frequency',
    body: 'Frequency is how often a repeating event occurs per unit time. It becomes scientifically meaningful only when the repeating quantity, the units, and the measurement method are specified.',
    refs: ['ref-emf-niehs']
  },
  {
    kicker: 'Interpretation discipline',
    title: 'Placebo and expectation effects',
    body: 'Expectation, context, ritual, and provider interaction can shape symptoms and experience. A meaningful placebo effect does not prove a proposed hidden mechanism, but it also does not make the experience unreal.',
    refs: ['ref-placebo-nccih', 'ref-nccih-neurobio']
  },
  {
    kicker: 'Evidence map',
    title: 'What science can say now',
    body: 'BIP distinguishes established support, mixed evidence, plausible but untested ideas, not-established claims, and unsupported claims. That lets the user stay curious without flattening all ideas into the same bucket.',
    refs: ['ref-who-tcim', 'ref-pain-review']
  },
  {
    kicker: 'Attention versus hype',
    title: 'Attention and observation',
    body: 'Attention can change what people notice, remember, and prioritize. That does not automatically mean attention rewrites any biological system at will. BIP treats attentional effects seriously without overstating them.',
    refs: ['ref-vision-attention', 'ref-interoception-craig']
  }
]
</script>
