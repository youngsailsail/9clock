<template>
  <div>
    <section class="abstract">
      <div class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
            <img :src="slide" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="imgBox">
        <img class="effect-1 animated lightSpeedIn" src="../static/effect-1.png" alt="">
        <div class="banner__effect2 animated  lightSpeedIn">
          桂林九点党科技有限责任公司是全国专业的互联网信息化解决方案供应商。专注互联网科学技术研发与创新，致力于为各领域客户拥抱互联网提供最专业最高效的产品和服务。
        </div>
      </div>
    </section>
    <section class="skill">
      <ul>
        <li class="reveal-top" v-for=" (skill) in skills " :key="skill.id" @mouseover="hoverTarget=skill.id" :class="{selfImgClass:hoverTarget===skill.id}">
          <img :src="skill.iconUrl"> {{skill.label}}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
// import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from "vue-awesome-swiper";
import scrollReveal from "scrollreveal";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      scrollReveal: scrollReveal(),
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          enabled: true,
          disableOnInteraction: false,
          delay: 2000
        }
      },
      swiperSlides: [
        require("../static/banner.jpg"),
        "//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554146796097&di=2a51ecd85ed9eed3bd15dea9a015dacd&imgtype=0&src=http%3A%2F%2Fwww.bdqn-cq.com%2Finheart2_bg%2Finheart%2Fresource%2FkindEditor%2Fimage%2F20180912%2F20180912153947_51.jpg",
        "//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554146796096&di=835cc5cbb1d4c8923f87637e52a10654&imgtype=0&src=http%3A%2F%2Fpan.xici.com%2Fgroup5%2FM00%2F4B%2FCA%2FrBABqFvtOBCEfFuGAAAAAPsf94Q489.jpg%2F1010"
      ],
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
      ],
      hoverTarget: ""
    };
  },
  mounted() {
    this.scrollReveal.reveal(".reveal-top", {
      interval: 200,
      scale: 3
    });
  }
};
</script>

 <style lang="scss" scoped>
.abstract {
  height: 550px;
  position: relative;
  overflow: hidden;
  .swiper-slide > img {
    width: 100%;
    height: 550px;
  }
  .imgBox {
    position: absolute;
    right: 25%;
    width: 290px;
    top: 76px;
    z-index: 1000;
    img {
      animation-delay: 0.5s;
      width: 263px;
    }
    .banner__effect2 {
      color: white;
      animation-delay: 1s;
      font-size: 14px;
    }
  }
}
.skill {
  height: 150px;
  background-color: #262d38;
  z-index: 2500;
  position: relative;
  padding: 0px 15.79%;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 0;
  }
  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    cursor: pointer;
    img {
      width: 49px;
      height: 36px;
      margin-bottom: 20px;
    }
  }
  .selfImgClass {
    background: #ff3300;
    width: 200px;
    height: 200px;
    margin-top: -75px;
  }
}
</style>
