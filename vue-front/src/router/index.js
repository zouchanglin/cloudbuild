import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import AutoQA from '@/pages/AutoQA.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/qa',
        children: [
            { path: '/qa', component: AutoQA }
        ]
    },
    {
        // 404
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = new VueRouter({
    // mode: 'hash',
    // base: process.env.BASE_URL,
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转过来
//   // next 是一个函数，表示放行
//   // next() 放行、next('/login')强制跳转
//   if (to.path === '/login') return next()
//   // 获取token
//   const token = window.localStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
// })
export default router
