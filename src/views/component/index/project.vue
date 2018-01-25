
<style scoped>
.project {
    margin-top: 70px;
    padding: 0 50px;
}

.head {
    text-align: center;
}

.head .title {
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    border-left: 4px solid #ffc800;
    padding: 10px 20px;
}

.content {
    padding: 20px 30px;
}





.content_list:hover {
 box-shadow: 0 5px 8px 2px #b6b6b6;
 -webkit-animation-name:hover;
 -webkit-animation-duration:0.5s;
 -webkit-animation-iteration-count: 1;
-webkit-animation-fill-mode:forwards;

}

@keyframes hover {
    0%{}
    100%{    
        -webkit-transform: translate(0, -3px) scale(1.05, 1.05);
        -moz-transform: translate(0, -2px) scale(1.05, 1.05);
        transform: translate(0, -2px) scale(1.05, 1.05);
    }
}

.content_list:nth-child(1) {
    background: #ffabab;
}

.content_list:nth-child(2) {
    background: #7dd0e3;
}

.content_list:nth-child(3) {
    background: #b0b2ed;
}

.content_list:nth-child(4) {
    background: #e9d547;
}




.content_list .text {
     font-size: 14px; 
    color:#fff;
    height: 70px;
    /* line-height: 50px; */
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    vertical-align: middle;
}
.content_list .text h4{
    font-size: 20px;
     font-weight: bold;
     margin: 10px 0;
}
</style>

<template>
    <div class="project">
        <itemTitle :title="title"></itemTitle>
        <div class="content">

            <Row :gutter="20">
                <Col v-for="item in project" :key="item.id" span="6">
                <div class="content_list" :style="{background:item.color}">
                    <img :href="item.href">
                    <div class="text">
                        <h4>{{item.theme}}</h4>
                        <div>{{item.describe}}</div>
                        </div>
                </div>
                </Col>
            </Row>

        </div>
        <div class="more">更多&nbsp;>></div>
    </div>
</template>
<script>
import a from '../../../image/logo.png';
import itemTitle from '../../common/itemTitle';
export default {

    components: {
        itemTitle
    },
    data() {
        return {
            title: {
                CHName: "开源项目",
                ENName: "OpenSourse",
            },
            project: [{
                id: 1,
                href: a,
                describe:"无需登录的文字同步平台",
                theme: "同步Fun！",
                color: "#7dd0e3"
            },
            {
                id: 2,
                href: a,
                 describe: "",
                theme: "Feddy博客",
                color: "#ffabab"
            }, {
                id: 3,
                href: a,
                describe:"Feddy线下活动管理平台",
                theme: "play together",
                color: "#b0b2ed"
            }, {
                id: 4,
                href: a,
                describe:"待办事项管理平台",
                theme: "TodoList",
                color: "#e9d547"
            }
            ]
        }
    },

    methods: {
    }
}
</script>
