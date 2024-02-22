import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import EmailList from '../components/EmailList.vue';
import EmailDetails from '../components/EmailDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/HomePage',
    name: 'Conversations',
    component: () => import('../components/HomePage.vue')
  },

  { path: '/', component: EmailList },
  { path: '/email/:id', name: 'email-detail', component: EmailDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router