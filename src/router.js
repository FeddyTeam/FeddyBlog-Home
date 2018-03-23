import party from '@views/active/index';
import index from '@views/index/index';
import blog from '@views/blog/index';
import about from '@views/about/index';


const routers = [{
    path: '/',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: index
}, {
    path: 'https://blog.feddy.org/about-feddy/',
    name: 'about',

    meta: {
        title: '关于'
    },
}, {
    path: '/party',
    name: 'party',
    meta: {
        title: '线下活动'
    },
    component: party
}];
export default routers;
