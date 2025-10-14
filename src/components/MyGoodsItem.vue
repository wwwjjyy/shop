<template>
  <div class="goods-item">
    <router-link class="images" to="/">
      <img src="@/assets/logo.png" alt />
    </router-link>
    <div class="title ellipsis-2">美威 智利原味三文鱼排 240g/袋 4片装</div>
    <div class="type">海鲜年货</div>
    <div class="price">￥999</div>
    <div class="extra">
      <router-link to="/">
        <span>找相似</span>
        <span>发现更多宝贝</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid #f5f5f5;
  margin-bottom: 7px;
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
    height: 85px;
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
}
</style>