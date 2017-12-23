<style>

body {
    min-width: 1000px;
}

</style>

<style scoped>
@import '../css/swiper.min.css';
body{
    min-width:1000px;
}
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-header {
    height: 128px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}



.flisper {
    height: 400px;
    position: relative;
}

h4 {

    font-size: 30px;
    margin: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
}

.flisper img {

    height: 100%;
    width: 100%;
}
</style>

<template>
    <div class="layout">
        <ih-head></ih-head>
        <div class="flisper">

            <div class="swiper-container" style="height:100%">
                <div class="swiper-wrapper">
                     <div class="swiper-slide"  v-for="item in flisper" :key="item.tag">
                        <img :src="item.src" alt="">
                        <h4>{{item.title}}</h4>
                    </div> 

                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>

        </div>

        <div class="main-body">
            <active></active>
            <project></project>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
import Swiper from '../libs/swiper.min.js';
import a from '../image/logo.png';
import ihHead from '../common/ihhead';

import active from './component/active';
import project from './component/project';
export default {
    components: {
        ihHead,
        active,
        project
    },
    data() {
        return {
            mySwiper: "",
            flisper: [
                {
                    tag: 1,
                    title: "第一次分享会",
                    src: a
                },
                {
                    tag: 2,
                    title: "第2次分享会",
                    src: a
                },
                {
                    tag: 3,
                    title: "第3次分享会",
                    src: a
                }
            ]
        }
    },
    methods: {

    },
    mounted() {
        console.log('mounted', this);
        this.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 如果需要滚动条
           // scrollbar: '.swiper-scrollbar',
        });
        /* var swiper1 = new Swiper('#swiper1');
        var swiper2 = new Swiper('#swiper2');
        var swiper3 = new Swiper('#swiper3'); */
    }
};
</script>
