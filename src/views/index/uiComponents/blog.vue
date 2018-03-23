<template>
    <div class="blog">

        <itemTitle :title="title"></itemTitle>
        <div class="content">

            <Row :gutter="40">
                <Col span="14">
                <div class="item hotPage">
                    <h3 class="md-title">精选博文<span class="more" @click="window.open('https://blog.feddy.org','_blank')">更多&nbsp;>></span></h3>
                    <div v-for="item in pageObj" :key="item.id">
                        <span  @click="toBlog(item.url)" class="name">{{item.name}}</span>
                        <span class="info">{{item.author}}
                            <span class="time">{{item.time}}</span>
                        </span>
                    </div>
                </div>
                </Col>
                <Col span="10">
                <div class="item category">

                     <h3 class="md-title">文章分类</h3>
                    <span v-for="item in category" :key="item.name" @click="toBlog(item.url)">{{item.name}}</span>
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
        url: "https://blog.feddy.org/koa2ru-he-she-zhi-he-qing-chu-cookie/",
        time: "2017-12-06",
        author: "frank"
    }, {
        id: "2",
        name: "有趣的 CouchDB 和 PouchDB",
        url: "https://blog.feddy.org/funny-couchdb-and-pouchdb/",
        time: "2017-08-20",
        author: "Nulla"
    }, {
        id: "3",
        name: "使用Yeoman定制前端脚手架",
        url: "https://blog.feddy.org/shi-yong-yeomanding-zhi-qian-duan-jiao-shou-jia/",
        time: "2017-08-15",
        author: "Jake"
    }, {
        id: "4",
        name: "JavaScript 字符码和字节码转换",
        url: "https://blog.feddy.org/javascript-zi-fu-ma-he-zi-jie-ma-zhuan-huan/",
        time: "2017-07-28",
        author: "Nulla"
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
        name: "vue",
        url: "#"
    }, {
            name: "react",
            url: "#"
        }, {
        name: "http",
        url: "#"
    }, {
        name: "面试",
        url: "#"
    }]
    export default {
        components: {
            itemTitle,
        },
        methods: {
            toBlog(url){
                window.open(url, '_blank');;
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
    .more{
        margin: 0 30px;
    }
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
        height: 40px;
        line-height: 40px;
        margin: 0 30px;
        font-size: 16px;
        overflow: hidden;
        color:#8c8c8c;


    }

    .hotPage>div:hover {
        color:#6b6b6b;
        text-decoration: underline;
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
        cursor: pointer;
    }
    .category span:hover{
        background:#eee;
    }
</style>
