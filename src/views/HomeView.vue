<template>
<div class="containner">
  <WaterMarkHolder/>
  <div class="home flex-col align-center">
    <h1>Explore, play and win</h1>
    <p>
      Join the community of oracles, predict outcomes of future events ranging from sports, gaming, movies, politics, etc, and earn great rewards if your predictions are right.
    </p>
    
    
    <div class="explore-n-learn flex-row just-space-between flex-col-700">
      <router-link class=" btn btn-blue-fill" to="explore_market">
      Explore Markets
      </router-link>
      <router-link class=" btn btn-empty-fill blue-border" to="how_to_play">
        Learn how to play
      </router-link>
    </div>
    <div class="home-wallet off-700">
      <AllWallet/>
    </div> 

    <!-- popular prediction works here -->
  
    <div class="container popular-predictions flex-col align-center">
      <h1>Popular Predictions</h1>
      <p>
        These are some of the active predictions from different categories
      </p>
      <div class="container predictions-container flex-row align-center wrap">
        <SinglePrediction/>
      </div>
    </div>      
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import AllWallet from '../components/Wallets.vue'
import WaterMarkHolder from '../components/waterMarkHolder.vue'
import SinglePrediction from '../components/Prediction'
export default {
  name: 'HomeView',
  components: {
    AllWallet,
    WaterMarkHolder,
    SinglePrediction
  }
}
</script>
