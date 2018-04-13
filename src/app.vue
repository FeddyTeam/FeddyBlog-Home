<template>
<div id="app">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>
<script>
export default {};
</script>
<style lang="less">
@import url("~@/theme/base.less");
html{
  @media @mobile{
    font-size: (100vw/7.5);
  }
}
</style>
