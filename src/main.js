import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';


import { createApp } from 'vue';
import App from './App.vue';
import { routes } from './Route/Router.js';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App);
app.use(router);
app.mount('#app');



