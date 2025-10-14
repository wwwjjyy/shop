

<template>
    <div class="home-new">
      <MyPanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
        <!-- 使用右侧插槽 -->
        <template #right>
          <AppMore path="/" />
        </template>
        <!-- 使用默认插槽 -->
        <ul class="goods-list">
          <li class="item" v-for="item in goods" :key="item.id">
            <router-link to="/">
              <img :src="item.listPicUrl" />
              <div class="title ellipsis">{{item.name}}</div>
              <div class="price">
                ￥{{item.retailPrice}}
                <del>￥{{item.counterPrice}}</del>
              </div>
            </router-link>
          </li>
        </ul>
      </MyPanel>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import MyPanel from "@/components/MyPanel.vue";
  import { getNew } from "@/api";
  export default {
    components: {
      MyPanel
    },
    setup(props) {
      const goods = ref([]);
      const getNewList = async () => {
        try {
          const res = await getNew();
          console.log(res);
          if ((res.code = "200")) {
            goods.value = res.data.result.slice(0, 4);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getNewList();
  
      return { goods };
    }
  };
  </script>
  
  <style lang="less" scoped>
  .home-new {
    .goods-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      .item {
        width: 265px;
        height: 365px;
        background-color: #f5f5f5;
        img {
          width: 265px;
          height: 265px;
        }
        .hoverShadow();
        .title {
          font-size: 17px;
          text-align: center;
          padding: 15px 25px;
        }
        .price {
          text-align: center;
          font-size: 15px;
          color: @priceColor;
          del {
            color: #666;
          }
        }
      }
    }
  }
  </style>