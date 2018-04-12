<template>
        <div>
             <FeHead :isActive="isActive" :scroll="scroll" ></FeHead>
                <div id="demo">

                     敬请期待!

                </div>

        </div>
</template>
<script>
export default {
  data () {
      return {
        isActive:2,
        scroll:true
      }
  }
}
</script>
<style scoped>
    #demo{
        margin-top: 100px;
        text-align: center;
        font-size:20px;
        color:#969696;
    }
</style>
