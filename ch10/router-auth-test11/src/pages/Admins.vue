<template>
    <div>
        <h2>Admins</h2>
        <p>admins 역할이 있어야만 접근할 수 있는 페이지</p>
        <p>사용자 : {{userInfo.userid}}</p>
        <p>사용자의 역할 : [ {{userInfo.roles.join(', ')}} ]</p> 
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script>
import { getUserInfo, logoutProcess } from '@/utils/AuthUtil.js'
import { useRouter } from 'vue-router';

export default {
    name : "Admins",
    setup() {
        const router = useRouter();
        const userInfo = getUserInfo();
        const logout = () => {
            logoutProcess(()=>{
                router.push({ name:'home' });
            })
        }
        return { userInfo, logout }
    }
}
</script>
