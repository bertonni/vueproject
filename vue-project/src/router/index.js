import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import TaskView from '../views/TaskView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/task/:id',
    name: 'TaskView',
    component: TaskView,
    props: true,
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
