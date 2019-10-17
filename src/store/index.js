import {combineReducers} from 'redux'
import counter from './reducers/counter'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import shopping_cart from './reducers/shopping-cart'

export default combineReducers({
  counter,
  todos,
  visibilityFilter,
  shopping_cart
})