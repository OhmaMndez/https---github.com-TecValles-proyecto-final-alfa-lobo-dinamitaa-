import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'RegenerandoView',
    component: () => import('../views/RegenerandoView.vue'),
  },
  {
    path: '/sobre-nosotros',
    name: 'SobreNos',
    component: () => import('../views/SobreNos.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
