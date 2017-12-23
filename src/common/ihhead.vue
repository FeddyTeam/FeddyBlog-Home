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

.layout-ceiling-main a {
    color: #9ba7b5;
    display: inline-block;
    padding: 0 10px;
}

.layout-ceiling-main a.active,
.layout-ceiling-main a:hover {
    color: #ffc800;
}

</style>

<template>

    <div class="layout-ceiling">

        <div class="layout-logo">
            <img src="../image/logo.png">
            <div class="title"> Feddy</div>
        </div>

        <div class="layout-ceiling-main">
            <a href="#">首页</a> |
            <a href="#">博客</a> |
            <a href="#">线下活动</a> |
            <a href="#">关于我们</a>
        </div>
    </div>
  
</template>
<script>
export default {
    
}
</script>
