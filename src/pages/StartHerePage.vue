<template>
  <PageFrame
    kicker="Start Here"
    title="Four actions that prove the app is already useful"
    summary="This path foregrounds the proposal-promised tools first, then opens the wider platform."
    :tags="['Checklist', 'Claim Pages', 'Scenario Quiz', 'Pilot']"
  >
    <PageHero
      kicker="Start Here"
      title="Use the first useful layer before exploring the wider vision"
      subtitle="The first interview-proof flow is simple: evaluate a claim, inspect two model pages, take the quiz, and see how the pilot is structured."
    />
    <RouteCards :cards="cards" />
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="card-soft p-5">
        <div class="kicker">Why this order</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          The board should not have to hunt for the promised tools. BIP starts with concrete reasoning support,
          because a trustworthy first layer makes the broader health-and-awareness layer easier to believe.
        </p>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What comes next</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          After the first layer, the app expands into sensory observation, workshop delivery, journaling, optional
          research participation, science literacy, and community-minded modules.
        </p>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'
import RouteCards from '../components/RouteCards.vue'

const cards = [
  { to: '/checklist', title: '1. Open the Checklist', text: 'Judge a science-adjacent claim in minutes.', icon: 'fa-list-check', badge: 'Proposal' },
  { to: '/claim-pages', title: '2. Read the Model Claim Pages', text: 'See how BIP differentiates not-established and outcome-specific support.', icon: 'fa-file-circle-check', badge: 'Proposal' },
  { to: '/quiz', title: '3. Take the 10-Question Quiz', text: 'Train users to reason more cleanly about evidence and hype.', icon: 'fa-graduation-cap', badge: 'Proposal' },
  { to: '/research', title: '4. Review the Pilot Flow', text: 'See how the app is ready for first users and feedback loops.', icon: 'fa-users', badge: 'Proposal' }
]
</script>
