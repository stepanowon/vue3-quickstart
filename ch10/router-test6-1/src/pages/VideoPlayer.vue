<template>
    <div class="modal">
        <div class="box">
            <div class="heading">
                <span class="title">:: {{videoInfo.video.title}}</span>
                <span class="category"> ( {{videoInfo.video.category}} ) </span>
                <span class="float-end badge bg-secondary pointer" @click="stopVideo">
                    X
                </span>
            </div>
            <div class="player">
                <YoutubeVue3 ref="playerRef" :videoid="videoInfo.video.id"
                    :autoplay="1" :controls="1" @ended="playNext" />
            </div>
            <div>
                <div>
                    <i class="fa fa-backward ml-2 pointer" @click="playPrev"></i>
                    <i class="fa fa-stop ml-2 pointer" @click="stopVideo"></i>
                    <i class="fa fa-forward ml-2 pointer" @click="playNext"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { YoutubeVue3} from 'youtube-vue3';

export default {
    name : "VideoPlayer",
    components : { YoutubeVue3 },
    setup() {      
        const videos = inject('videos');
        const playerRef = ref(null);
        const currentRoute = useRoute();
        const router = useRouter();
        
        let videoInfo = 
            reactive({ video: videos.find((v)=>v.id === currentRoute.params.id) });
        const stopVideo = () => {
            playerRef.value.player.stopVideo();
            router.push({ name:'videos' });
        }
        const playNext = () => {
            const index = videos.findIndex((v)=>v.id === videoInfo.video.id);
            const nextVideo = videos[index+1];
            if (nextVideo) {
                videoInfo.video = nextVideo;
                router.push({ name:'videos/id', params: { id: nextVideo.id } });
            } else {
                videoInfo.video = videos[0];
                router.push({ name:'videos/id', params: { id: videos[0].id } });
            }
        }
        const playPrev = () => {
            const index = videos.findIndex((v)=>v.id === videoInfo.video.id);
            const prevVideo = videos[index-1];
            if (prevVideo) {
                videoInfo.video = prevVideo;
                router.push({ name:'videos/id', params: { id: prevVideo.id } });
            }
        }
        
        return { videoInfo, playerRef, playNext, stopVideo,  playPrev };
    }
}
</script>
    
<style scoped>
.modal { display: block; position: fixed; z-index: 1; 
    left: 0; top: 0; width: 100%; height: 100%;
    overflow: auto;  
    background-color: rgba(0,0,0,0.4); }
.box { background-color: white; margin:80px auto;
    max-width: 500px; min-width: 100px; min-height: 350px;
    font: 13px "verdana";
    padding: 10px 10px 10px 10px;  }
.box div { padding: 0;  display: block;  margin: 10px 0 0 0; }
.box .heading { background: #33A17F; font-weight: 300;
    text-align: left; color: #fff;
    margin:5px 0 5px 0; padding: 10px; min-width:200px;
    max-width:500px; }
.box .player { background:white; }
.pointer { cursor:pointer; }
</style>