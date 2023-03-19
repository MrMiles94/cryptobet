<template>
    <div class="container">
        <BackButton dirTo="Prediction Market" dirFrom="politics" link="/predictionmarket"/>
        <div class="flat-box">
            <div class="container bet-view flex-row">
                <img src="" alt="">
                <div class="container">
                    <PredictionCategory  class="pad-slip" category="Movies"/>
                    <div class="title-holder flex-row">
                        <div class="title-header">
                            <img src="" alt="">
                        </div>
                        <div class="container-fluid flex-row">
                            <div class="page-title">
                                <h1>
                                    Teen TV series award of the year will go to?
                                </h1>
                                <p>
                                    From the nominated series, one will be winning the series of the year. Which one will it be? Make your prediction,
                                </p>
                                <div class="footings flex-row align-center just-space-between">
                                    <span>Total share volume:  <b>$50,000</b></span>
                                    <span>Prediction type:  <b>Multiple</b></span>
                                    <div class="flex-row align-center">
                                        <img v-for="user in users" 
                                        :key="user.id" 
                                        :src="user.pics" 
                                        alt="">
                                        <span>100+ participations</span>
                                    </div>
                                </div>
                            </div>
                            <div class="time-holder flex-col">
                                <EventTime/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="container no-height flex-row just-space-between">
                <h2>Select a prediction for this event</h2>
                <router-link class="btn btn-blue-fill" :to="`/betslip${this.$route.params.id}`" >View market data</router-link>
            </div>
            <div class="flat-box flex-row wrap">
                <SinglePrediction/>
            </div>
        </div>
    </div>
</template>
<script>
import BackButton from '../components/BackButton.vue';
import PredictionCategory from '../components/PredictionCategory.vue';
import EventTime from '../components/EventTime.vue';
import SinglePrediction from '../components/Prediction.vue';
export default {
    name:'BetView',
    data(){
        return {
            users:[
                {
                    id:1,
                    pics:"users/user1.svg"
                },
                {
                    id:2,
                    pics:"users/user2.svg"
                },
                {
                    id:3,
                    pics:"users/user3.svg"
                },
                {
                    id:4,
                    pics:"users/user4.svg"
                }
            ]
        }
    },
    components:{
        BackButton,
        PredictionCategory,
        EventTime,
        SinglePrediction
    }
}
</script>
<style>
.title-header{
    margin-top:1%;
    margin-right: 1%;
}
.title-holder>div>img{
    width: 70px;
    height: 70px;
    border: 1px solid white;
    border-radius: 50%;
}
.page-title{
    width: 71%;
}
.pad-slip{
    text-indent: 7.5%;
}
.page-title>h1{
   font-size: 35px;
   margin-top: 0px;
}
.page-title>p{
    margin:3% 0%;
    width: 100%;
 }
.bet-view,.bet-view>div{
    padding-left: 0px;
}
.time-holder{
    width: 27%;
    max-height: 80px;
    border-radius: 10px;
    padding: 1%;
    background-color: var(--faint-blue-gray);
}
.no-height>h2{
height: 0px;
padding: 0px;
}
.footings{
    width: 100%;
}
.footings>div{
    max-width: 50%;
    min-width: 40%;
    height:50px;
    padding-left: 2%;
}
.footings>div>img{
    width: 40px;
    height:40px;
    border-radius: 50%;
    margin-left: -5%;
}
.footings>div>span{
    margin-left: 2%;
}
</style>