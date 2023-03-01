<template>
  <div id="nav" class="flex-row just-space-between align-center fix">
    <MyLogo/>
    <MenuTabs class="disappear-m"/>

      <div class="quick-nav-actions flex-row just-space-around align-center just-right-700">
        <NotificationBell class="off-700" :notification="notification"/>
        <WalletConnectBtn class="off-700"/>
        <div class="mobile-tab disappear appear-m">
        <button @click="toggleTab" id="tab-toggler">
            <hr :class="showTab ? 'x_ nav-btn': 'nav-btn'">
            <hr class="nav-btn" v-if="!showTab">
            <hr :class="showTab ? '_x nav-btn' : 'nav-btn'">
        </button>
        <MenuTabs v-if="showTab" class="absolute"/>
      </div>
    </div>
  </div>
</template>
<script>
import NotificationBell from './NotificationBell.vue'
import WalletConnectBtn from './WalletConnectBtn.vue'
import MyLogo from './Logo.vue'
import MenuTabs from './MenuTabs.vue'

export default {
  name: 'CustomHeader',
  data(){
      return{
          showTab:false,
          notification:[
        {
          id:1,
          message:"what's the need if you don't connect your wallet?",
          priority:'High'
        },
        {
          id:2,
          message:"We have games comming up",
          priority:'Medium'
        },
        {
          id:3,
          message:"You have enough money to Bet with!",
          priority:'low'
        }
      ]
      }
  },
  props:{
  },
  components: {
    MenuTabs,
    MyLogo,
    NotificationBell,
    WalletConnectBtn
  },
  methods: {
      toggleTab(){
          this.showTab = !this.showTab
      }
  },
}
</script>
