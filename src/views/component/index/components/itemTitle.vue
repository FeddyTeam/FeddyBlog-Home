<template>
    
    <div class="head">
        <span class="title" >{{title.CHName}}
            <span>&nbsp;/&nbsp;{{title.ENName}}</span>
        <div>{{title.discribe}}</div>
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
    margin-top:50px;
}

/* .head + *{
     margin-top: 70px;
     padding: 20px 50px;
} */
.head .title {
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    border-left: 4px solid #ffc800;
    padding: 5px 20px;
}

.title span {
font-weight: normal;;
    font-family: "Comic Sans MS", 'cursive', 'sans-serif'
}

.title>div{
    
  font-family: "Palatino Linotype", "Book Antiqua", "Palatino", "serif";
    margin: 5px 20px;
    font-size: 14px;
    font-weight: normal;
    color: #a2a2a2;
    text-align: left;

}

</style>
