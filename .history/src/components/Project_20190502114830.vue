<template>
  <div>
    <div class="content">
      <div class="service__effect1" data-scroll-reveal="enter top" data-scroll-reveal-id="8" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true"></div>
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
}
</style>
