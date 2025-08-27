import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
import { createWebHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'
import HomePage from './pages/HomePage.vue';
import SignPage from './pages/SignPage.vue';
import CasePage from './pages/CasePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sign', component: SignPage },
  { path: '/case/:id', component: CasePage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App);
const queryClient = new QueryClient();
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.mount('#app');


