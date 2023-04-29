<template>
    <div class="card card-body">
        <h2 class="m-3">영상 리스트</h2>
        <ul class="list-group">
          <li v-for="v in videos" :key="v.id" class="list-group-item text-left" 
            :class="playingVideo(v.id)">
            {{v.title}} ( {{v.category}} )
            <router-link :to="{ name:'videos/id', params: { id: v.id } }">
              <span class="float-end badge bg-secondary">듣기</span>
            </router-link>
          </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import { inject } from 'vue' 
import { useRoute } from 'vue-router'

export default {
  name : "Videos",
  setup() {
    const videos = inject('videos')
    const currentRoute = useRoute();
    const playingVideo = (id) => {
      return id === currentRoute.params.id ? "list-group-item-secondary" : "";
    }
    return { playingVideo, videos }
  }

}
</script>