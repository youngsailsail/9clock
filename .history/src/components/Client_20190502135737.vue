<template>
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
  </div>
</template>
<script>
const prefix = "https://www.9clock.cn/img/index/";
export default {
  data() {
    return {
      currentIndex: 0,
      case: [
        {
          iconUrl: prefix + "logo-s-df.png"
        },
        {
          iconUrl: prefix + "logo-s-bm.png"
        },
        {
          iconUrl: prefix + "logo-s-ifm.png"
        },
        {
          iconUrl: prefix + "logo-s-jz.png"
        },
        {
          iconUrl: prefix + "logo-s-jack.png"
        },
        {
          iconUrl: prefix + "logo-s-dice.png"
        },
        {
          iconUrl: prefix + "logo-s-eos.png"
        },
        {
          iconUrl: prefix + "logo-s-xtrail.png"
        },
        {
          iconUrl: prefix + "logo-s-sfk.png"
        }
      ]
    };
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
