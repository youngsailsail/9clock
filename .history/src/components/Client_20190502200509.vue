<template>
  <div>
    <div class="content">
      <div class="service__effect1">
        <img src="https://www.9clock.cn/img/index/effect-7.png" alt="">
      </div>
      <div class="right_content">
        <img class="showImg" src="https://www.9clock.cn/img/index/bg-dian.png" alt="">
        <p>
          我们为企业网站提供精准的策划、设计、开发一站式服务方案
        </p>
      </div>
      <ul>
        <li class="reveal-top" v-for="(caseItem,index) in caseArr" :key="index" @mouseover="mouseover(index)" @mouseout="mouseout" :class="{hoverLi:isHoverIndex===index}">
          <img :src="caseItem.iconUrl" alt="" v-if="isHoverIndex!==index">
          <span v-else>{{caseItem.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const prefix = "https://www.9clock.cn/img/index/";
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
      scrollReveal: scrollReveal(),
      isHoverIndex: "",
      caseArr: [
        {
          iconUrl: prefix + "logo-beima.png",
          label: "BEIMA SPORTS"
        },
        {
          iconUrl: prefix + "logo-ifm.png",
          label: "IFM Trade"
        },
        {
          iconUrl: prefix + "logo-df.png",
          label: "东方教育"
        },
        {
          iconUrl: prefix + "logo-jz.png",
          label: "交子"
        },
        {
          iconUrl: prefix + "logo-eos.png",
          label: "EOS LOTTETY"
        },
        {
          iconUrl: prefix + "logo-jack.png",
          label: "杰克交易学院"
        },
        {
          iconUrl: prefix + "logo-xtrail.png",
          label: "X TRAIL"
        },
        {
          iconUrl: prefix + "logo-sfk.png",
          label: "斯芬克"
        },
        {
          iconUrl: prefix + "logo-dice.png",
          label: "DICE"
        }
      ]
    };
  },
  mounted() {
    const scrollObj = [
      {
        key: ".service__left",
        item: {
          delay: 500,
          origin: "left",
          distance: "150px"
        }
      },
      {
        key: ".showImg",
        item: {
          delay: 1000,
          origin: "right",
          distance: "150px"
        }
      },
      {
        key: ".showImg",
        item: {
          delay: 1000,
          origin: "right",
          distance: "150px"
        }
      }
    ];
    this.scrollReveal.reveal(".reveal-top", {
      interval: 300,
      scale: 3
    });
  },
  methods: {
    mouseover(index) {
      this.isHoverIndex = index;
    },
    mouseout() {
      this.isHoverIndex = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 845px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  width: 80%;
  .service__effect1 {
    width: 270px;
    height: 271px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right_content {
    position: absolute;
    top: 115px;
    right: 0;
    width: 527px;
    height: 295px;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      right: 70px;
      top: 140px;
      width: 527px;
      height: 295px;
      z-index: 2;
      font-size: 14px;
      color: #000000;
      text-align: right;
    }
  }
  ul {
    position: absolute;
    top: 351px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 1200px;
    z-index: 999;
    right: 0;
    li {
      width: 370px;
      margin-left: 30px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin-bottom: 50px;
      color: #fff;
    }
    .hoverLi {
      background: #ff6f00;
    }
  }
}
</style>
