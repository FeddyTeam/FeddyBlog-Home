<style>

/* 导航不位于最顶端 */
.layout-ceiling {
    background: #464c5b;
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    overflow: hidden;
    position: fixed;
    top:0;
    z-index: 999;
    width: 100%;
}

/* .layout-ceiling + *{
    margin-top:55px;
}
 */
.layout-ceiling .layout-logo {
    float: left;
    height: 100%;
    margin-left: 30px;
    padding: 5px
}

.layout-ceiling .layout-logo .title {

    color: #fff;
    font-size: 30px;
    position: absolute;
    display: inline-block;
    top: 0;
    left: 110px;
}

.layout-ceiling .layout-logo img {
    height: 100%;
    margin: 0 10px;
}

.layout-ceiling-main {
    float: right;
    margin-right: 15px;
    overflow: hidden;
}

.layout-ceiling-main li{
    float: left;
    list-style: none;
    padding: 0 10px;
}
.layout-ceiling-main li.active,
.layout-ceiling-main li:hover{
    background: #ffb101;
}

.layout-ceiling-main li a {
    color:#9ba7b5;
    display: inline-block;
    padding: 0 10px;
}

.layout-ceiling-main .active a,
.layout-ceiling-main li a:hover
{
    color:#fff;
}


/* 导航位于顶端 */

 .layout-ceiling.scroll{
    background: rgba(70,76,91,0);
}

.scroll.layout-ceiling .layout-logo .title {
    color: #fff;
}



.scroll .layout-ceiling-main li.active,
.scroll .layout-ceiling-main li:hover {
    background: rgba(1,1,1,0);
}

.scroll .layout-ceiling-main li a {
    color: #fff;
    display: inline-block;
    padding: 0 10px;
}

.scroll .layout-ceiling-main .active a,
.scroll .layout-ceiling-main li a:hover {
    color: #ffb101;
}


</style>

<template>

    <div class="layout-ceiling" :class="{scroll:scroll}" >

        <div class="layout-logo">
            <img src="../../image/logo.png">
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
            scroll: true,
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
        window.addEventListener('scroll',navScroll());
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
                    this.scroll = false;
                }else{
                    this.scroll = true;
                }
            }
        },
        scrollNav(){
            console.log('scrolling..');
            if(document.documentElement.scrollTop == 0){
                //网页被卷起来的高度
                this.scroll = true;
            }else{
                this.scroll = false;
            }
        }
    }
}
</script>
