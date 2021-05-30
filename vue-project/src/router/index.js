import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/task/:id',
    name: 'TaskView',
    component: () => import(/* webpackChunkName: "home" */ '../views/TaskView.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
