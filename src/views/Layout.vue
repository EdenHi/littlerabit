<template>
  <AppTopnav />
  <AppHeader />
  <main class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
  import AppTopnav from '@/components/app-topnav.vue'
  import AppHeader from '@/components/app-header.vue'
  import AppFooter from '@/components/app-footer'
  export default {
    name: 'Layout',
    components: {
      AppTopnav,
      AppHeader,
      AppFooter
    }
  }

</script>
<style lang="less" scoped>
  .app-body {
    min-height: 600px;
  }

</style>
