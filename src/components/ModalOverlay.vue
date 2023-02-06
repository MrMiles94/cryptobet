<template>
    <div v-if="showMarketDetails" class="modal-overlay flex-col align-center">
        <div class="market-data flex-col just-space-around">
            <h2>Enter the required details and stake</h2>
            <div>
                <label for='prediction'  class="flex-row just-space-between">
                    Your prediction <span></span>
                </label>
                <div class="input-holder flex-row just-space-between faint-white-border">
                    <input id="prediction" type="text" placeholder="Prediction">
                    <button>Change</button>
                </div>
            </div>
            <div>
                <label for='stake-amount'  class="flex-row just-space-between">
                    USDT amount <span>$40.00 available</span>
                </label>
                <div class="input-holder flex-row just-space-between faint-white-border">
                    <input id="stake-amout" type="text" placeholder="Amout to stake">
                    <button>max</button>
                </div>
                <p>This amount will be deducted from your wallet 
                    <span>Swap Wallet</span>
                </p>
            </div>
            <div>
                <label for='wallet-address' class="flex-row just-space-between">
                    Wallet address <span></span>
                </label>
                <div class="input-holder flex-row just-space-between faint-white-border">
                    <input id="wallet-address" type="text" placeholder="Wallet Address">
                    <button>Change</button>
                </div>
                <p>If your prediction is correct, your reward will be sent to this wallet adress
                    <span></span>
                </p>
            </div>
            <div class="prediction-summarry faint-white-border">
                <button @click="toggleSummarry">Summarry</button>
                <PredictionSummarry v-if="showSummarry"/>
            </div>
            <button class="btn btn-blue-fill">Stake</button>
            <button class="btn btn-danger">Cancel</button>
        </div>
    </div>
</template>
<script>
import PredictionSummarry from './PredictionSummarry.vue'
export default{
    name:'ModalOverlay',
    data(){
        return{
            showSummarry:true,
            showMarketDetails:false
        }
    },methods: {
        toggleSummarry(){
            this.showSummarry = !this.showSummarry
        }
    },
    components:{
        PredictionSummarry
    }
}
</script>
<style>
.modal-overlay{
    position: absolute;
    width: 100%;
    height:100%;
    background-color: #050B1490;
    backdrop-filter: blur(8px);
    top: 90px
}
input{
    background-color: #050B1450
}
.market-data{
    margin-top: 4%;
    font-style: Syne;
    width: 35%;
    padding: 0% 2% 2% 2%;
background-color: #131320;
border-radius: 7px;
}
.market-data>div>p{
    font-size: small;
    margin: 1% 0%;
    width:100%;
    display: flex;
    justify-content: space-between;
    color: var(--text-faint-white)
}
.market-data>div>p>span{
    color: var(--faint-yellow)
}
.market-data>div{
    margin: 2% 0%;
}
.market-data>div>label{
    font-size: large
}
.market-data>div>label>span{
    font-size: medium;
}
.input-holder{
    width: 96%;
    padding: 2%;
    background-color: #050B1450;
    margin: 2% 0%;
}
.input-holder>input{
width: 70%;
font-size: medium
}
.input-holder>button{
    background-color: #050B1450;
    color: var(--deep-blue)
}
/* Prediction Summarry*/
.prediction-summarry{
    width:50%;
    padding: 2%;
    border-radius: 8px
}
.prediction-summarry>ul>li{
    display: flex;
    justify-content: space-between;
    margin: 5%;
    font-size: medium
}
.prediction-summarry>ul>li>span.reward{
    color: var(--faint-yellow)
}
.market-data>.btn{
    margin: 1.5% 0%;
}
.prediction-summarry>button{
    background-color: #050B1450;
    font-size: large
}
</style>
