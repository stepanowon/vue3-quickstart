<template>
  <div>
    <h2>최신 인기곡</h2>
    <SongList :songs="songs" />
  </div>
</template>

<script>
import { computed } from 'vue';
import SongList from './components/SongList.vue'

export default {
  name : "App",
  components : { SongList },
  data() {
    return {
        songs : [
            { id:1, title:"Blueming", done:true },
            { id:2, title:"Dynamite", done:true },
            { id:3, title:"Lovesick Girls", done:false },
            { id:4, title:"마리아(Maria)", done:false },
        ]
    }
  },
  provide() {
    return { 
      icons : {
        checked : "far fa-check-circle",
        unchecked : "far fa-circle",
      },
      doneCount : computed(()=> {
        return this.songs.filter((s)=>s.done === true).length
      })  
    }
  },
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
