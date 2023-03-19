<template>
    <div class=" time container-fluid flex-row just-space-between wrap">
            <span>Time left</span>
            <span>{{"Time here"}} Hrs</span>
            <div class="time-line">
                <div :style="{width: 25+'%'}"></div>
            </div>
        </div>
</template>
<script>
export default{
    name:'EventTime',
    data(){
        return {
            currentTime: Date()
        }
    },
    props:{
        time:Object
    }
}
</script>
