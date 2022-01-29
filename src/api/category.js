import request from '@/utils/request.js'
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
