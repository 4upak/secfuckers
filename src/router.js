import Vue from "vue";
import MainPage from "@/pages/MainPage";
import ContactPage from "@/pages/ContactPage";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
})
