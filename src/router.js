

 
import party from './views/component/active/index'
import index from './views/component/index/index'
import blog from './views/component/blog/index'
import about from './views/component/about/index'


const routers = [{
    path: '/',
    name: "index",
    meta: {
        title: '首页'
    },
    component: index
}, {
    path: 'https://blog.feddy.org/about-feddy/',
    name: "about",
    
    meta: {
        title: '关于'
    },
}, {
    path: '/party',
    name: "party",
    meta: {
        title: '线下活动'
    },
    component: party
}];
export default routers;