/**
 * 模拟客户端请求
 */
import _products from './products.json'

const TIME_OUT = 1000

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIME_OUT)
}