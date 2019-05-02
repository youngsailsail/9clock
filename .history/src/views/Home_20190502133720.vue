<template>
  <transition name="fade" mode="out-in" appear appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration={enter:500,leave:500}>
    <Propaganda v-if="trailer"></Propaganda>
    <div v-else>
      <Headers></Headers>
      <div class="content">
        <!-- <vue-particles :particlesNumber="150"></vue-particles> -->
        <div id="abstract">
          <Abstract></Abstract>
        </div>
        <div id="project">
          <Project></Project>
        </div>
        <div id="client">
          <Project></Project>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { setTimeout } from "timers";
import Headers from "../components/Header";
import Abstract from "../components/Abstract";
import Project from "../components/Project";
import Propaganda from "../components/Propaganda";

export default {
  components: {
    Headers,
    Abstract,
    Project,
    Propaganda
  },
  data() {
    return {
      trailer: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.trailer = false;
    }, 5000);
  }
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  top: 84px;
}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2000;
}
</style>
