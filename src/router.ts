import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('./pages/HomePage.vue'), meta: { title: 'Home' } },
  { path: '/start', name: 'start', component: () => import('./pages/StartHerePage.vue'), meta: { title: 'Start Here' } },
  { path: '/checklist', name: 'checklist', component: () => import('./pages/ChecklistPage.vue'), meta: { title: 'Checklist' } },
  { path: '/claim-pages', name: 'claim-pages', component: () => import('./pages/ClaimPagesPage.vue'), meta: { title: 'Claim Pages' } },
  { path: '/claim-pages/:id', name: 'claim-detail', component: () => import('./pages/ClaimDetailPage.vue'), meta: { title: 'Claim Detail' } },
  { path: '/quiz', name: 'quiz', component: () => import('./pages/QuizPage.vue'), meta: { title: 'Scenario Quiz' } },
  { path: '/about', name: 'about', component: () => import('./pages/AboutPage.vue'), meta: { title: 'About BIP' } },
  { path: '/sensory-training', name: 'sensory-training', component: () => import('./pages/SensoryTrainingPage.vue'), meta: { title: 'Sensory Training' } },
  { path: '/weekly-program', name: 'weekly-program', component: () => import('./pages/WeeklyProgramPage.vue'), meta: { title: 'Weekly Program' } },
  { path: '/workshop-mode', name: 'workshop-mode', component: () => import('./pages/WorkshopModePage.vue'), meta: { title: 'Workshop Mode' } },
  { path: '/journal', name: 'journal', component: () => import('./pages/JournalPage.vue'), meta: { title: 'Journal / Record Experience' } },
  { path: '/research', name: 'research', component: () => import('./pages/ResearchParticipationPage.vue'), meta: { title: 'Research Participation' } },
  { path: '/science-concepts', name: 'science-concepts', component: () => import('./pages/ScienceConceptsPage.vue'), meta: { title: 'Science Concepts' } },
  { path: '/alternative-modalities', name: 'alternative-modalities', component: () => import('./pages/AlternativeModalitiesPage.vue'), meta: { title: 'Alternative Modalities' } },
  { path: '/health-healing', name: 'health-healing', component: () => import('./pages/HealthHealingPage.vue'), meta: { title: 'Health and Healing Inquiry' } },
  { path: '/ai-literacy', name: 'ai-literacy', component: () => import('./pages/AILiteracyPage.vue'), meta: { title: 'AI Literacy' } },
  { path: '/community', name: 'community', component: () => import('./pages/CommunitySustainabilityPage.vue'), meta: { title: 'Community and Sustainability' } },
  { path: '/references', name: 'references', component: () => import('./pages/ReferencesPage.vue'), meta: { title: 'References' } },
  { path: '/settings', name: 'settings', component: () => import('./pages/SettingsPage.vue'), meta: { title: 'Settings / Privacy / Consent' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    if (to.path === from.path) return { top: 0 }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'BIP'
  document.title = `${title} · BIP`
})

export default router
