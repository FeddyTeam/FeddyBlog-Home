<template>
<div class="layout-ceiling" :class="{scroll:headerBg,active:menuStatus}">
  <div class="menu" v-if="isMobile" @click="clickMenu"></div>
  <div class="layout-logo">
    <img src="https://image.feddy.org/logo.png">
    <div class="title">Feddy</div>
  </div>

  <div class="layout-ceiling-main">
    <li v-for="item in nav" :key="item.name" :class='{"active":isActive == item.status}'>
      <a @click="toPath(item.path)">{{item.name}}</a>
    </li>
  </div>
</div>
</template>
<script>
// import logo from 'https://image.feddy.org/logo.png'
export default {
  props: {},
  data() {
    return {
      // logo,
      isActive: '',
      headerBg: true,
      menuStatus: false,
      nav: [{
          status: 0,
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
  methods: {
    clickMenu() {
      this.menuStatus = !this.menuStatus
    },
    toPath(url) {
      this.clickMenu()
      if (url === '/blog') {
        window.open('https://blog.feddy.org')
      } else if (url === '/about') {
        window.open('https://blog.feddy.org/about-feddy/')
      } else {
        this.$router.push(url);
        if (url === '/party') {
          this.headerBg = true;
        } else {
          this.headerBg = false;
        }
      }

      this.changeMenuActive()
    },
    changeMenuActive() {
      this.isActive = this.nav.findIndex(item=>{
        return item.path == this.$route.path
      })
    },
    scrollNav() {
      if (document.documentElement.scrollTop == 0) {
        //网页被卷起来的高度
        this.headerBg = false;
      } else {
        this.headerBg = true;
      }
    }
  },
  mounted() {
    this.changeMenuActive()
    if(this.$route.path=='/'){
      this.headerBg = false
    }
    if (!this.isMobile) {
      window.addEventListener('scroll', this.scrollNav);
    }
  },
}
</script>

<style lang="less" scoped>
@import url("~@/theme/base.less");
/* 导航不位于最顶端 */
.layout-ceiling {
    background: transparent;
    height: 55px;
    line-height: 55px;
    font-size: 16px;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    @media @mobile {
        position: fixed;
        top: 0;
        left: -5rem;
        width: 5rem;
        height: 100%;
        background: #464c5b;
        overflow: visible;
        transition: all .3s;
        &.active{
          left: 0;
          .menu{
            right: 0;
          }
          .menu:before {
              top: .42rem;
              box-shadow: none;
              transform: rotate(225deg);
              background: #000;
          }
          .menu:after {
              bottom: .42rem;
              transform: rotate(135deg);
              background: #000;
          }
        }
    }
    .layout-logo {
        float: left;
        height: 100%;
        margin-left: 30px;
        padding: 5px;
        @media @mobile {
            height: 1rem;
            margin: 0.2rem 0;
            float: none;
        }
        img {
            height: 100%;
            margin: 0 10px;
            @media @mobile {
                margin: 0 0.2rem;
                vertical-align: middle;
            }
        }
        .title {
            color: #fff;
            font-size: 30px;
            position: absolute;
            display: inline-block;
            top: 0;
            left: 110px;
            @media @mobile {
                position: static;
                vertical-align: middle;
            }
        }
    }
    &-main {
        float: right;
        margin-right: 15px;
        overflow: hidden;
        @media @mobile {
            float: none;
        }
        li {
            float: left;
            list-style: none;
            padding: 0 10px;
            @media @mobile {
                float: none;
            }
            &.active,
            &:hover {
                background: #ffb101;
                a {
                    color: #fff;
                }
            }
            a {
                color: #9ba7b5;
                display: inline-block;
                padding: 0 10px;
                @media @mobile{
                  display: block;
                }
            }
        }
    }

    &.scroll {
        background: #464c5b;
        .layout-logo .title {
            color: #fff;
        }
        .layout-ceiling-main {
            li {
                a {
                    color: #fff;
                    display: inline-block;
                    padding: 0 10px;
                }
            }
            li.active,
            li:hover {
                background: rgba(1,1,1,0);
                a {
                    color: #ffb101;
                }
            }
        }
    }
    .menu {
        width: 1rem;
        height: 1rem;
        transition: right 1s;
        transform: scale(.6);
        position: absolute;
        right: -1.2rem;
        top: 0;
    }
    .menu:after,
    .menu:before {
        content: "";
        display: block;
        width: 1rem;
        height: .16rem;
        background: #363B47;
        border-radius: .08rem;
        position: absolute;
        left: 0;
        transition: all,color 0.15s ease-in-out;
    }
    .menu:before {
        top: .05rem;
        box-shadow: 0 .37rem #363B47;
    }
    .menu:after {
        bottom: .05rem;
    }
}
</style>
