import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import HomeLeft from '@/components/home/HomeLeft.vue'

import Members from '@/pages/Members.vue'
import MembersLeft from '@/components/members/MembersLeft.vue'
import MembersFooter from '@/components/members/MembersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { 
            path: '/',  
            components: {
                default:Home,
                left:HomeLeft,
            } 
        },
        { 
            path: '/members', 
            components: {
                default: Members,
                left: MembersLeft,
                footer: MembersFooter,
            } 
        },
    ]
})

export default router;