<template>
    <Layout>
        <template v-slot:header>
            <h2>헤더 영역</h2>
        </template>
        <template v-slot:sidebar>
            <h3>사이드</h3>
            <h3>사이드</h3>
            <h3>사이드</h3>
        </template>
        <template v-slot:default>
            <h1>컨텐트 영역</h1><h1>컨텐트 영역</h1><h1>컨텐트 영역</h1>
            <h1>컨텐트 영역</h1><h1>컨텐트 영역</h1><h1>컨텐트 영역</h1>
        </template>
        <template v-slot:footer>
            <h2>Footer text</h2>
        </template>
    </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
export default {
    name : "App2",
    components : { Layout }
}
</script>
