<template>
    <div class="even-summarry">
        <div class=" prediction-type container-fluid  flex-row just-space-between">
            <span>Prediction Type</span>
            <span>{{predictionEvent.type}}</span>
        </div>
    </div>
</template>
<script>
export default{
    name:'EventSummarry',
    props:{
        predictionEvent: Object
    }
}
</script>
<style scoped>
.event-summarry{
    width: 100%
}
</style>