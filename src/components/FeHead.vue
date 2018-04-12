<template>
    <div class="layout-ceiling" :class="{scroll:headerBg}" >

        <div class="layout-logo">
            <img :src="logo">
            <div class="title"> Feddy</div>
        </div>

        <div class="layout-ceiling-main">
            <li
            v-for="item in nav"
            :key ="item.name"
            :class='{"active":isActive == item.status}'>
                <a @click = "toPath(item.path)">{{item.name}}</a>
            </li>
        </div>
    </div>

</template>
<script>
import logo from '@images/logo.png'
export default {
    props: {
        isActive:{
            type:Number,
            required:true
        },
        scroll:{
            type:Boolean,
            required:true
        }
    },
    data () {
        return {
            logo,
            headerBg: this.scroll,
            nav:[
                {
                    status:0,
                    name: "首页",
                    path: "/"
                },
                 {
                    status: 1,
                    name: "博客",
                    path: "/blog"
                }, {
                    status: 2,
                    name: "线下活动",
                    path: "/party"
                }, {
                     status: 3,
                     name: "关于我们",
                     path: "/about"
                 }
            ]
        }
    },
    mounted () {
        window.addEventListener('scroll',this.scrollNav);
    },
    methods: {
        toPath(url){
            if(url === '/blog'){
                window.open('https://blog.feddy.org')
            }else if(url === '/about'){
                window.open('https://blog.feddy.org/about-feddy/')
            }else{
                this.$router.push(url);
                if(url === '/party'){
                    this.headerBg = true;
                }else{
                    this.headerBg = false;
                }
            }
        },
        scrollNav(){
            if(document.documentElement.scrollTop == 0){
                //网页被卷起来的高度
                this.headerBg = false;
            }else{
                this.headerBg = true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
/* 导航不位于最顶端 */
.layout-ceiling {
    background: transparent;
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    overflow: hidden;
    position: fixed;
    top:0;
    z-index: 999;
    width: 100%;
    .layout-logo {
        float: left;
        height: 100%;
        margin-left: 30px;
        padding: 5px;
        .title {
            color: #fff;
            font-size: 30px;
            position: absolute;
            display: inline-block;
            top: 0;
            left: 110px;
        }
    }
    .layout-logo img {
        height: 100%;
        margin: 0 10px;
    }
    &-main {
        float: right;
        margin-right: 15px;
        overflow: hidden;
        li{
            float: left;
            list-style: none;
            padding: 0 10px;
            &.active,
            &:hover{
                background: #ffb101;
                a{
                    color: #fff;
                }
            }
            a {
                color:#9ba7b5;
                display: inline-block;
                padding: 0 10px;
            }
        }
    }

    &.scroll{
        background: #464c5b;
        .layout-logo .title {
            color: #fff;
        }
        .layout-ceiling-main {
            li{
                a{
                    color: #fff;
                    display: inline-block;
                    padding: 0 10px;
                }
            }
            li.active,
            li:hover {
                background: rgba(1,1,1,0);
                a{
                    color: #ffb101;
                }
            }
        }
    }
}
</style>
