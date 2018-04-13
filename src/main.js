import Vue from 'vue'
//import VueAwesomeSwiper from 'vue-awesome-swiper';

import VueRouter from 'vue-router'
import Routers from './router'

import Util from '@libs/util'
import App from './app.vue'
import 'iview/dist/styles/iview.css'
import 'animate.css'
import FeComponents from '@components'

Vue.use(VueRouter)

import {
  LoadingBar,
  Row,
  Col
} from 'iview'

Vue.component('Row', Row)
Vue.component('Col', Col)

Object.keys(FeComponents).forEach((key) => {
  Vue.component(key, FeComponents[ key ])
})

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig);

/**
 * google Analytics
 * @return {[type]}   [description]
 */
(function(i, s, o, g, r, a, m) {
  i[ 'GoogleAnalyticsObject' ] = r;i[ r ] = i[ r ] || function() {
    (i[ r ].q = i[ r ].q || []).push(arguments)
  }, i[ r ].l = 1 * new Date();a = s.createElement(o),
  m = s.getElementsByTagName(o)[ 0 ];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

ga('create', 'UA-87261065-5', 'auto')

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach((to, from) => {
  ga('send', 'pageview', to.path)
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
