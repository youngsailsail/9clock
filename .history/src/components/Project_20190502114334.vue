<template>
   <div class="content">

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
    .content{
      
    }
</style>
