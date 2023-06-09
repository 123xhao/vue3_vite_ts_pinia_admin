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
        path:'/three',
        name:'Three',
        component:()=>import('../view/three/index.vue'),
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
            },
            {
                path:'/gallery',
                name:'gallery',
                component:()=>import('../view/gallery/index.vue')
            },
            {
                path:'/article',
                name:'article',
                component:()=>import('../view/article/index.vue')
            },
            {
                path:'/comment',
                name:'comment',
                component:()=>import('../view/comment/index.vue')
            },
            {
                path:'/leaveMessage',
                name:'leaveMessage',
                component:()=>import('../view/leaveMessage/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to:any, from, next) => {
    if ( !['Login','Three'].includes(to.name) && !localStorage.getItem('token')) next({ name: 'Login' })
    else next()
})

export default router