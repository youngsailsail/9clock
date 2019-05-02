<template>
  <div>
    <div class="content">
      <div class="service__effect1">
        <img src="https://www.9clock.cn/img/index/effect-2.png" alt="">
      </div>
      <div class="right_content">
        <div>
          <img class="showImg" src="https://www.9clock.cn/img/index/effect-3.png" alt="">
          <img class="next" src="https://www.9clock.cn/img/index/icon-more.png" alt="">
        </div>
      </div>
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
        ]
      ]
    };
  },
  changeCurrentIndex(){
    
  }
  computed: {
    currentCase() {
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
    width: 265px;
    height: 560px;
    top: 127px;
    right: 165px;
    div {
      height: 100%;
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
}
</style>
