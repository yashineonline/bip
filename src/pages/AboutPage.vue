<template>
  <PageFrame
    kicker="About BIP"
    title="What this platform is trying to do"
    summary="BIP is designed to show disciplined scope control: concrete tools first, broader humane inquiry second."
    :tags="['Practical now', 'Vision later', 'Non-sectarian', 'Evidence-aware']"
  >
    <PageHero kicker="About BIP" title="A bridge between science literacy and humane self-understanding" subtitle="BIP starts by helping people reason more carefully about claims. It then expands into attention, sensory practice, reflective logging, and community-minded action without pretending that every big question is already solved." />
    <div class="grid gap-4 md:grid-cols-2">
      <div class="card-soft p-5">
        <div class="kicker">What BIP is</div>
        <ul class="mt-3 space-y-3 text-sm leading-7 text-base-content/75">
          <li>A practical app for evaluating science-adjacent claims.</li>
          <li>A structured platform for sensory observation and reflective practice.</li>
          <li>An invitation to careful, privacy-aware participation in research.</li>
          <li>A roadmap for broader work in health, healing inquiry, and social contribution.</li>
        </ul>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What BIP is not</div>
        <ul class="mt-3 space-y-3 text-sm leading-7 text-base-content/75">
          <li>Not a promise that unconventional claims are automatically true.</li>
          <li>Not a replacement for professional medical care.</li>
          <li>Not a faith-bound or sectarian doctrine.</li>
          <li>Not a prestige-language wrapper around vague words like field, energy, or consciousness.</li>
        </ul>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
</script>
