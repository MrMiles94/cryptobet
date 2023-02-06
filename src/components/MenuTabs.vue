<template>
    <div class="menu-tabs flex-row just-space-evenly align-center">
        <div class="notify flex-row align-center quick-nav-actions disappear ON-700">
            <NotificationBell/>
            <WalletConnectBtn/>
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="/predictionmarket">Prediction Market</router-link>
        <router-link to="/mypredictions">My Predictions</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>
<script>
import NotificationBell from './NotificationBell.vue'
import WalletConnectBtn from './WalletConnectBtn.vue'
export default {
    name: 'MenuTabs',
    components: {
        NotificationBell,
        WalletConnectBtn
    }
}
</script>
