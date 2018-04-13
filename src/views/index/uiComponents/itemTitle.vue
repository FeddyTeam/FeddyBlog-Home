<template>
<div class="head">
  <div class="title">
    <div>
      <span>{{title.CHName}}</span>
      <span>&nbsp;/&nbsp;{{title.ENName}}</span>
    </div>
    <div class="discribe">{{title.discribe}}</div>
  </div>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    title: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="less">
@import url("~@/theme/base.less");;
.head {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  position: relative;
  @media @mobile{
    margin-top: .5rem;
    margin-bottom: .2rem;
  }
  .title {
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    border-left: 4px solid #ffc800;
    padding: 5px;
    width: 350px;
    @media @mobile{
      font-size: .32rem;
      width: 6rem;
    }
    .discribe {
      font-family: "Palatino Linotype", "Book Antiqua", "Palatino", "serif";
      margin: 5px 20px;
      font-size: 14px;
      font-weight: normal;
      color: #a2a2a2;
      @media @mobile{
        font-size: .28rem;
      }
    }
    span {
      font-weight: normal;
      font-family: "Comic Sans MS", 'cursive', 'sans-serif';
    }
  }
}
</style>
