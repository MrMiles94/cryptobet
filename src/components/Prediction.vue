<template>
    <div class="prediction card">
        <PredictionCategory category='Sports'/>
        <div class="headline container-fluid flex-row align-center">
        <img src="#" alt="t-p">
        <span>Man-United wil win 
            PSG tonight
        </span>
        </div>
        <EventTime :time='predictions.time'/>
        <hr>
        <div class=" volume container-fluid flex-row just-space-between">
            <span>Total Volume</span>
            <span>{{'$'+predictions.totalVolume}}</span>
        </div>
        <EventSummarry :predictionEvent="predictions"/>
        <router-link 
        class="btn btn-block pale-blue-border predict-now" 
        to='/predictionmarket/prediction'
        >
        Predict Now
        </router-link>
    </div>
    <div class="prediction card">
        <PredictionCategory category='Sports'/>
        <div class="headline container-fluid flex-row align-center">
        <img src="#" alt="t-p">
        <span>Man-United wil win 
            PSG tonight
        </span>
        </div>
        <EventTime :time='predictions.time'/>
        <hr>
        <div class=" volume container-fluid flex-row just-space-between">
            <span>Total Volume</span>
            <span>{{'$'+predictions.totalVolume}}</span>
        </div>
        <EventSummarry :predictionEvent="predictions"/>
        <router-link 
        class="btn btn-block pale-blue-border predict-now" 
        to='/predictionmarket/prediction'
        >
        Predict Now
        </router-link>
    </div>
    <div class="prediction card">
        <PredictionCategory category='Sports'/>
        <div class="headline container-fluid flex-row align-center">
        <img src="#" alt="t-p">
        <span>Man-United wil win 
            PSG tonight
        </span>
        </div>
        <EventTime :time='predictions.time'/>
        <hr>
        <div class=" volume container-fluid flex-row just-space-between">
            <span>Total Volume</span>
            <span>{{'$'+predictions.totalVolume}}</span>
        </div>
        <EventSummarry :predictionEvent="predictions"/>
        <router-link 
        class="btn btn-block pale-blue-border predict-now" 
        to='/predictionmarket/prediction'
        >
        Predict Now
        </router-link>
    </div>
</template>
<script>
import PredictionCategory from './PredictionCategory.vue'
import EventTime from './EventTime.vue'
import EventSummarry from './EventSummarry'
    export default{
        name:'SinglePrediction',
        data() {
            return {
                predictions:{
                    time:{
                        timeStart: 200,
                        timeEnd:400,
                        timeLeft: new Date().getSeconds(),
                        timeCount:((400-200-80)/(400-200))*100
                    },
                    type:'Yes / No',
                    totalVolume:5000,
                    stake:{
                        amount:Number,
                        prediction:String,
                        APR:Number
                    },
                    reward:{
                        potential:Number,
                        reward:Number
                    },
                    networkFee:Number,
                    sharesBought:Number
                }
            }
        },
        components:{
            PredictionCategory,
            EventTime,
            EventSummarry
        }
    }
</script>
