<template>
    <div class="layout">
        <IhHead :isActive="isActive" :scroll="scroll"></IhHead>
        <flisper></flisper>

        <div class="main-body">
            <active></active>
            <project></project>
            <blog></blog>
        </div>
        <div class="layout-copy">
            2017-2018 &copy; Feddy-Team
        </div>
    </div>
</template>
<script>

import active from './uiComponents/active';
import flisper from './uiComponents/flisper';
import project from './uiComponents/project';
import blog from './uiComponents/blog';
export default {
    components: {
        active,
        project,
        flisper,
        blog
    },
    data () {
        return {
             isActive: 0,
             scroll:false
        }
    }

};
</script>
<style lang="less">
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
    text-decoration-line: underline;
    &:hover{
        color: #208db7;
    }
}

.content_item {
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
