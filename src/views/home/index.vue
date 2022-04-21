<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner/>

        <HomeNew/>
        <HomeHot/>
        <HomeBrand/>
        <HomeProduct/>
        <HomeSpecial/>
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/category/1005000">电器</XtxBreadItem>
        <XtxBreadItem >空调</XtxBreadItem>
      </XtxBread>
      </div>
    </div>
  </div>
</template>
<script>

  import HomeCategory from '@/components/home-category.vue'
  import HomeBanner from '@/components/home-banner.vue'
  import HomeNew from '@/components/home-new.vue'
  import HomeHot from '@/components/home-hot.vue'
  import HomeBrand from '@/components/home-brand'
  import HomeProduct from '@/components/home-product'
  import HomeSpecial from '@/components/home-special'
  export default {
    name: 'PageHome',
    components: {
      HomeCategory,
      HomeBanner,
      HomeNew,
      HomeHot,
      HomeBrand,
      HomeProduct,
      HomeSpecial
    }
  }

</script>
<style scoped lang="less"></style>
