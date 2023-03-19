<template>
    <div v-for="event in events" :key="event.id"  class="prediction card">
        <PredictionCategory :category='event.category'/>
        <div class="headline container-fluid flex-row align-center">
        <img src="#" alt="t-p">
        <span>{{ event.title }}
        </span>
        </div>
        <EventTime :time='event.time'/>
        <hr>
        <div class=" volume container-fluid flex-row just-space-between">
            <span>Total Volume</span>
            <span>${{event.totalVolume}}</span>
        </div>
        <EventSummarry :predictionEvent="event"/>
        <router-link 
        class="btn btn-block pale-blue-border predict-now" 
        :to="`/betview:${event.id}`"
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
        computed:{
            events(){
                return this.$store.state.events
            }
        },
        components:{
            PredictionCategory,
            EventTime,
            EventSummarry
        }
    }
</script>
