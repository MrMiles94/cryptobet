<template>
    <img :src="'wallets/'+wallet.image" :alt="wallet.name">
    <span v-if="wallet.address">{{wallet.address}}</span>
    <span v-else>{{wallet.name}}</span>
</template>
<script>
export default{
    name:'SingleWallet',
    props:{
        wallet: Object
    }
}
</script>