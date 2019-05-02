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
      case: [
        {
          label: "内蒙古东方教育官方网站PC端、移动端设计与开发",
          iconUrl: prefix + "logo-s-df.png",
          id: "website"
        },
        {
          label: "信息系统集成与维护",
          iconUrl: require("../static/icon-2.png"),
          id: "system"
        },
        {
          label: "微信小程序开发",
          iconUrl: require("../static/icon-3.png"),
          id: "smallProgram"
        },
        {
          label: "软件定制开发",
          iconUrl: require("../static/icon-4.png"),
          id: "software"
        },
        {
          label: "企业品牌设计",
          iconUrl: require("../static/icon-5.png"),
          id: "brand"
        }
      ]
    };
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
