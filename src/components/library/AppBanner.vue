<template>
  <el-carousel height="500px">
    <el-carousel-item v-if="list.length === 0">
      <img src="@/assets/images/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg" alt="默认轮播图">
    </el-carousel-item>
    <el-carousel-item v-for="(item,index) in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>

const props = defineProps({
  list: {
    type: Array,
    default: []
  }
});

</script>

<style lang="less" scoped>

</style>