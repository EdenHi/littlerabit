import request from '@/utils/request.js'
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
