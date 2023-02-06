<template>
    <div class="no-bet box flex-col just-center align-center">
        <div class="no-bet-image-box flex-col just-center align-center">
        </div>
        <p>Sorry you don't have any bet for now!</p>
            <router-link class="btn blue-border" to='/predictionmarket'>
            Goto Market
        </router-link>
    </div>
</template>
<script>
    export default{
        name:'NoBet'
    }
</script>
