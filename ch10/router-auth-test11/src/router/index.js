import { createRouter, createWebHistory } from 'vue-router';
import { isMatchToRoles } from '@/utils/AuthUtil.js';

import Home from '@/pages/Home.vue';
import Users from '@/pages/Users.vue';
import Admins from '@/pages/Admins.vue';
import Login from '@/pages/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name:'home', component: Home },
        { path: '/login', name:'login', component: Login },
        { path: '/users', name:'users', component: Users },
        { path: '/admins', name:'admins', component: Admins },
    ]
})

router.beforeEach((to)=>{
    if (!isMatchToRoles(to.path)) {
        return { name:'login', query: { fromname:to.name } };
    }
})

export default router;