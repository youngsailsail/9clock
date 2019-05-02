<template>
  <transition name="fade" mode="out-in" appear appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration={enter:500,leave:500}>
    <Propaganda v-if="trailer"></Propaganda>
    <div v-else>
      <Headers></Headers>
      <div class="content">
        <div class="content2">
          <div id="abstract">
            <Abstract></Abstract>
          </div>
          <vue-particles :particlesNumber="150"></vue-particles>
        </div>
        <div id="project">
          <Project></Project>
        </div>
        <div id="client">
          <Client></Client>
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
import Client from "../components/Client";

export default {
  components: {
    Headers,
    Abstract,
    Project,
    Propaganda,
    Client
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
  top: 84px;
  background: #f8f8f8;
}
.content2 {
  position: relative;
}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2000;
}
</style>
