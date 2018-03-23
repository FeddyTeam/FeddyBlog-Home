import Vue from 'vue';
//import VueAwesomeSwiper from 'vue-awesome-swiper';

import VueRouter from 'vue-router';
import Routers from './router';

import Util from '@libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import 'animate.css';
import ihComponents from '@components';


Vue.use(VueRouter);
//Vue.use(VueAwesomeSwiper);

import {
    LoadingBar,
    Row,
    Col
} from 'iview';

Vue.component('Row',Row);
Vue.component('Col',Col);

Object.keys(ihComponents).forEach((key) => {
    Vue.component(key, ihComponents[key]);
});

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
