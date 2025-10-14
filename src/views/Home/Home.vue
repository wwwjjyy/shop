<template>
  <div class="home w">
    <HomeBanner />
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    
  </div>
</template>

<script setup>
import HomeBanner from './HomeBanner.vue'
import HomeNew from './HomeNew.vue'
import HomeHot from './HomeHot.vue'
import HomeProduct from './HomeProduct.vue'


</script>

<style lang="less" scoped>
// @import url('../../assets/styles/variables.less');
// .box2{
//     width: 100px;
//     height: 100px;
//     background-color: @xtxColor;
// }

</style>