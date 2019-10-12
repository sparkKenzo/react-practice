import {combineReducers} from 'redux'
import counter from './reducers/counter'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const todoApp = combineReducers({
  counter,
  todos,
  visibilityFilter
})

export default todoApp