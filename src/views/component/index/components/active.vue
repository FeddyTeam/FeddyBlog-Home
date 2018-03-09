
<style scoped>


.content_item img{
    overflow: hidden;
    width: 100%;
}
.content_item:hover {
    box-shadow: 0 5px 8px 2px #b6b6b6;
    -webkit-animation-name: hover;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: both;
}

@keyframes hover {
    0% {}
    100% {
        -webkit-transform: translate(0, -3px) scale(1.05, 1.05);
        -moz-transform: translate(0, -2px) scale(1.05, 1.05);
        transform: translate(0, -2px) scale(1.05, 1.05);
    }
}


.content_item .text{
    position: absolute;
    width: 100%;
    top:0;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    background: #000;
    opacity:0;

}
.content_item .text:hover{
    -webkit-animation-name:text-hover;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both;
}
@keyframes text-hover {
    from{
        opacity:0;
    }to{
        opacity:0.3;
    }
}
.content_item .text div{
    margin: auto;
    position: absolute;
    height: 40px;
    line-height: 40px;
    left: 0;
    right: 0;
    bottom:0;
    top:0;
    color:#fff;
}



</style>

<template>
    <div class="active">
        <itemTitle :title = "title"></itemTitle>
        <div class="content">
            <Row :gutter="30">
                <Col class="content_list"v-for="item in active" :key="item.id" span="8">
                <div class="content_item">
                    <img :src="item.src">
                    <div class="text">
                        <div>{{item.theme}}</div>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    <div class="more" @click="$router.push('/party')">更多&nbsp;>></div>

    </div>
</template>
<script>
/* import a from "../../../image/logo.png" */
 let pic = [
     'http://upload-images.jianshu.io/upload_images/2865721-283860273314f22c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
     "http://upload-images.jianshu.io/upload_images/2865721-b7c651e8e40549bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    '../../../image/IMG_4023.jpg'
 ]
 import pic1 from "../../../../image/IMG_4023.jpg"
import itemTitle from './itemTitle';
export default {
    components: {
        itemTitle,
    },
    data() {
        return {
            title:{
                CHName:"线下活动",
                ENName:"Activities",
                discribe:"定期组织分享会，帮助你们找到更好的自己"
            },
            active: [{
                id: 1,
                src: pic[0],
                theme: "前端发展趋势",
            },
            {
                id: 2,
                src:  pic[1],
                theme: "让我们共同成长",
            }, {
                id: 3,
                src:  pic1,
                theme: "学弟学妹，带你们飞！",
            }]
        }
    },
    methods: {
    }
}
</script>
