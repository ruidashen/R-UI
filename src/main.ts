import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Ruida from './components/Ruida.vue';
import Ruida2 from './components/Ruida2.vue'
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Ruida
        },
        {
            path: '/xxx',
            component: Ruida2
        }
    ]

});
const app = createApp(App);
app.use(router);
app.mount('#app');
