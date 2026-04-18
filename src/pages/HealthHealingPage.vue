<template>
  <PageFrame
    kicker="Health and Healing Inquiry"
    title="A broader question handled carefully"
    summary="This module shows the bridge from better reasoning and better observation toward larger questions about health, healing, and humane living."
    :tags="['Phenomenology', 'Mechanism', 'Individual variability', 'Roadmap']"
  >
    <PageHero kicker="Health inquiry" title="How can this app expand what counts as a serious question without sacrificing rigor?" subtitle="The app can invite exploration of healing-related practices while still making clear when a topic is cultural, phenomenological, speculative, or evidence-supported for selected outcomes." />

    <div class="grid gap-4 md:grid-cols-2">
      <div class="card-soft p-5">
        <div class="kicker">Careful language</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          Words like consciousness, energy, self, and healing can refer to different things in different contexts.
          BIP names the context: lived experience, practical exercise, ethical awareness of others, or scientific mechanism.
        </p>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">Individual variability</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          People differ in biology, culture, expectation, baseline health, access, and response. The app preserves the idea of uniqueness without implying genetic destiny or personalized miracle claims.
        </p>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">Practical near-term use</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          In the near term, BIP helps users ask better questions, choose lower-risk observation practices, and avoid overclaiming about mechanism. That is already useful even before larger unanswered questions are resolved.
        </p>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">Longer-term roadmap</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          Over time, the platform could support more rigorous workshops, better evidence maps, stronger pilot studies, and ethical partnerships for community health inquiry. This is framed as a roadmap, not as a solved problem.
        </p>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
</script>
