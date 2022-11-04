import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);



import MainPage from "@/pages/MainPage";
import ContactPage from "@/pages/ContactPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ExchangesPage from "@/pages/ExchangesPage";
import FaqPage from "@/pages/FaqPage";
import NewsPage from "@/pages/NewsPage";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/contacts/',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/articles/',
        name: 'ArticlesPage',
        component: ArticlesPage
    },
    {
        path: '/faq/',
        name: 'FaqPage',
        component: FaqPage
    },
    {
        path: '/exchanges/',
        name: 'ExchangesPage',
        component: ExchangesPage
    },
    {
        path: '/news/',
        name: 'NewsPage',
        component: NewsPage
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
})
