<template>
  <PageFrame
    kicker="Journal / Record Experience"
    title="Structured reflection"
    summary="Journaling is kept separate from optional research contribution. The user can keep notes private or share de-identified summaries later."
    :tags="['Local storage', 'Mood before/after', 'Private by default', 'Consent-aware']"
  >
    <PageHero kicker="Journal" title="Record what you did and what you noticed" subtitle="The fields are intentionally structured so that experience can be described without forcing a doctrine onto it." />

    <form class="grid gap-4 lg:grid-cols-2" @submit.prevent="saveEntry">
      <label class="form-control">
        <span class="label-text">Activity</span>
        <input v-model="form.activity" class="input input-bordered rounded-2xl" placeholder="e.g. quiet listening walk" required />
      </label>
      <label class="form-control">
        <span class="label-text">Duration</span>
        <input v-model="form.duration" class="input input-bordered rounded-2xl" placeholder="e.g. 12 minutes" required />
      </label>
      <label class="form-control">
        <span class="label-text">Location</span>
        <input v-model="form.location" class="input input-bordered rounded-2xl" placeholder="home, park, studio" required />
      </label>
      <label class="form-control">
        <span class="label-text">Setting</span>
        <select v-model="form.setting" class="select select-bordered rounded-2xl">
          <option>Alone</option>
          <option>Pair</option>
          <option>Group</option>
        </select>
      </label>
      <label class="form-control">
        <span class="label-text">Mood before (1–5)</span>
        <input v-model.number="form.moodBefore" type="number" min="1" max="5" class="input input-bordered rounded-2xl" />
      </label>
      <label class="form-control">
        <span class="label-text">Mood after (1–5)</span>
        <input v-model.number="form.moodAfter" type="number" min="1" max="5" class="input input-bordered rounded-2xl" />
      </label>
      <label class="form-control lg:col-span-2">
        <span class="label-text">What did you notice through the senses?</span>
        <textarea v-model="form.notice" class="textarea textarea-bordered rounded-2xl h-28" placeholder="Vision, hearing, smell, touch, taste, body state, or social presence." />
      </label>
      <label class="form-control lg:col-span-2">
        <span class="label-text">Free reflection</span>
        <textarea v-model="form.notes" class="textarea textarea-bordered rounded-2xl h-36" placeholder="What changed, what stayed unclear, what would you try next?" />
      </label>
      <div class="lg:col-span-2 flex justify-end">
        <button class="btn btn-primary rounded-full" type="submit">Save entry</button>
      </div>
    </form>

    <div class="mt-8">
      <div class="mb-3 flex items-center justify-between">
        <div class="kicker">Saved entries</div>
        <button class="btn btn-ghost btn-sm rounded-full" @click="clearEntries">Clear all</button>
      </div>
      <div v-if="entries.length" class="space-y-4">
        <div v-for="entry in entries" :key="entry.id" class="card-soft p-5">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="font-semibold text-base-content">{{ entry.activity }}</div>
              <div class="text-sm text-base-content/60">{{ entry.duration }} · {{ entry.location }} · {{ entry.setting }}</div>
            </div>
            <span class="badge badge-outline rounded-full">{{ entry.createdAt }}</span>
          </div>
          <p class="mt-3 text-sm leading-7 text-base-content/75"><strong>Notice:</strong> {{ entry.notice }}</p>
          <p class="mt-2 text-sm leading-7 text-base-content/75"><strong>Reflection:</strong> {{ entry.notes }}</p>
        </div>
      </div>
      <div v-else class="card-soft p-5 text-sm leading-7 text-base-content/70">No entries saved yet. This page stores demo data locally in the browser.</div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import PageHero from '../components/PageHero.vue'

const STORAGE_KEY = 'bip-journal-entries'

type Entry = {
  id: string
  activity: string
  duration: string
  location: string
  setting: string
  moodBefore: number
  moodAfter: number
  notice: string
  notes: string
  createdAt: string
}

const form = reactive({
  activity: '',
  duration: '',
  location: '',
  setting: 'Alone',
  moodBefore: 3,
  moodAfter: 3,
  notice: '',
  notes: ''
})

const entries = ref<Entry[]>([])

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) entries.value = JSON.parse(raw)
})

function saveEntry() {
  const entry: Entry = {
    id: crypto.randomUUID(),
    activity: form.activity,
    duration: form.duration,
    location: form.location,
    setting: form.setting,
    moodBefore: form.moodBefore,
    moodAfter: form.moodAfter,
    notice: form.notice,
    notes: form.notes,
    createdAt: new Date().toLocaleString()
  }
  entries.value = [entry, ...entries.value]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.value))
  form.activity = ''
  form.duration = ''
  form.location = ''
  form.setting = 'Alone'
  form.moodBefore = 3
  form.moodAfter = 3
  form.notice = ''
  form.notes = ''
}

function clearEntries() {
  entries.value = []
  localStorage.removeItem(STORAGE_KEY)
}
</script>
