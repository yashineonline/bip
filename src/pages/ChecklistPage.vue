<template>
  <PageFrame
    kicker="Checklist"
    title="Claim Evaluation Checklist"
    summary="A practical, reusable filter for science-adjacent claims. The aim is not to shut inquiry down, but to slow hype down enough for careful reasoning."
    :tags="['Mechanism', 'Evidence', 'Safety', 'Update logic']"
  >
    <PageHero
      kicker="Proposal-aligned tool"
      title="Ask better questions before believing, dismissing, or sharing a claim"
      subtitle="This checklist separates mechanism from metaphor, evidence from prestige language, and openness from credulity."
    >
      <template #actions>
        <button class="btn btn-outline rounded-full" @click="resetAll">Reset</button>
      </template>
    </PageHero>

    <div class="grid gap-4 xl:grid-cols-2">
      <div v-for="item in items" :key="item.id" class="card-soft p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="font-semibold text-base-content">{{ item.title }}</div>
            <p class="mt-1 text-sm leading-7 text-base-content/70">{{ item.help }}</p>
          </div>
          <span class="inline-flex min-w-[3.5rem] items-center justify-center rounded-full border border-base-300/80 px-3 py-1 text-sm font-medium leading-none text-base-content/85">
  {{ item.weight }} pts
</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            v-for="choice in choices"
            :key="choice.value"
            class="btn btn-sm rounded-full"
            :class="selected[item.id] === choice.value ? choice.activeClass : 'btn-ghost'"
            @click="selected[item.id] = choice.value"
          >
            {{ choice.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="card-soft p-6">
        <div class="kicker">Checklist result</div>
        <div class="mt-4 text-4xl font-semibold text-primary">{{ score }}/{{ maxScore }}</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">{{ summary }}</p>
        <div class="mt-4">
          <progress class="progress progress-primary h-3 w-full" :value="score" :max="maxScore"></progress>
        </div>
      </div>
      <div class="card-soft p-6">
        <div class="kicker">How to use the result</div>
        <ul class="mt-3 space-y-3 text-sm leading-7 text-base-content/75">
          <li><strong>Higher score:</strong> the claim is clearer and more testable, not automatically true.</li>
          <li><strong>Mid score:</strong> there may be something worth tracking, but the wording, controls, or measurement remain incomplete.</li>
          <li><strong>Low score:</strong> the claim is probably too vague, too hyped, or too weakly supported to treat as reliable guidance.</li>
          <li><strong>Safety override:</strong> even interesting ideas should be treated cautiously if they discourage proper medical care or create pressure to ignore risk.</li>
        </ul>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'

const items = [
  { id: 'claim', title: 'Claim clarity', help: 'Can the claim be stated in one testable sentence?', weight: 2 },
  { id: 'mechanism', title: 'Mechanism clarity', help: 'Does the page explain what is supposed to cause what?', weight: 2 },
  { id: 'measurement', title: 'Measurement', help: 'Is there a real outcome, biomarker, behavior, or validated report being measured?', weight: 2 },
  { id: 'controls', title: 'Controls and comparison', help: 'Would a proper comparison condition tell us whether the claim beats expectation or context alone?', weight: 2 },
  { id: 'evidence', title: 'Evidence quality', help: 'Is the support stronger than testimonials, anecdotes, or selective examples?', weight: 3 },
  { id: 'replication', title: 'Replication', help: 'Has the effect been reproduced outside a single excited source?', weight: 2 },
  { id: 'alternatives', title: 'Alternative explanations', help: 'Does the page consider placebo, regression to the mean, bias, or confounding?', weight: 2 },
  { id: 'safety', title: 'Safety and harm', help: 'Could the claim delay care, waste money, or encourage risky behavior?', weight: 3 },
  { id: 'updating', title: 'Update logic', help: 'Does the page say what new evidence would change the rating?', weight: 2 },
  { id: 'language', title: 'Language discipline', help: 'Are technical words like field, frequency, or consciousness defined carefully rather than used as prestige language?', weight: 2 }
]

const choices = [
  { value: 'yes', label: 'Yes', points: 1, activeClass: 'btn-success' },
  { value: 'partial', label: 'Partly', points: 0.5, activeClass: 'btn-warning' },
  { value: 'no', label: 'No', points: 0, activeClass: 'btn-error' },
  { value: 'unknown', label: 'Unknown', points: 0.25, activeClass: 'btn-info' }
]

const selected = reactive<Record<string, string>>(
  Object.fromEntries(items.map((item) => [item.id, 'unknown']))
)

const maxScore = computed(() => items.reduce((total, item) => total + item.weight, 0))
const score = computed(() => {
  return items.reduce((total, item) => {
    const choice = choices.find((entry) => entry.value === selected[item.id])
    return total + (choice?.points ?? 0) * item.weight
  }, 0)
})

const summary = computed(() => {
  const ratio = score.value / maxScore.value
  if (ratio >= 0.75) return 'The claim is structured well enough to investigate seriously. Keep reading critically, but the page is doing a reasonable job of being testable and updateable.'
  if (ratio >= 0.5) return 'The claim may contain a useful core, but too many parts remain blurry, weakly supported, or underspecified.'
  return 'The claim is currently too vague, too weakly supported, or too risky to treat as reliable guidance. Slow down before accepting or sharing it.'
})

function resetAll() {
  items.forEach((item) => {
    selected[item.id] = 'unknown'
  })
}
</script>
