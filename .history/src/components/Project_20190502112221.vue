<template>
   <div>
    <section class="abstract">
     <div class="imgBox">
     <img class="effect-1 animated  lightSpeedIn" src="../static/effect-1.png" alt="">
       <div class="banner__effect2 animated  lightSpeedIn">
                桂林九点党科技有限责任公司是全国专业的互联网信息化解决方案供应商。专注互联网科学技术研发与创新，致力于为各领域客户拥抱互联网提供最专业最高效的产品和服务。
     </div>
      </div>
  </section>
  <section class="skill">
      <ul>
          <li v-for="(skill,index) in skills" :key="skill.id" class="animated lightSpeedIn"
          :style="{'animation-delay':index * 0.5 + `s`}">
              <img :src="skill.iconUrl">
              {{skill.label}}
          </li>
      </ul>
  </section>
   </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [{
        label: '网站设计开发',
        iconUrl: require('../static/icon-1.png'),
        id: 'website',
      }, {
        label: '信息系统集成与维护',
        iconUrl: require('../static/icon-2.png'),
        id: 'system',
      }, {
        label: '微信小程序开发',
        iconUrl: require('../static/icon-3.png'),
        id: 'smallProgram',
      }, {
        label: '软件定制开发',
        iconUrl: require('../static/icon-4.png'),
        id: 'software',
      }, {
        label: '企业品牌设计',
        iconUrl: require('../static/icon-5.png'),
        id: 'brand',
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
.abstract{
  height: 550px;
  background: url('//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554146796096&di=835cc5cbb1d4c8923f87637e52a10654&imgtype=0&src=http%3A%2F%2Fpan.xici.com%2Fgroup5%2FM00%2F4B%2FCA%2FrBABqFvtOBCEfFuGAAAAAPsf94Q489.jpg%2F1010') no-repeat;
   background-size:cover;
  display: flex;
  align-items: center;
  .imgBox{
      margin-left:60%;
      width: 290px;
      top:74px;
      img{
          animation-delay:.5s;
            width: 263px;
      }
      .banner__effect2{
          padding: 10px;
          color: white;
          animation-delay:1s;
      }
  }
}
.skill{
    height: 150px;
    background-color: #262d38;
    z-index: 1000;
    ul{
        height: 100%;
        display: flex;
        justify-content: space-around;
        color:white;
        padding:0;
    }
    li{
        height: 100%;
        display: flex;
        flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 150px;
       img{
           width: 50px;
           height: 50px;
           margin-bottom: 20px;
       }
    }
}
</style>
