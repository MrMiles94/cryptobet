<template>
    <div class="category">
        <span> Active Market</span> <span>{{category}}</span>
    </div>
</template>
<script>
export default {
    name:"PredictionCategory",
    props:{
        category:String
    }
}
</script>
