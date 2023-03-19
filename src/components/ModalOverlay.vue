<template>
    <div class="modal-overlay flex-col align-center">
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
            <router-link to="mypredictions" class="btn btn-blue-fill">Stake</router-link>
            <router-link :to="`/betview${this.$route.params.id}`" class="btn btn-danger">Cancel</router-link>
        </div>
    </div>
</template>
<script>
import PredictionSummarry from './PredictionSummarry.vue'
export default{
    name:'ModalOverlay',
    data(){
        return{
            showSummarry:true
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
