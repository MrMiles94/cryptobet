<template>
    <div class="my-bets flex-row wrap">
        <div class="card faint-background">
            <PredictionCategory category='sports'/>
            <span>Man-United will win 
            PSG tonight
            </span>
            <div class="bet-input">
               <div>
                   <label class="flex-row just-space-between"> Your prediction <span></span></label>
                   <div class="input-holder flex-row just-space-between faint-white-border">
                       <input type="text" placeholder="Yes-$2">
                   </div>
               </div>
               <div>
                   <label class="flex-row just-space-between"> 
                       Wallet Address
                    </label>
                   <div class="input-holder flex-row just-space-between faint-white-border">
                       <input type="text" placeholder="0x73948jwioe92023">
                   </div>
               </div>
            </div>
            <div class="bet-slip-summarry prediction-summarry">
                <button class="btn" @click="toggleSummarry">Summarry <i class="fa fa-caret-down"></i></button>
                <PredictionSummarry/>
            </div>
            <router-link 
            class="btn btn-block pale-blue-border predict-now" 
            to='/predictionmarket/event'
            >
            View Market Data
            </router-link>
        </div>
           
    </div>
</template>
<script>
import PredictionCategory from './PredictionCategory.vue'
import PredictionSummarry from './PredictionSummarry.vue'
    export default{
        name:'BetSlip',
        components:{
            PredictionCategory,
            PredictionSummarry
        }
    }
</script>
<style>
    .bet-slip{
        width: 30%;
        min-height: 200px;
    }
    .bet-slip-summarry{
    padding: 0px;
    margin: 0px;
    width: 100% !important;
    }
    .bet-slip-summarry>ul>li{
        margin: 4% 0px
    }
    .bet-slip-summarry>button{
        margin: 2% 0px;
        padding:0px;
    }
    .bet-input>div{
        margin: 6% 0px
    }
    .faint-background{
        background-color: #131320;
    }
</style>