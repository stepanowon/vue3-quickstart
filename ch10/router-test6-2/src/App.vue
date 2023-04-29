<template>
  <div class="container">
    <Header />
    <div class="card card-body border-0 pl-3 pr-3 pt-0">
      <div class="row">
        <div class="col-md-3 border">
          <router-view name="left"></router-view>
        </div>
        <div class="col-md-9 border">
          <router-view></router-view>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 border">
          <router-view name="footer"></router-view>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name : "App",
  components : { Header }
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
