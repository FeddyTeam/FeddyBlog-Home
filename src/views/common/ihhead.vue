<style>

.layout-ceiling {
    background: #464c5b;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    overflow: hidden;
}

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
    top: 5px;
    left: 120px;
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


</style>

<template>

    <div class="layout-ceiling">

        <div class="layout-logo">
            <img src="../../image/logo.png">
            <div class="title"> Feddy</div>
        </div>

        <div class="layout-ceiling-main">
            <li 
            v-for="item in nav" 
            :key ="item.name" 
            :class='{"active":isActive ==item.status}'>
            <a @click="$router.push({name:item.path})">{{item.name}}</a>
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
        }
    },
    data () {
        return {
           
            nav:[
                {
                    status:0,
                    name: "首页",
                    path: "./index"
                },
                 {
                    status: 1,
                    name: "博客",
                    path: "./blog"
                }, {
                    status: 2,
                    name: "线下活动",
                    path: "./active"
                }, {
                     status: 3,
                     name: "关于我们",
                     path: "https://feddy.org/about-feddy/"
                 }
            ]
               
            
        }
    }
}
</script>
