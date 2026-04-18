<template>
  <PageFrame
    kicker="Start Here"
    title="Four actions"
    summary="From the proposal"
    :tags="['Checklist', 'Claim Pages', 'Scenario Quiz', 'Pilot']"
  >
    <RouteCards :cards="cards" />
    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="card-soft p-5">
        <div class="kicker">Why this order</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          BIP starts with concrete reasoning support.
        </p>
      </div>
      <div class="card-soft p-5">
        <div class="kicker">What comes next</div>
        <p class="mt-3 text-sm leading-7 text-base-content/75">
          BIP intends to further expand into sensory observation, workshop delivery, journaling, optional
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
