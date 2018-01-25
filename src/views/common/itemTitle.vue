<template>
    
    <div class="head">
        <span class="title" >{{title.CHName}}
            <span>&nbsp;/&nbsp;{{title.ENName}}</span>
        </span>
    </div>

</template>
<script>
export default {
    props: {
        title:{
            type:Object,
            required:true
           }
    },
  data () {
      return {
          
      }
  }
}
</script>
<style scoped>

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

.title span {
font-weight: normal;;
    font-family: "Comic Sans MS", 'cursive', 'sans-serif'
}

</style>
