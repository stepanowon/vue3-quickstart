<template>
    <div className="mt-5">
      <img :src="member.photo" class="img" />
      <h4 class="mt-2">{{member.name}}({{member.role}})</h4>
      <p>{{member.desc}} </p>
      <a v-if="member.insta && member.insta !== ''" 
          class="fa fa-instagram m-1" :href="member.insta"></a>
      <a v-if="member.facebook && member.facebook !== ''" 
          class="fa fa-facebook m-1" :href="member.facebook"></a>
      <a v-if="member.youtube && member.youtube !== ''" 
          class="fa fa-youtube m-1" :href="member.youtube"></a>
      <br /><br />
      <router-link to="/members">멤버 목록으로</router-link>
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router'
import members from '@/members.json'

export default {
    name : "MemberInfo",
    setup() {
        const currentRoute = useRoute()
        const id = parseInt(currentRoute.params.id, 10);
        const member = members.find((m)=>m.id === id)
        return { member }
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