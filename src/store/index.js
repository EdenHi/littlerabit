import {
  createStore
} from 'vuex'
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-client-pc',
      // 需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
