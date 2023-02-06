<template>
    <div class="waterMark flex-row just-space-between">
        <div class="partition">
            <water-mark/>
        </div>
        <div class="partition">
            <water-mark/>
        </div>
    </div>
</template>
<script>
import WaterMark from './WaterMark.vue'
export default {
   name:'WaterMarkHolder',
   components:{
       WaterMark
   } 
}
</script>
<style>
.waterMark{
    width: 100%;
    height:0px;
    position: absolute;
    z-index: 1
}
.partition{
    width: 35%;
    height: 500px;
}
.partition>div:first-child{
    background-position: 40% 80%
}
</style>