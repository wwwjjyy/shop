<template>
  <div class="home-product">
    <MyPanel title="生鲜" >
      <!-- 使用右侧插槽 -->
      <template #right>
        <div class="sub">
          <router-link to="/">海鲜</router-link>
          <router-link to="/">海鲜</router-link>
          <router-link to="/">海鲜</router-link>
          <router-link to="/">海鲜</router-link>
          <router-link to="/">海鲜</router-link>
        </div>
        <AppMore />
      </template>

      <div class="goods">
          <!-- 左侧-->
          <router-link class='left' to='/'>
            <img src='@/assets/logo.png'/>
          </router-link>
          <!-- 右侧 -->
          <div class='right'>
              <ul class='goods-list'>
                  <li v-for='item in 8' :key='item'>
                      <MyGoodsItem/>
                  </li>
              </ul>
          </div>

      </div>
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import MyGoodsItem from '@/components/MyGoodsItem.vue'
export default {
  components: {
    MyPanel,
    MyGoodsItem
  }
};
</script>

<style lang="less" scoped>
.home-product{
    background-color: #fff;

    .sub{
        a{
            font-size: 16px;
            padding: 2px 10px;
            border-radius: 4px;
            margin-right: 0 7px;
            &:hover{
                background-color: @xtxColor;
                color:#fff;
            }
            &:last-child{
                margin-right: 40px;
            }
        }
    }

    .goods{
        height: 610px;
        display: flex;

        .left{
            width: 240px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            flex: 1;
            .goods-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

            }
        }

    }

}
</style>