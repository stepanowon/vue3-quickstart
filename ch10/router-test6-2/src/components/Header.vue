<template>
<nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">명명된 뷰 테스트</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="navClass">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">홈</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/members">멤버</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            isNavShow: false
        })
        const navClass = computed(() => state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        } 
        
        return { state, changeIsNavShow, navClass };
    }
}
</script>
<style></style>