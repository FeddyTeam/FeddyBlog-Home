<template>
        <div>
             <ih-head :isActive="isActive" :scroll="scroll" ></ih-head>
                <div id="demo">
                    
                     敬请期待!
    
                </div> 

        </div>
</template>
<script>
import ihHead from "../../common/ihhead"
export default {
  components: {
      ihHead,
  },
  data () {
      return {
          isActive:2,
         scroll:false
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
