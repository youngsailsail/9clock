<template>
  <div>
    <div class="content">
      <div class="service__effect1">
        <img src="https://www.9clock.cn/img/index/effect-2.png" alt="">
      </div>
      <div class="right_content">
        <div>
          <img class="showImg" src="https://www.9clock.cn/img/index/effect-3.png" alt="">
          <img class="next" @click="changeCurrentIndex" src="https://www.9clock.cn/img/index/icon-more.png" alt="">
        </div>
      </div>
      <ul>
        <li v-for="(currentCase,index) in currentCaseAry" :key="index">
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
export default {
  data() {
    return {
      currentIndex: 0,
      case: [
        [
          {
            label: "内蒙古东方教育官方网站PC端、移动端设计与开发",
            iconUrl: prefix + "logo-s-df.png"
          },
          {
            label: "贝马青训营AI智能足球训练系统、官方网站整体设计与开发",
            iconUrl: prefix + "logo-s-bm.png"
          },
          {
            label: "澳大利亚IFM trade金融服务平台专题活动页面设计",
            iconUrl: prefix + "logo-s-ifm.png"
          }
        ],
        [
          {
            label: "交子信用卡积分兑换系统移动端设计与开发",
            iconUrl: prefix + "logo-s-jz.png"
          },
          {
            label: "上海杰克交易学院金融管理系统、官方网站整体设计与开发",
            iconUrl: prefix + "logo-s-jack.png"
          },
          {
            label: "EOC DICE 游戏平台设计与开发",
            iconUrl: prefix + "logo-s-dice.png"
          }
        ],
        [
          {
            label: "EOS LOTTETY EOS币投注游戏平台设计与开发",
            iconUrl: prefix + "logo-s-jz.png"
          },
          {
            label: "X TRAIL户外训练网站网页端、移动端设计与开发",
            iconUrl: prefix + "logo-s-jack.png"
          },
          {
            label: "EOC DICE 游戏平台设计与开发",
            iconUrl: prefix + "logo-s-dice.png"
          }
        ]
      ]
    };
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
      padding: 0 40px;
      padding-left: 80px;
      margin-bottom: 12px;
    }
    :nth-child(2) {
      margin-left: -18px;
    }
  }
}
</style>
