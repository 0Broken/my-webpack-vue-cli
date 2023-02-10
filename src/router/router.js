import Vue from 'vue'
// import login from '@/component/Login.vue'  
import register from '@/component/Register.vue'
import home from '@/component/Home.vue'
import User from '@/component/User.vue'
import Order from '@/component/Order.vue'
import Address from '@/component/Address.vue'
import Nprogress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/', redirect: '/home', meta: {
                title: '文章首页'
            }
        },
        {
            path: "/home", component: home, meta: {
                title: '文章首页'
            }
        },
        {
            path: "/login", component: () => import('@/component/Login.vue'), meta: {
                title: '登录'
            }
        },  //import 路由懒加载
        {
            path: "/register", component: register, meta: {
                title: '文章注册'
            }
        },
        // 嵌套路由
        {
            path: "/user", component: User, meta: {
                title: '个人中心'
            },
            children: [
                {
                    path: "order", component: Order, meta: {
                        title: '个人订单'
                    }
                },
                {
                    path: "address", component: Address, meta: {
                        title: '个人地址'
                    }
                },
                { path: "", component: Order }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    Nprogress.start();
    if (to.path === '/user') {
        document.title = '个人中心';
    } else {
        document.title = to.meta.title;
    }
    next();
})

router.afterEach((to, from,) => {
    Nprogress.done();
})

export default router;