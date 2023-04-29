<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name : "App",
  components : { Header },
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.container { text-align: center; margin-top:10px; }
.fa { padding: 5px; width: 30px; text-align: center; 
    text-decoration: none; margin: 5px 2px; }
.fa-facebook { background: #3B5998; color: white; }
.fa-youtube { background: #bb0000; color: white; }
.fa-instagram { background: #125688; color: white; }
</style>