<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-40 border-b border-base-300/70 bg-base-100/90 backdrop-blur">
      <div class="navbar mx-auto max-w-7xl px-4 md:px-6">
        <div class="navbar-start gap-2">
          <div class="dropdown lg:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <i class="fa-solid fa-bars text-lg"></i>
            </label>
            <ul
              tabindex="0"
              class="menu dropdown-content z-[1] mt-3 w-72 rounded-3xl border border-base-300 bg-base-100 p-2 shadow"
            >
              <li v-for="item in navItems" :key="item.to"><RouterLink :to="item.to">{{ item.label }}</RouterLink></li>
            </ul>
          </div>
          <RouterLink to="/" class="flex items-center gap-3 no-underline">
            <div class="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-content shadow-sm">
              <i class="fa-solid fa-compass"></i>
            </div>
            <div>
              <div class="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">BIP</div>
              <div class="text-sm font-medium text-base-content/70">Bergel Institute Philosophy</div>
            </div>
          </RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
  <ul class="menu menu-horizontal gap-1 rounded-full bg-base-200/70 px-2 py-1">
    <li v-for="item in primaryNavItems" :key="item.to">
      <RouterLink :to="item.to">{{ item.label }}</RouterLink>
    </li>

    <li>
      <details>
        <summary>More</summary>
        <ul class="z-[60] mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl">
          <li v-for="item in moreNavItems" :key="item.to">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</div>


        
        <div class="navbar-end gap-2">
          <RouterLink to="/references" class="btn btn-ghost btn-sm hidden md:inline-flex">References</RouterLink>
          <RouterLink to="/start" class="btn btn-primary btn-sm rounded-full">Open BIP</RouterLink>
        </div>
      </div>
      <div class="mobile-tabs lg:hidden border-t border-base-300/70 bg-base-100/95">
  <div class="overflow-x-auto px-4 py-2 [scrollbar-width:none] [-ms-overflow-style:none]">
    <div class="flex min-w-max gap-2">
      <RouterLink
        v-for="item in navItems"
        :key="`mobile-${item.to}`"
        :to="item.to"
        class="btn btn-sm rounded-full border border-base-300 bg-base-100 text-base-content whitespace-nowrap shadow-sm"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </div>
</div>
    </header>

<Transition name="fade-slide">
  <BackButton
    v-if="route.path !== '/'"
    class="fixed left-4 top-16 z-50 lg:left-6 lg:top-20"
    fallback="/"
    label="Back"
  />
</Transition>
    

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-base-300/70 bg-base-100/80">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-base-content/70 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <div class="font-semibold text-base-content">BIP: Bergel Institute Philosophy</div>
          <p class="mt-2 max-w-2xl leading-7">
            An evidence-aware platform for claim evaluation, sensory observation, and humane inquiry.
            The app separates what is measurable now, what is personally meaningful, and what remains exploratory.
          </p>
        </div>
        <div class="space-y-2">
          <div class="flex gap-2">
            <span class="badge-soft">Useful now</span>
            <span class="badge-soft">Evidence-aware</span>
            <span class="badge-soft">Roadmap-ready</span>
          </div>
          <div class="text-right text-xs text-base-content/60">Interview demo build · April 2026</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BackButton from './BackButton.vue'

const route = useRoute()
  
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Start Here', to: '/start' },
  { label: 'Checklist', to: '/checklist' },
  { label: 'Claim Pages', to: '/claim-pages' },
  { label: 'Scenario Quiz', to: '/quiz' },
  { label: 'Research', to: '/research' },
  { label: 'Science Concepts', to: '/science-concepts' },
  { label: 'Sensory Training', to: '/sensory-training' },
  { label: 'Weekly Program', to: '/weekly-program' },
  { label: 'Workshop Mode', to: '/workshop-mode' },
  { label: 'Journal', to: '/journal' },
  { label: 'Modalities', to: '/alternative-modalities' },
  { label: 'Health Inquiry', to: '/health-healing' },
  { label: 'AI Literacy', to: '/ai-literacy' },
  { label: 'Community', to: '/community' },
  { label: 'References', to: '/references' },
  { label: 'Settings', to: '/settings' }
]

  const primaryNavItems = [
  { label: 'Home', to: '/' },
  { label: 'Start Here', to: '/start' },
  { label: 'Checklist', to: '/checklist' },
  { label: 'Claim Pages', to: '/claim-pages' },
  { label: 'Scenario Quiz', to: '/quiz' },
  { label: 'Research', to: '/research' },
  { label: 'Science Concepts', to: '/science-concepts' }
]

const moreNavItems = [
  { label: 'Sensory Training', to: '/sensory-training' },
  { label: 'Weekly Program', to: '/weekly-program' },
  { label: 'Workshop Mode', to: '/workshop-mode' },
  { label: 'Journal', to: '/journal' },
  { label: 'Modalities', to: '/alternative-modalities' },
  { label: 'Health Inquiry', to: '/health-healing' },
  { label: 'AI Literacy', to: '/ai-literacy' },
  { label: 'Community', to: '/community' },
  { label: 'Settings', to: '/settings' }
]



  
</script>
