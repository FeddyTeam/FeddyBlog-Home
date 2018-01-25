<style>

body {
    min-width: 1000px;
}

.more {
    font-weight: normal;
    float: right;
    text-align: right;
    margin: 0 80px;
    cursor: pointer;
    color: #949494;
    font-size: 14px;
    -webkit-text-decoration-line: underline;
    -moz-text-decoration-line: underline;
    text-decoration-line: underline;

}


.more:hover{
    
 color: #208db7;

}


.content_list {
    position: relative;
    overflow: hidden;
    height: 180px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
}

.content {
 
 margin-top: 30px;
 padding: 20px 80px;

}


</style>

<style scoped>

body{
    min-width:1000px;
}
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-header {
    height: 128px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}



</style>

<template>
    <div class="layout">
        <ih-head :isActive="isActive"></ih-head>
        <flisper></flisper>
       
        <div class="main-body">
            <active></active>
            <project></project>
            <blog></blog>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>


import ihHead from '../../common/ihhead';

import active from './components/active';
import flisper from './components/flisper';
import project from './components/project';
import blog from './components/blog';
export default {
    components: {
        ihHead,
        active,
        project,
        flisper,    
        blog
    },
    data () {
        return {
             isActive: 0,
        }
    }
 
};
</script>
