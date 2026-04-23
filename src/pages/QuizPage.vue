<template>
  <PageFrame
    kicker="Scenario Quiz"
    title="10-question reasoning quiz"
    summary="A pilot-ready educational tool that teaches evidence discipline, not just recall."
    :tags="['10 questions', 'Pilot-ready', 'Explanations', 'References']"
  >
    <PageHero
      kicker="Scenario Quiz"
      title="Mixed Topics"
      subtitle="The quiz covers metaphor versus mechanism, no-signaling literacy, evidence updating, theory versus interpretation, and AI confidence versus source-backed accuracy."
    >
      <template #actions>
        <button class="btn btn-outline rounded-full" @click="resetQuiz">Reset quiz</button>
      </template>
    </PageHero>

    <div class="mb-6 card-soft p-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="kicker">Progress</div>
          <div class="mt-2 text-3xl font-semibold text-primary">{{ score }}/{{ total }}</div>
        </div>
        <progress class="progress progress-primary h-3 w-full max-w-sm" :value="answeredCount" :max="total"></progress>
      </div>
    </div>

    <div class="space-y-5">
      <div v-for="question in quizQuestions" :key="question.id" class="card-soft p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="kicker">Question {{ question.id }}</div>
            <h2 class="mt-1 text-lg font-semibold text-base-content">{{ question.prompt }}</h2>
          </div>
          <span v-if="answers[question.id]" class="badge rounded-full" :class="answers[question.id] === question.answer ? 'badge-success' : 'badge-warning'">
            {{ answers[question.id] === question.answer ? 'Correct' : 'Review' }}
          </span>
        </div>
        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <button
            v-for="option in question.options"
            :key="option.id"
            class="btn h-auto min-h-0 justify-start whitespace-normal rounded-2xl px-4 py-4 text-left"
            :class="buttonClass(question.id, option.id, question.answer)"
            @click="answers[question.id] = option.id"
          >
            {{ option.text }}
          </button>
        </div>
        <div v-if="answers[question.id]" class="mt-4 rounded-2xl bg-base-200/70 p-4">
          <div class="font-medium text-base-content">Explanation</div>
          <p class="mt-2 text-sm leading-7 text-base-content/75">{{ question.explanation }}</p>
          <div class="mt-3"><ReferenceLinks :refs="question.refs" /></div>
        </div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import ReferenceLinks from '../components/ReferenceLinks.vue'
import { quizQuestions } from '../data/quiz'

const answers = reactive<Record<number, string>>({})
const total = quizQuestions.length
const answeredCount = computed(() => Object.keys(answers).length)
const score = computed(() => quizQuestions.filter((question) => answers[question.id] === question.answer).length)

function resetQuiz() {
  Object.keys(answers).forEach((key) => delete answers[Number(key)])
}

function buttonClass(questionId: number, optionId: string, answerId: string) {
  const current = answers[questionId]
  if (!current) return 'btn-outline'
  if (optionId === answerId) return 'btn-success'
  if (optionId === current && current !== answerId) return 'btn-warning'
  return 'btn-ghost'
}
</script>
