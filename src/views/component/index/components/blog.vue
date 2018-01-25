<template>
    <div class="blog">

        <itemTitle :title="title"></itemTitle>
        <div class="content">

            <Row :gutter="40">
                <Col span="14">
                <div class="item hotPage">
                    <h3 class="md-title">精选博文<span class="more">更多&nbsp;>></span></h3>
                    <div v-for="item in pageObj" :key="item.id">
                        <span :href="item.url" class="name">{{item.name}}</span>
                        <span class="info">{{item.author}}
                            <span class="time">{{item.time}}</span>
                        </span>
                    </div>
                </div>
                </Col>
                <Col span="10">
                <div class="item category">

                     <h3 class="md-title">文章分类</h3>
                    <span v-for="item in category" :key="item.name" @click="toBlog(item)">{{item.name}}</span>
                </div>
                </Col>
            </Row>

        </div>
    </div>
</template>
<script>
    import itemTitle from "./itemTitle"
    let pageObj = [{
        id: "1",
        name: "koa2如何设置和清除cookie？",
        url: "#",
        time: "2018-01-02",
        author: "TRY"
    }, {
        id: "1",
        name: "有趣的 CouchDB 和 PouchDB",
        url: "#",
        time: "2018-01-02",
        author: "Luise"
    }, {
        id: "1",
        name: "使用Yeoman定制前端脚手架",
        url: "#",
        time: "2018-01-02",
        author: "Jake"
    }];
    let category = [{
        name:"javescript",
        url:"#"
    }, {
        name: "Java",
        url: "#"
    }, {
        name: "nodeJs",
        url: "#"
        }, {
        name: "css/html",
        url: "#"
    }, {
        name: "ES6",
        url: "#"
    }, {
            name: "ES6",
            url: "#"
        }, {
        name: "ES6",
        url: "#"
    }, {
        name: "ES6",
        url: "#"
    }]
    export default {
        components: {
            itemTitle,
        },
        methods: {
            toBlog(item){

            }
        },
        data() {
            return {
                pageObj: pageObj,
                category: category,
                title: {
                    CHName: "博客文章",
                    ENName: "Blog",
                    discribe: "这里是思维的碰撞，这里有灵感的火花"
                }
            }
        }
    }
</script>

<style scoped>
    .content {
        min-height: 150px;
    }

    .content .item {
        border-radius: 8px;
        border: 1px solid #ddd;
        min-height: 150px;
            padding: 20px 5px;
    }

    .item h3 {

        font-size: 16px;
        height: 35px;
        line-height: 35px;
        margin: 10px 20px;
        padding: 0 0 10px 10px;
        border-left: 3px solid #6b6b6b;

    }



    .hotPage>div{
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        margin: 0 30px;
        font-size: 14px;
        overflow: hidden;
        color:#6b6b6b;

    }
    .hotPage .info{
        float: right;
        color:#a4a4a4;
    }
    .hotPage .time{
        margin:0 20px;
    }


    .category span{
        display: inline-block;
        font-size: 14px;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;

    }
</style>
