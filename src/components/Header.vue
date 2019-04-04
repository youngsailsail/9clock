<template>
  <header class="header">
    <div class="animated zoomIn bounceInLeft">
      <img src="../static/logo.png" alt="">
    </div>
    <ul>
      <li
      v-for=" (item,index) in headers"
      :key="index"
       class="animated"
       :class="{'bounce':index === clickNo,'pulse':index === hoverNo}"
       @mouseover="hoverNo = index"
       @click="toggle(index,item.target)">
        {{item.label}}
      </li>
    </ul>
  </header>
</template>
<script>
import scrollAnimation from '../utils/scrollAnimation';

export default {
  data() {
    return {
      clickNo: 0,
      hoverNo: undefined,
      headers: [
        { label: '公司简介', target: '#abstract' },
        { label: '服务项目', target: '#project' },
        { label: '企业文化', target: '#culture' },
        { label: '服务客户', target: '#customer' },
        { label: '团队介绍', target: '#team' },
        { label: '联系我们', target: '#contact' },
      ],
    };
  },
  computed: {
    nodeDistance() {
      return this.headers && this.headers.map(({ target }) => {
        console.log(target);
        const node = this.$root.$el.querySelector(target);
        if (!node) return { offsetTop: null };
        const { offsetTop } = node;
        return { offsetTop };
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll);
    });
  },
  methods: {
    toggle(clickNo, target) {
      this.clickNo = clickNo;
      const currentY = document.documentElement.scrollTop || document.body.scrollTop;
      const { offsetTop } = this.$root.$el.querySelector(target);
      console.log(currentY, offsetTop, 111);
      scrollAnimation(currentY, offsetTop);
    },
    onScroll() {
      this.hoverNo = undefined;
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      this.nodeDistance.forEach(({ offsetTop }, index) => {
        if (index > 1) return;
        const nextOffsetTop = this.nodeDistance[index + 1];
        if (nextOffsetTop) {
          if (offsetTop <= scrolled && scrolled < (nextOffsetTop.offsetTop || 10000)) {
            this.clickNo = index;
          }
        } else if (offsetTop <= scrolled) {
          this.clickNo = index;
        }
      });
    },
  },

};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 85px;
  background-color: #262d38;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 3000;
}
ul {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  color: #707f97;
  list-style: none;
  li{
   cursor: pointer;
   height: 94%;
   display: flex;
  align-items: center;
  }
}
  ul>li:hover{
      color: #fff;
      border-bottom: 2px solid  #fff;
    }
.bounce,{
  color:white;
}
</style>
