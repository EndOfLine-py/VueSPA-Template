import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/aboutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
            meta: {
                showInNav: true
            }
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
            meta: {
                showInNav: true
            }
        }
    ]
})

export default router
