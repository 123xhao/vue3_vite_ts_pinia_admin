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
        component:()=>import('../view/home/index.vue') 
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