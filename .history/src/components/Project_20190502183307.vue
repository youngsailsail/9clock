<template>
  <div>
    <div class="content">
      <div class="service__effect1 enterLeft">
        <img src="https://www.9clock.cn/img/index/effect-2.png" alt="">
      </div>
      <div class="right_content enterRight">
        <div>
          <img class="showImg" src="https://www.9clock.cn/img/index/effect-3.png" alt="">
          <img class="next" @click="changeCurrentIndex" src="https://www.9clock.cn/img/index/icon-more.png" alt="">
        </div>
      </div>
      <ul>
        <li v-for="(currentCase,index) in currentCaseAry" :key="index" class="animated fadeIn" :class="{currentCase.classVal:index === currentIndex}">
          <span>
            <img :src="currentCase.iconUrl" alt="">
          </span>
          {{currentCase.label}}
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
      currentIndex: 0,
      case: [
        [
          {
            label: "内蒙古东方教育官方网站PC端、移动端设计与开发",
            iconUrl: prefix + "logo-s-df.png",
            classVal: "listLeft"
          },
          {
            label: "贝马青训营AI智能足球训练系统、官方网站整体设计与开发",
            iconUrl: prefix + "logo-s-bm.png",
            classVal: "listRight"
          },
          {
            label: "澳大利亚IFM trade金融服务平台专题活动页面设计",
            iconUrl: prefix + "logo-s-ifm.png",
            classVal: "listBottom"
          }
        ],
        [
          {
            label: "交子信用卡积分兑换系统移动端设计与开发",
            iconUrl: prefix + "logo-s-jz.png",
            classVal: "listLeft"
          },
          {
            label: "上海杰克交易学院金融管理系统、官方网站整体设计与开发",
            iconUrl: prefix + "logo-s-jack.png",
            classVal: "listRight"
          },
          {
            label: "EOC DICE 游戏平台设计与开发",
            iconUrl: prefix + "logo-s-dice.png",
            classVal: "listBottom"
          }
        ],
        [
          {
            label: "EOS LOTTETY EOS币投注游戏平台设计与开发",
            iconUrl: prefix + "logo-s-eos.png",
            classVal: "listLeft"
          },
          {
            label: "X TRAIL户外训练网站网页端、移动端设计与开发",
            iconUrl: prefix + "logo-s-xtrail.png",
            classVal: "listRight"
          },
          {
            label: "北京斯芬克艺术留学机构多端设计与开发",
            iconUrl: prefix + "logo-s-sfk.png",
            classVal: "listBottom"
          }
        ]
      ]
    };
  },
  mounted() {
    const scrollRevealObj = [
      {
        key: ".listLeft",
        item: {
          delay: 1300,
          origin: "left",
          distance: "200px"
        }
      },
      {
        key: ".listRight",
        item: {
          delay: 1600,
          origin: "right",
          distance: "200px"
        }
      },
      {
        key: ".listBottom",
        item: {
          delay: 1900,
          origin: "left",
          distance: "200px"
        }
      },
      {
        key: ".next",
        item: {
          delay: 2200,
          origin: "left",
          distance: "10px"
        }
      }
    ];
    this.scrollReveal.reveal(".enterLeft", {
      // 延迟时间
      delay: 500,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: "left",
      // 其他可用的动画效果
      opacity: 0.001,
      easing: "linear",
      scale: 0.9,
      distance: "200px"
    });
    this.scrollReveal.reveal(".enterRight", {
      // 延迟时间
      delay: 1000,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: "right",
      // 其他可用的动画效果
      opacity: 0.001,
      easing: "linear",
      scale: 0.7,
      distance: "200px"
    });
    const that = this;
    scrollRevealObj.forEach(({ key, item }) => {
      that.scrollReveal.reveal(key, item);
    });
  },
  methods: {
    changeCurrentIndex() {
      this.currentIndex += 1;
      if (this.currentIndex === this.case.length) {
        this.currentIndex = 0;
      }
    }
  },
  computed: {
    currentCaseAry() {
      return this.case[this.currentIndex];
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 790px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  width: 80%;
  top: 0;
  .service__effect1 {
    position: absolute;
    top: 164px;
    left: 30px;
    width: 520px;
    height: 467px;
  }
  .right_content {
    position: absolute;
    top: 127px;
    right: 165px;
    div {
      width: 265px;
      height: 560px;
      .showImg {
        width: 100%;
        height: 100%;
      }
      .next {
        position: absolute;
        bottom: 62px;
        right: -20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
  ul {
    position: absolute;
    top: 304px;
    right: 20px;
    width: 516px;
    li {
      display: flex;
      align-items: center;
      width: 480px;
      height: 60px;
      background-color: #fff;
      color: #010101;
      font-size: 14px;
      box-shadow: 0px 2px 17.82px 0.18px rgba(0, 0, 0, 0.12);
      padding: 0 35px;
      margin-bottom: 12px;
      box-sizing: border-box;
      span {
        margin-right: 25px;
      }
    }
    :nth-child(2) {
      margin-left: -18px;
    }
  }
}
</style>
