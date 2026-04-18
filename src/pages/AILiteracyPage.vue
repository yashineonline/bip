<template>
  <PageFrame
    kicker="AI Literacy"
    title="Why people fear AI, and what a careful explanation looks like"
    summary="This module treats AI as powerful, useful, and limited. It does not confuse fluency with consciousness or confidence with reliability."
    :tags="['How ChatGPT works', 'Limits', 'Transparency', 'Human meaning']"
  >
    <PageHero kicker="AI literacy" title="A calm explanation of AI" subtitle="The point is not to sell AI or scare people away from it. The point is to help users understand what these systems actually are good for, where they fail, and why sources matter." />

    <div class="grid gap-4 xl:grid-cols-2">
      <div v-for="panel in panels" :key="panel.title" class="card-soft p-5">
        <div class="kicker">{{ panel.kicker }}</div>
        <h2 class="mt-2 text-xl font-semibold text-base-content">{{ panel.title }}</h2>
        <p class="mt-3 text-sm leading-7 text-base-content/75">{{ panel.body }}</p>
        <div class="mt-4"><ReferenceLinks :refs="panel.refs" /></div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'

const panels = [
  {
    kicker: 'Public fear',
    title: 'Why many people are uneasy about AI',
    body: 'People worry about loss of control, misinformation, job displacement, surveillance, manipulative systems, and the way fluent text can feel more reliable than it is.',
    refs: ['ref-openai-safety']
  },
  {
    kicker: 'Plain-language mechanics',
    title: 'How ChatGPT works at a high level',
    body: 'A language model learns patterns from large amounts of data and then predicts useful next pieces of text. It can be genuinely useful without having human-style understanding of everything it says.',
    refs: ['ref-chatgpt-help', 'ref-chatgpt-developed']
  },
  {
    kicker: 'Limits',
    title: 'Confidence is not the same thing as accuracy',
    body: 'A confident answer can still be wrong, outdated, incomplete, or uncited. BIP therefore teaches users to ask where the answer came from and how the claim could be checked.',
    refs: ['ref-chatgpt-developed', 'ref-openai-safety']
  },
  {
    kicker: 'Philosophical boundary',
    title: 'AI and human difference',
    body: 'BIP preserves a philosophical distinction between tool performance and lived experience. Humans enjoy, suffer, care, and inhabit bodies in ways that remain central to ethical life, whether or not AI grows more capable.',
    refs: ['ref-chatgpt-help']
  }
]
</script>
