import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import EmailList from '../components/EmailList.vue';
import EmailDetails from '../components/EmailDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/conversations', // Utilisation de '/conversations' à la place de '/HomePage'
    name: 'Conversations',
    component: HomePage,
  },
  {
    path: '/emails', // Utilisation de '/emails' à la place de '/'
    name: 'EmailList',
    component: EmailList,
  },
  {
    path: '/email/:id',
    name: 'email-detail',
    component: EmailDetails,
    props: true,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
