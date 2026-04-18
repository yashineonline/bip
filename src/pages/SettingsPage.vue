<template>
  <PageFrame
    kicker="Settings / Privacy / Consent"
    title="Transparent settings"
    summary="This demo includes simple local preferences so the app already models consent, storage, and participant choice instead of hiding them."
    :tags="['Private by default', 'Local storage', 'Consent', 'Pilot-ready']"
  >
    <PageHero kicker="Settings" title="Make privacy and consent visible" subtitle="Even in a demo, settings should show users what is local, what is optional, and what participation means." />

    <div class="space-y-4">
      <label class="card-soft flex items-center justify-between gap-4 p-5">
        <div>
          <div class="font-semibold text-base-content">Store journal entries locally</div>
          <p class="mt-1 text-sm leading-7 text-base-content/70">Demo mode stores notes in the current browser only.</p>
        </div>
        <input v-model="settings.localJournal" type="checkbox" class="toggle toggle-primary" />
      </label>
      <label class="card-soft flex items-center justify-between gap-4 p-5">
        <div>
          <div class="font-semibold text-base-content">Allow optional research contact</div>
          <p class="mt-1 text-sm leading-7 text-base-content/70">Separate from journaling. Off by default.</p>
        </div>
        <input v-model="settings.researchContact" type="checkbox" class="toggle toggle-primary" />
      </label>
      <label class="card-soft flex items-center justify-between gap-4 p-5">
        <div>
          <div class="font-semibold text-base-content">Show roadmap sections prominently</div>
          <p class="mt-1 text-sm leading-7 text-base-content/70">Lets facilitators emphasize either immediate usefulness or wider vision.</p>
        </div>
        <input v-model="settings.showRoadmap" type="checkbox" class="toggle toggle-primary" />
      </label>
    </div>

    <div class="mt-6 flex justify-end">
      <button class="btn btn-primary rounded-full" @click="save">Save settings</button>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'

const STORAGE_KEY = 'bip-settings'
const settings = reactive({
  localJournal: true,
  researchContact: false,
  showRoadmap: true
})

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) Object.assign(settings, JSON.parse(raw))
})

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}
</script>
