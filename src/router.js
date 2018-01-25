import index from './views/index'
import active from './views/component/active/index'

const routers = [{
    path: '/',
    name: "index",
    meta: {
        title: '首页'
    },
    component: index
}, {
    path: 'https://feddy.org/about-feddy/',
    name: "about",
    meta: {
        title: '关于'
    },
}, {
    path: './active',
    name: "active",
    meta: {
        title: '线下活动'
    },
    component: active
}];
export default routers;