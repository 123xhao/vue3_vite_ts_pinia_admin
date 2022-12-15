// index.ts
import { requiredNumber } from "element-plus/es/components/table-v2/src/common";
import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
    { 
        path:'/',
        name:'Login',
        component:()=>import('../view/login/index.vue') 
    },
    { 
        path:'/home',
        name:'Home',
        component:()=>import('../view/home/index.vue'),
        redirect:'/homepage',
        children:[
            {
                path:'/homepage',
                name:'HomePage',
                component:()=>import('../view/home/homepage.vue')
            },
            {
                path:'/user/userInfo',
                name:'UserInfo',
                component:()=>import('../view/user/userInfo.vue')
            },
            {
                path:'/home/table',
                name:'Table',
                component:()=>import('../view/table/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
    else next()
})

export default router