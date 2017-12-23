
<style scoped>
.active {
    margin-top: 70px;
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
    overflow: hidden;
    text-align: center;
}

.content .content_list {
    float: left;
    width: 30%;
    background: #ddd;
    margin: 20px;
    height: 150px;
}

.content .content_list .text {
    font-size: 16px;
    font-weight: bold;
}
</style>

<template>
    <div class="active">
        <div class="head">
            <span class="title">TITLE</span>
        </div>
        <div class="content">
            <div class="content_list" v-for="item in active" :key="item.id">
                <img :href="item.href">
                <div class="text">{{item.theme}}</div>
            </div>

        </div>

    </div>
</template>
<script>
import a from '../../image/logo.png';
export default {
    data() {
        return {
            active: [{
                id: 1,
                href: a,
                theme: "项目名称",
            },
            {
                id: 2,
                href: a,
                theme: "项目名称",
            }, {
                id: 3,
                href: a,
                theme: "项目名称",
            }]
        }
    },
    components: {
        props: {

        },
    },
    methods: {
    }
}
</script>
