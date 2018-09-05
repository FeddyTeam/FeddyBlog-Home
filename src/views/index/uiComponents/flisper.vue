<template>
<div class="flisper">
  <div class="swiper-container" style="height:100%">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in flisper" :key="item.tag">
        <div class="imgDiv">
          <a :href="item.link || ''"><img :src="item.src" alt=""></a>
        </div>
        <h4>{{item.title}}</h4>
        <h3>{{item.subTitle}}</h3>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
      mySwiper: "",
      flisper: [{
          tag: 1,
          title: "Feddy-Team",
          subTitle: "—— —— 共同成长",
          src: 'https://image.feddy.org/timg.jpg',
          link: 'https://timemail.net/'
        },
        {
          tag: 2,
          title: "时光邮局",
          subTitle: '—— —— 写给未来',
          src: 'https://image.feddy.org/WechatIMG99.png'
        },
        {
          tag: 3,
          title: "第2次分享会",
          subTitle: "—— —— 薪火相传",
          src: 'https://image.feddy.org/IMG_4062.JPG'
        }
      ]
    }
  },
  methods: {

  },
  mounted() {
    this.$nextTick(() => {
      //轮播设置
      this.mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true
      });

    })

  }
}
</script>
<style scoped lang="less">
@import url("~@/theme/base.less");
.flisper {
  height: 550px;
  position: relative;
  overflow: hidden;
  margin-bottom: 70px;
  @media @mobile{
    height: 5rem;
    margin-bottom: .7rem;
  }
  img {
    opacity: 0.7;
    width: 100%;
    @media @mobile{
      height: 100%;
      width: auto;
    }
  }
  .imgDiv {
    position: absolute;
    width: 100%;
    top: -100px;
    background: rgba(0, 0, 0,1);
    @media @mobile{
      height: 100%;
      position: static;
    }
  }
}

h4 {
  color: #fff;
  font-size: 50px;
  position: absolute;
  top: 200px;
  left: 400px;
  text-align: center;
  @media @mobile{
    font-size: .5rem;
    top: 2rem;
    left: 1.5rem;
  }
}

h3 {
  color: #fff;
  font-size: 30px;
  opacity: 1;
  position: absolute;
  top: 300px;
  left: 600px;
  @media @mobile{
    font-size: .4rem;
    top: 3rem;
    left: 2.5rem;
  }
}
</style>
