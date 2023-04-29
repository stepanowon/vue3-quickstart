<template>
  <div class="container">
    <Header />
    <router-view v-slot="{ Component }">
      <Suspense timeout="0">
        <Component :is="Component"></component>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import { provide } from 'vue';

export default {
  name : "App",
  components : { Header, Loading },
  setup() {
    provide('videos', [
      { "id":"t0BHhqw_Ecc", "title":"범 내려온다", "category":"official" },
      { "id":"FrCkLMxnlMI", "title":"좌우나졸", "category":"official" },
      { "id":"7O0hIrgMcCg", "title":"별주부가 울며 여짜오되", "category":"official" },
      { "id":"MJD_fAdqNQc", "title":"어류도감", "category":"official" },
      { "id":"SmTRaSg2fTQ", "title":"범 내려온다", "category":"온스테이지2.0" },
      { "id":"B_X7n0AaLqA", "title":"범 내려온다(서울)", "category":"관광공사" },
      { "id":"sV1jq6RFSXc", "title":"어류도감(부산)", "category":"관광공사" },
      { "id":"dInPs_VHqSM", "title":"좌우나졸(전주)", "category":"관광공사" }
    ])
  }
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