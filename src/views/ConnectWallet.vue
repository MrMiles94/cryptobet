<template>
    <div class="container flex-col align-center just-space-around wallet-container">
        <ModalOverlay/>
        <h1>Connect Walltet</h1>
        <p>
            To get involved in the prediction market, you have to connect one or more crypro wallets.
            Don’t know what a crypto wallet is? <span>Learn about it here!</span>
        </p>
        <div class="wallet-collection flex-col align-center">
            <AllWallet/>
            <p>
                Can't find your wallet? <span>Import your wallet!</span>
            </p>
            <button>Connect Wallet</button>
        </div>
    </div>
</template>
<script>
import AllWallet from '../components/Wallets.vue'
import ModalOverlay from '../components/ModalOverlay'
export default {
    name: 'ConnectWallet',
    components:{
        AllWallet,
        ModalOverlay
    }
}
</script>
<style scoped>
    .wallet-container>p>span{
        color: #C4C400
    }
    p{
        width: 50%;
        text-align: center
    }
</style>

    
