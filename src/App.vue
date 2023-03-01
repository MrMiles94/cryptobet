<template>
<div>
  <CustomHeader/>
  <div class="header-pad"></div>
  <router-view></router-view>
</div>
</template>

<script>
import CustomHeader from "./components/CustomHeader.vue"

export default {
  name: 'App',
  components: {
    CustomHeader
  }
}
</script>
