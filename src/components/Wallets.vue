<template>
    <div 
    class="wallet-holder flex-row just-space-around wrap"
    >
        <div
         v-for="wallet in wallets" :key="wallet.id" class="wallet flex-row align-center" @click="addWallet(wallet)">
         <SingleWallet :wallet='wallet'/>
        </div>
                
    </div>
       
</template>
<script>
import SingleWallet from './SingleWallet.vue'
export default {
    name: "AllWallet",
    data () {
        return {
            wallets:[
                {
                id:Number,
                name: String,
                image: String,
                address: String
                }
            ]
        }
    },
    components:{
        SingleWallet
    },
    created() {
        this.wallets=[
            {
                id:1,
                name:'Meta Mask',
                image:'metamask-wallet.svg',
                address:''
            },
            {
                id:2,
                name:'Trust Wallet',
                image:"trust-wallet.svg",
                address:''
            },
            {
                id:3,
                name:'Engine Wallet',
                image:'engin-wallet.svg',
                address:''
            },
            {
                id:4,
                name:'Pera Wallet',
                image:"pera-wallet.svg",
                address:''
            }
        ]
    },
    methods: {
        addWallet(wallet){
            wallet.address = 'lkjhghxfckhjlhoooqpwjq'
            this.$emit(wallet)/*this piece of code will be reviewed later. It is suppose to emit the content of the wallet upward till ie gets to where it will be used universally*/
        }
    }
}
</script>