<template>
  <div class="goods-item">
    <router-link class="images" to="/">
      <img :src=goods.picture alt />
    </router-link>
    <div class="title ellipsis-2">{{ goods.name }}</div>
    <div class="type">{{ goods.desc }}</div>
    <div class="price">￥{{goods.price}}</div>
    <div class="extra">
      <router-link to="/">
        <span>找相似</span>
        <span>发现更多宝贝</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid #f5f5f5;
  margin-bottom: 7px;
  transition: all 0.3s;
  .images {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 160px;
      height: 160px;
    }
  }
  .title {
    font-size: 16px;
  }
  .type {
    font-size: 14px;
    color: #ccc;
    margin: 10px;
  }
  .price {
    font-size: 16px;
    color: @priceColor;
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: @xtxColor;
    height: 0;
    transition: all 0.3s;
    span {
      display: block;
      text-align: center;
      color: #fff;
      font-size: 16px;
      margin: 10px 0;
    }
    span:last-child {
      font-size: 14px;
    }
  }
  &:hover {
    border-color: @xtxColor;
    .extra {
      height: 80px;
    }
  }
}
</style>