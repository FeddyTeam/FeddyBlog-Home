<template>

    <div class="flisper">

        <div class="swiper-container" style="height:100%">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in flisper" :key="item.tag">
                    <div class="imgDiv">
                        <img :src="item.src" alt="">
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
/* import p1 from '@images/IMG_4023.jpg'; */
/* import p2 from 'http://p5942h2x3.bkt.clouddn.com/IMG_7025.JPG';
import p3 from 'http://p5942h2x3.bkt.clouddn.com/IMG_4062.JPG'; */
import p1 from  '@images/timg (2).jpg'
export default {
     data() {
        return {
            mySwiper: "",
            flisper: [
                 {
                    tag: 1,
                    title: "Feddy-Team",
                    subTitle:"—— —— 共同成长",
                    src: p1
                },
                {
                    tag: 2,
                    title: "第1次分享会",
                    subTitle:'—— —— 前端发展趋势',
                    src: 'http://p5942h2x3.bkt.clouddn.com/IMG_7025.JPG'
                },
                {
                    tag: 3,
                    title: "第2次分享会",
                    subTitle:"—— —— 薪火相传",
                    src: 'http://p5942h2x3.bkt.clouddn.com/IMG_4062.JPG'
                }
            ]
        }
    },
    methods: {

    },
    mounted() {
        this.$nextTick(()=>{
            //轮播设置
            this.mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay : 3000,
                pagination: '.swiper-pagination',
                paginationType: 'bullets',
                paginationClickable: true
            });

        })

    }
}
</script>
<style scoped>

.flisper {
    height: 550px;
    position: relative;
    overflow: hidden;
    margin-bottom: 70px;
}

h4 {
    color: #fff;
    font-size: 50px;
    opacity: 1;
    height: 50px;
    position: absolute;
    top: 0;
    margin: auto;
    bottom: 100px;
    right: 200px;
    left: 0;
    text-align: center;
}
h3{
    color: #fff;
    font-size: 30px;
    opacity: 1;
    height: 50px;
    position: absolute;
    top: 100px;
    margin: auto;
    bottom: 0;
    right: 0;
    left:150px;
    text-align: center;
}
.flisper .imgDiv{
    position: absolute;
    width: 100%;
     top: -100px;
    background:rgba(0,0,0);
}
.flisper img {
    opacity: 0.7;
    width: 100%;
}

</style>
