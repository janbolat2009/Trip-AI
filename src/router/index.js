import { createRouter, createWebHistory } from 'vue-router'
import TripAi from '@/TripAi.vue'           
import AItour from '@/pages/AItour.vue'
import Favourite from '@/pages/Favourite.vue'

const routes = [
  { path: '/', name: 'Home', component: TripAi },
  { path: '/ai-tour', name: 'AITour', component: AItour },
  { path: '/favourite', name: 'Favourite', component: Favourite}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
