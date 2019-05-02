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
    <ul>
      <li v-for="(caseItem,index) in caseArr" :key="index">
        <img :src="caseItem.iconUrl" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
const prefix = "https://www.9clock.cn/img/index/";
export default {
  data() {
    return {
      caseArr: [
        {
          iconUrl: prefix + "logo-beima.png"
        },
        {
          iconUrl: prefix + "logo-ifm.png"
        },
        {
          iconUrl: prefix + "logo-df.png"
        },
        {
          iconUrl: prefix + "logo-jz.png"
        },
        {
          iconUrl: prefix + "logo-eos.png"
        },
        {
          iconUrl: prefix + "logo-jack.png"
        },
        {
          iconUrl: prefix + "logo-xtrail.png"
        },
        {
          iconUrl: prefix + "logo-sfk.png"
        },
        {
          iconUrl: prefix + "logo-dice.png"
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin-top: 77px;
    li {
      width: 370px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin-bottom: 50px;
    }
    :nth-child(2) {
      margin-left: -18px;
    }
  }
}
</style>
