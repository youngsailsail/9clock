<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <p class="title animated fadeIn">欢迎来到九点党科技</p>
      </div>
      <video-player
        :style="fixStyle"
        :options="playerOptions"
        :playsinline="true"
        @ready="playerReadied"
        ref="myVideo"
         >
          浏览器不支持 video 标签，建议升级浏览器。
      </video-player>
    </div>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player';

export default {
  name: 'login',
  components: {
    videoPlayer,
  },
  data() {
    return {
      fixStyle: { display: 'none' },
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        loop: true,
        sources: [{
          type: 'video/mp4',
          src: require('../static/0.mp4'),
        }],
        controls: true,
        preload: 'auto',
      },
    };
  },
  methods: {
    playerReadied() {
      this.player.play();
    },
  },
  computed: {
    player() {
      return this.$refs.myVideo.player;
    },
  },
  mounted() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: `${windowWidth * 0.5625}px`,
          width: `${windowWidth}px`,
          'margin-bottom': `${(windowHeight - videoHeight) / 2}px`,
          'margin-left': 'initial',
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: `${windowHeight}px`,
          width: `${windowHeight / 0.5625}px`,
          'margin-left': `${(windowWidth - videoWidth) / 2}px`,
          'margin-bottom': 'initial',
        };
      }
    };
    window.onresize();
  },
};
</script>
 <style lang="scss" scoped>
 .title{
   animation-delay: 1s;
 }
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size: 60px;
  }
</style>
