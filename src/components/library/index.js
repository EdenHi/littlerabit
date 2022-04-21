const importFn = require.context('./', false, /\.vue$/)
export default {
    install(app) {
        importFn.keys().forEach(key => {
            const component = importFn(key).default
            // 注册组件
            app.component(component.name, component)
        })

        defineDirective(app)
    }
}
const defineDirective = (app) => {
    // 图片懒加载指令 v-lazyload
    app.directive('lazyload', {
      // vue2.0 inserted函数，元素渲染后
      // vue3.0 mounted函数，元素渲染后
      mounted (el, binding) {
        // 元素插入后才能获取到dom元素，才能使用 intersectionobserve进行监听进入可视区
        // el 是图片元素  binding.value 图片地址
        const observe = new IntersectionObserver(([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            // 取消观察
            observe.unobserve(el)
          }
        }, {
          threshold: 0.01
        })
        // 进行观察
        observe.observe(el)
      }
    })
  }
