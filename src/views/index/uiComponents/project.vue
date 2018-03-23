<template>
    <div class="project">
        <itemTitle :title="title"></itemTitle>
        <div class="content">

            <Row :gutter="20">
                <Col class="content_list" v-for="item in project" :key="item.id" span="6">
                    <div class="content_item"  @click="toProject(item.href)">
                        <img :href="item.href">
                        <div class="text">
                            <h4>{{item.theme}}</h4>
                            <div>{{item.describe}}</div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
        <div class="more" @click="toGithub()">更多&nbsp;>></div>
    </div>
</template>
<script>

import itemTitle from './itemTitle';

var project = [{
        id: 1,
        href: 'https://github.com/FeddyTeam/tongbu.fun',
        describe: "无需登录的文字同步平台",
        theme: "同步Fun！",
        color: "#a3e2f0"
    },
    {
        id: 2,
        href: "https://github.com/FeddyTeam/tongbu.fun",
        describe: "vue + ghost  搭建官网",
        theme: "Feddy博客",
        color: "#f2c7c7"
    }, {
        id: 3,
        href: "https://github.com/FeddyTeam/tongbu.fun",
        describe: "let's play together",
        theme: "Feddy线下活动管理平台",
        color: "#c8c9f0"
    }, {
        id: 4,
        href: "https://github.com/FeddyTeam/tongbu.fun",
        describe: "待办事项管理平台",
        theme: "TodoList",
        color: "#ecde74"
    }
    ]
export default {

    components: {
        itemTitle
    },
    data() {
        return {
            title: {
                CHName: "开源项目",
                ENName: "OpenSourse",
                 discribe: "来呀，快活呀，反正有，大把时光"
            },

            project: project
        }
    },

    methods: {
        toGithub(){
            window.open("https://github.com/FeddyTeam", '_blank');
        },
        toProject(href){
            window.open(href, '_blank');

        }
    }
}
</script>


<style lang="less" scoped>

@keyframes hover {
    0%{}
    100%{
        transform: translate(0, -2px) scale(1.05, 1.05);
    }
}

.content_item{
    position: relative;
    overflow: hidden;
    height: 180px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    .text {
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
       h4{
           font-size: 20px;
            font-weight: bold;
            margin: 10px 0;
       }
   }
   &:hover {
       box-shadow: 0 5px 8px 2px #b6b6b6;
       animation: hover .5s;
       animation-fill-mode:forwards;
   }
   .content_list:nth-child(1) &{
       background: #ffabab;
   }

   .content_list:nth-child(2) &{
       background: #7dd0e3;
   }

   .content_list:nth-child(3) &{
       background: #b0b2ed;
   }

   .content_list:nth-child(4) &{
       background: #e9d547;
   }
}

</style>
