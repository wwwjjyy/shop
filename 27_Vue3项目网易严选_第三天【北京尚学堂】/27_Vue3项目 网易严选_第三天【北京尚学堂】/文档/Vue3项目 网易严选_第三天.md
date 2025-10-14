![logo](images\logo.png)



# Vue3项目 网易严选_第三天

**主要内容**

* 首页商品
* 首页最新专题
* 商品分类

**学习目标**

 知识点| 要求 
 -| :- 
 首页商品 | 掌握 
 首页最新专题 | 掌握 
 商品分类 | 掌握 



## 一、首页商品

### 1.1 商品区块

**大致步骤：**

- 准备一个商品盒子组件 `goods` 展示单个商品
- 定义产品区块组件 `home-product` 使用 `home-goods` 完成基础布局
- 在首页中使用 `home-product` 组件
- 定义API函数，获取数据，进行渲染
- 处理板块需要进入可视区太多内容才能加载数据问题。

效果图演示：

​	![logo](images\shop.png)

​	![logo](images\shop2.png)

单个商品组件

```vue
<template>
  <div class="goods-item">
    <RouterLink to="/" class="image">
      <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_1.jpg" alt="" />
    </RouterLink>
    <p class="name ellipsis-2">美威 智利原味三文鱼排 240g/袋 4片装</p>
    <p class="desc">海鲜年货</p>
    <p class="price">&yen;108.00</p>
    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGoods'
}
</script>

<style scoped lang='less'>
.goods-item {
  width: 240px;
  height: 300px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all .5s;
  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    &.name {
      height: 44px;
    }
    &.desc {
      color: #666;
      height: 22px;
    }
    &.price {
      margin-top: 10px;
      font-size: 20px;
      color: @priceColor;
    }
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 86px;
    width: 100%;
    background: @xtxColor;
    text-align: center;
    transform: translate3d(0,100%,0);
    transition: all .5s;
    span {
      display: block;
      color: #fff;
      width: 120px;
      margin: 0 auto;
      line-height: 30px;
      &:first-child {
        font-size: 18px;
        border-bottom:1px solid #fff;
        line-height: 40px;
        margin-top: 5px;
      }
    }
  }
  &:hover {
    border-color: @xtxColor;
    .extra {
      transform: none;
    }
  }
}
</style>
```

### 1.2 产品区块组件

```vue
<template>
  <div class="home-product">
    <HomePanel title="生鲜" v-for="i in 4" :key="i">
      <template v-slot:right>
        <div class="sub">
          <RouterLink to="/">海鲜</RouterLink>
          <RouterLink to="/">水果</RouterLink>
          <RouterLink to="/">蔬菜</RouterLink>
          <RouterLink to="/">水产</RouterLink>
          <RouterLink to="/">禽肉</RouterLink>
        </div>
        <XtxMore />
      </template>
      <div class="box">
        <RouterLink class="cover" to="/">
          <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_cover.jpg" alt="">
          <strong class="label">
            <span>生鲜馆</span>
            <span>全场3件7折</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="i in 8" :key="i">
            <HomeGoods />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import HomePanel from './home-panel'
import HomeGoods from './home-goods'
export default {
  name: 'HomeProduct',
  components: { HomePanel, HomeGoods }
}
</script>

<style scoped lang='less'>
.home-product {
  background: #fff;
  height: 2900px;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0,-50%,0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0,0,0,.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0,0,0,.7);
          }
        }
      }
    }
    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n+4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
```

使用组件：`src/views/home/index.vue`

home组件

```vue
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 热门品牌 -->
    <HomeBrand />
    <!-- 商品区域 -->
    <HomeProduct />
    <!-- 最新专题 -->
    <HomeSpecial />
  </div>
</template>
<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner";
import HomeNew from "./components/home-new";
import HomeHot from "./components/home-hot";
import HomeBrand from './components/home-brand'
import HomeProduct from './components/home-product'
import HomeSpecial from './components/home-special'
export default {
  name: "PageHome",
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot,HomeBrand,HomeProduct,HomeSpecial },
};
</script>
<style scoped lang="less"></style>
```

### 1.3 商品区域动态数据

```vue
<template>
  <div class="home-product">
    <!-- <HomePanel title="生鲜" v-for="i in 4" :key="i"> -->
    <HomePanel :title="cate.name" v-for="cate in list" :key="cate.id">
      <template v-slot:right>
        <div class="sub">
          <RouterLink v-for="sub in cate.children" :key="sub.id" to="/">{{sub.name}}</RouterLink>
        </div>
        <XtxMore />
      </template>
      <div class="box">
        <RouterLink class="cover" to="/">
              <img :src="cate.picture" alt="">
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
           <li v-for="item in cate.goods" :key="item.id">
            <HomeGoods :goods="item" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import HomePanel from "./home-panel";
import HomeGoods from "./home-goods";
import { findGoods } from "@/api/home";
import { ref } from "@vue/reactivity";
export default {
  name: "HomeProduct",
  components: { HomePanel, HomeGoods },
  setup() {
    const list = ref([]);
    findGoods().then((res) => {
      list.value = res.data.result;
    });
    return { list };
  },
};
</script>

<style scoped lang='less'>
.home-product {
  background: #fff;
  height: 2900px;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        //object-fit 一般用于 img 和 video 标签，一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等。
        object-fit: cover;
      }
      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
```



## 二、首页最新专题

### 2.1 效果图

​	![logo](images\zhuan.png)

### 2.2 代码演示

```vue
<template>
  <HomePanel title="最新专题">
    <template v-slot:right><XtxMore /></template>
    <div class="special-list" ref="homeSpecial">
      <div class="special-item" v-for="item in list" :key="item.id">
        <RouterLink to="/">
        <img :src="item.cover" alt />
          <div class="meta">
            <p class="title">
              <span class="top ellipsis">{{item.title}}</span>
              <span class="sub ellipsis">{{item.summary}}</span>
            </p>
            <span class="price">&yen;&yen;{{item.lowestPrice}}起</span>
          </div>
        </RouterLink>
        <div class="foot">
          <span class="like"><i class="iconfont icon-hear"></i>{{item.collectNum}}</span>
          <span class="view"><i class="iconfont icon-yanjing"></i>{{item.viewNum}}</span>
          <span class="reply"><i class="iconfont icon-xinxi"></i>{{item.replyNum}}</span>
        </div>
      </div>
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from './home-panel'
import { findSpecial } from '@/api/home'
import { ref } from '@vue/reactivity'
export default {
  name: 'HomeSpecial',
  components: { HomePanel },
   setup () {
       const list = ref([])
        findSpecial().then(res=>{
            console.log(res.data);
            list.value = res.data.result
        })
    return { list }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background: #f5f5f5;
}
.special-list {
  height: 380px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  .special-item {
    width: 404px;
    background: #fff;
    .hoverShadow();
    a {
      display: block;
      width: 100%;
      height: 288px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .meta {
        background-image: linear-gradient(to top,rgba(0, 0, 0, 0.8),transparent 50%);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 288px;
        .title {
          position: absolute;
          bottom: 0px;
          left: 0;
          padding-left: 16px;
          width: 70%;
          height: 70px;
          .top {
            color: #fff;
            font-size: 22px;
            display: block;
          }
          .sub {
            display: block;
            font-size: 19px;
            color: #999;
          }
        }
        .price {
          position: absolute;
          bottom: 25px;
          right: 16px;
          line-height: 1;
          padding: 4px 8px 4px 7px;
          color: @priceColor;
          font-size: 17px;
          background-color: #fff;
          border-radius: 2px;
        }
      }
    }
    .foot {
      height: 72px;
      line-height: 72px;
      padding: 0 20px;
      font-size: 16px;

      i {
        display: inline-block;
        width: 15px;
        height: 14px;
        margin-right: 5px;
        color: #999;
      }
      .like,
      .view {
        float: left;
        margin-right: 25px;
        vertical-align: middle;
      }
      .reply {
        float: right;
        vertical-align: middle;
      }
    }
  }
}
</style>
```



### 2.3 后台接口

```js
/**
 * 最新专题  /home/special
 */
 router.get('/home/special', (req, res) => {
    res.send(specialData)
})
```

```json
{
    "msg": "操作成功",
    "result": [{
        "creator": "spider",
        "isDelete": 0,
        "createTime": "2021-05-19 15:10:07",
        "updateTime": "2021-05-19 15:10:07",
        "id": "1394913240079613954",
        "classificationId": "1",
        "title": "【CEO补贴价】桃气白日梦 10支套刷",
        "summary": "好",
        "lowestPrice": 199.00,
        "cover": "https://yanxuan-item.nosdn.127.net/72e734dd1a4d35ce650afebdaa600b57.png",
        "detailsUrl": "https://yanxuan-item.nosdn.127.net/72e734dd1a4d35ce650afebdaa600b57.png",
        "collectNum": 16,
        "viewNum": 39,
        "replyNum": 9
    }, {
        "creator": "spider",
        "isDelete": 0,
        "createTime": "2021-05-19 15:10:07",
        "updateTime": "2021-05-19 15:10:07",
        "id": "1394913240549376002",
        "classificationId": "1",
        "title": "自发热密集焕亮 麦卢卡蜂蜜紧致面膜 60g",
        "summary": "和蜂蜜一样的透明膏体，涂上脸就变成白色了，很润，不会像其他涂抹式面膜一样变干，没有味道，敏感皮肤很适合，感觉一年四季都能用，特别是干皮，而且用量很省，一小坨就可以涂整脸了，推荐！",
        "lowestPrice": 129.00,
        "cover": "https://yanxuan-item.nosdn.127.net/afd6199278a5b8fd783bc4947960fabc.jpg",
        "detailsUrl": "https://yanxuan-item.nosdn.127.net/afd6199278a5b8fd783bc4947960fabc.jpg",
        "collectNum": 237,
        "viewNum": 325,
        "replyNum": 313
    }, {
        "creator": "spider",
        "isDelete": 0,
        "createTime": "2021-05-19 15:10:05",
        "updateTime": "2021-05-19 15:10:05",
        "id": "1394913239303667714",
        "classificationId": "1",
        "title": "水果“甜甜圈”，山东羊角蜜 5斤",
        "summary": "商品真的不错，质量很好，发货很快，物流很好，服务很好，客服很好",
        "lowestPrice": 69.00,
        "cover": "https://yanxuan-item.nosdn.127.net/946a248d94a12f24f84cece70fe0c47c.jpg",
        "detailsUrl": "https://yanxuan-item.nosdn.127.net/946a248d94a12f24f84cece70fe0c47c.jpg",
        "collectNum": 1509,
        "viewNum": 10523,
        "replyNum": 8343
    }]
}
```



## 三、商品分类

### 3.1 效果图

​	![logo](images\fenlei.png)

​		![logo](images\fenlei-page.png)



### 3.2 代码演示

分类界面组件

```vue
<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">{{ topCategory.name }}</a></el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <AppBanner :banner="sliders" />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in topCategory.subCateList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.bannerUrl" />
              <p>{{ item.name }}</p>
            </a>
          </li>
          <!-- <li v-for="i in 8" :key="i">
            <a href="javascript:;">
              <img
                src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(9).png"
              />
              <p>空调</p>
            </a>
          </li> -->
        </ul>
      </div>
      <!-- 不同分类商品 -->
    </div>
  </div>
</template>
<script>
import { findBanner } from "@/api/home";
import AppBanner from "@/components/app-banner.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "TopCategory",
  components: {
    AppBanner,
  },
  setup() {
    // 轮播图
    const sliders = ref([]);
    findBanner().then((res) => {
      sliders.value = res.data.result;
    });

    // 面包屑+所有分类
    const store = useStore();
    const route = useRoute();
    const topCategory = computed(() => {
      let cate = {};
      const item = store.state.category.list.find((item) => {
          console.log('item.id',item.id);
          console.log('route',route.params.id);
          console.log('item.id === route.params.id',item.id == route.params.id);
        return item.id == route.params.id;
      });
      console.log('item-----',item);
      if (item) cate = item;
      return cate;
    });

    return {
      sliders,
      topCategory,
    };
  },
};
</script>
<style scoped lang="less">
.top-category {
  .breadcrumb {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>
```

### 3.3 路由配置

```js
const routes = [
  {
    path:'/',
    component:Layout,
    children:[
      { path:'/',component:Home},
      //点击一级导航进入二级目录界面
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
      
    ]
  }
]
```







## 补充：

### 骨架屏：

页面加载过程中，提供等待效果。

```vue
<div v-else class="goods-list">
    <el-skeleton class='item' v-for="ele in 4" width='300px' :key="ele"  :loading="loading" animated :throttle="500">
        <template #template>
<el-skeleton-item variant="image" style="width: 240px; height: 240px" />
<div style="padding: 14px">
    <el-skeleton-item variant="h3" />
    <div>
        <el-skeleton-item variant="text" style="margin-right: 16px;width: 240px;" />
        <el-skeleton-item variant="text" style="width: 240px;" />
            </div>
            </div>
        </template>
    </el-skeleton>
</div>
```





### 自己封装骨架屏组件





