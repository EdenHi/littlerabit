// 初始化axios实例
// 请求拦截器， 带token
// 响应拦截器， 拿出响应数据， 拦截token生效
// 定义一个函数使用配置好的axios发请求
// 得到： 请求工具函数

import axios from 'axios'
import store from '@/store'
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有token就在头部携带

  // 获取用户信息对象
  const {
    profile
  } = store.state.user
  // 判断是否有token
  if (profile.token) {
    // 头部信息携带token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
}, (err) => {
  return Promise.reject(err)
})
// 剥离无效数据
instance.interceptors.response.use((res) => res.data, (err) => {
  // 401状态码,进入函数
  if (err.response && err.response.status === 401) {
    // 1、清空无效信息
    // 2、跳转到登录界面
    // 3、跳转需要传参（当前路由地址）给登陆页
    store.commit('user/setUser', {})
    // 当前路由地址
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // get params=>submitData
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
