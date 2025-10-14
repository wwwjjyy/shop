<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in list" :key="index">
     <img src="" alt="">
      </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
  name: "AppBanner",
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>