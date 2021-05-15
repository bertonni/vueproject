import { createRouter, createWebHashHistory } from 'vue-router';
import AddTask from '../views/AddTask.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/add',
    name: 'Add Task',
    component: AddTask
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
