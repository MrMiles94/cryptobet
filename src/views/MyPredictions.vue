<template>
    <div class="prediction-market container flex-col align-center">
        <router-view></router-view>
        <div class="my-prediction flex-col align-center">
            <CustomSearch/>
            <MarketFilters/>
            <div class="container time-display flex-row just-space-between align-center">
                <span>This Week</span>
                <router-link to="/predictionmarket" class="link btn-blue-fill">
                    See All
                </router-link>
            </div>
            <BetSlip v-if="this.bet"/>
            <NoBet v-else/>    
        </div>
        
    </div>
</template>
<script>
import CustomSearch from '../components/CustomSearch.vue'
import MarketFilters from '../components/MarketFilters.vue';
import BetSlip from '../components/BetsSlip.vue'
import NoBet from '../components/NoBet.vue'
export default {
    Name: 'MyPrediction',
    data(){
        return{
            bet:true
        }
    },
    components:{
        MarketFilters,
        CustomSearch,
        BetSlip,
        NoBet
    }
}
</script>
