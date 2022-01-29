// 分类模块
import {
  topCategory
} from '@/api/constants'
import {
  findAllCategory
} from '@/api/category'
export default {
  namespaced: true,
  state() {
    return {
      // 分类数据
      list: topCategory.map(item => ({
        name: item
      }))
    }
  },
  mutations: {
    // payload所有的分类
    setList(state, payload) {
      state.list = payload
    },
    // 修改当前一级分类下的open数据为true
    show(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    // 修改当前一级分类下的open数据为false
    hide(state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  actions: {
    async getList({
      commit
    }) {
      const data = await findAllCategory()
      data.result.forEach(top => {
        top.open = false
      })
      commit('setList', data.result)
    }
  }
}
