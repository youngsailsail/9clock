<template>
  <div>
    <div class="content">
      <div class="service__effect1">
        <img src="https://www.9clock.cn/img/index/effect-2.png" alt="">
      </div>
      <div class="right_content">
        <img src="https://www.9clock.cn/img/index/effect-3.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          label: "网站设计开发",
          iconUrl: require("../static/icon-1.png"),
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
    top: 127px;
    right: 165px;
    width: 265px;
    height: 560px;
  }
}
</style>
