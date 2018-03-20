<template>
  
    <div class="flisper">

        <div class="swiper-container" style="height:100%">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in flisper" :key="item.tag">
                    <img :src="item.src" alt="">
                    <div class="header">
                         <h4>{{item.title}}</h4>
                    </div>
                </div>

            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>

    </div>

</template>
<script>
import Swiper from '../../../../libs/swiper.min.js';

/* import p1 from '../../../image/IMG_4023.jpg'; */
/* import p2 from 'http://p5942h2x3.bkt.clouddn.com/IMG_7025.JPG';
import p3 from 'http://p5942h2x3.bkt.clouddn.com/IMG_4062.JPG'; */
export default {
     data() {
        return {
            mySwiper: "",
            flisper: [
                /* {
                    tag: 1,
                    title: "第一次分享会",
                    src: p1
                }, */
                {
                    tag: 2,
                    title: "Feddy线下分享会",
                    src: 'http://p5942h2x3.bkt.clouddn.com/IMG_7025.JPG'
                },
                {
                    tag: 3,
                    title: "Feddy线下分享会",
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

                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
            });
        })

    }
}
</script>
<style scoped>

@import '../../../../css/swiper.min.css';

.flisper {
    height: 550px;
    position: relative;
    overflow: hidden;
    margin-bottom: 70px;
}

.header{

    background: #fff;
    margin: auto;
    position: absolute;
    bottom: 0;
    width:100%;
    display: block;
    opacity: 0.6;
    padding: 20px;
    font-weight: bold;
}

h4 {

    font-size: 30px;
    opacity: 1;
}

.flisper img {
    position: absolute;
    top: -200px;
    width: 100%;
}

</style>
