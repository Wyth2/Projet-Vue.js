import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store.js';

const app = createApp(App);

// Utilisez le store dans l'application Vue
app.use(store);

// Utilisez le router dans l'application Vue
app.use(router);

// Montez l'application sur l'élément avec l'id 'app' dans votre template
app.mount('#app');
