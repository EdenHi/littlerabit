<template>
  App{{$store.state.user.profile.account}}
  <button @click="$store.commit('user/setUser',{account:'章三'})">设置用户信息</button>
</template>

<script>
  import {
    // ref
  } from 'vue'
  import {
    useStore
  } from 'vuex'
  export default {
    setup() {
      return {

      }
    }
  }

</script>

<style>

</style>
