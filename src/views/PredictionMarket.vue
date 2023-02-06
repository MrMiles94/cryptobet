<template>
<div class="prediction-market container flex-col align-center">
    <ModalOverlay/>
    <h1>Explore, and enter any active market of your choice.</h1>
    <hr>
    <div class="search-area flex-row just-space-between">
        <div class="search-bar flex-row align-center">
            <div class="search-icon"></div>
            <input type="text" name="search" placeholder="Search for market by name or by category" >
        </div>
        <select name="Liquidity" id="Liquidity">
            <option value="Liquid">Liquidity</option>
            <option value="Volotile">Volotile</option>
            <option value="Non-volotile">Non-volotile</option>
        </select>
    </div>
    <MarketFilters/>
    <div class="container predictions-container flex-row align-center  just-space-between wrap">
        <SinglePrediction/>
    </div>
</div>
</template>
<script>
import SinglePrediction from '../components/Prediction.vue'
import ModalOverlay from '../components/ModalOverlay'
import MarketFilters from '../components/MarketFilters.vue'
export default{
    components:{
        SinglePrediction,
        ModalOverlay,
        MarketFilters
    }
}
</script>
<style scoped>
hr{
    width: 100%;
    border:0px solid var(--blue-gray);
    border-bottom-width: 1px;
    margin: 4% 0%;
}
</style>