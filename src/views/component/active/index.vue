<template>
        <div>
           
    
    <ih-head :isActive="isActive"></ih-head>


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
          isActive:2
      }
  }
}
</script>
