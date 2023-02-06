<template>
    <div class=" time container-fluid flex-row just-space-between wrap">
            <span>Time left</span>
            <span>{{time.timeLeft+' hrs'}}</span>
            <div class="time-line">
                <div :style="{width: time.timeCount+'%'}"></div>
            </div>
        </div>
</template>
<script>
export default{
    name:'EventTime',
    props:{
        time:Object
    }
}
</script>
