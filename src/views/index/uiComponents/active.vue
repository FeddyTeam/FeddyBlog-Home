<template>
<div class="active">
  <itemTitle :title="title">
    <div class="more" v-if="!isMobile" @click="toParty()">更多&nbsp;>></div>
  </itemTitle>
  <div class="content">
    <Row :gutter="30">
      <Col :md="8" :sm="24" class="content_list" v-for="item in active" :key="item.id">
      <div class="content_item">
        <img :src="item.src">
        <div class="text">
          <div>{{item.theme}}</div>
        </div>
      </div>
      </Col>
    </Row>
  </div>
  <div class="mobile-btn" v-if="isMobile">
    <Button type="primary" icon="ios-more"  @click="toParty()">更多&nbsp;>></Button>
  </div>
</div>
</template>
<script>

import itemTitle from './itemTitle';
export default {
  components: {
    itemTitle,
  },
  data() {
    return {
      title: {
        CHName: "线下活动",
        ENName: "Activities",
        discribe: "定期组织分享会，帮助你们找到更好的自己"
      },
      active: [{
          id: 1,
          src: 'https://image.feddy.org/active1.png',
          theme: "前端发展趋势",
        },
        {
          id: 2,
          src: "https://image.feddy.org/active2.png",
          theme: "让我们共同成长",
        }, {
          id: 3,
          src: 'https://image.feddy.org/IMG_7025.JPG',
          theme: "学弟学妹，带你们飞！",
        }
      ]
    }
  },
  methods: {
    toParty() {
      this.$router.push('/party');
    }
  }
}
</script>


<style lang="less" scoped>
@import url("~@/theme/base.less");
.ivu-row{
  padding: 0 .3rem;
}
.mobile-btn{
  text-align: center;
}
.more{
  position: absolute;
  right: 30px;
  bottom: 0;
}
.content_item {
  @media @mobile{
    margin-bottom: .2rem;
  }
  &:hover {
    box-shadow: 0 5px 8px 2px #b6b6b6;
    animation: hover 0.5s 1;
    animation-fill-mode: both;
  }
  img {
    overflow: hidden;
    width: 100%;
  }
  .text {
    position: absolute;
    width: 100%;
    top: 0;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    background: #000;
    opacity: 0;
    &:hover {
      animation: text-hover 1s;
      animation-fill-mode: both;
    }
    div {
      margin: auto;
      position: absolute;
      height: 40px;
      line-height: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      color: #fff;
      @media @mobile{
        padding-left: .3rem;
      }
    }
  }
}

@keyframes hover {
  0% {}
  100% {
    transform: translate(0, -2px) scale(1.05, 1.05);
  }
}

@keyframes text-hover {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.3;
  }
}
</style>
