import {connect} from 'react-redux'
import {toggleTodo, VisbilityFilters} from 'store/actions/todos'
import TodoList from 'components/todos/todoList'

function getVisbleTodoList(todos, filter) {
  const {show_all, show_completed, show_active} = VisbilityFilters
  switch (filter) {
    case show_all:
      return todos
    case show_completed:
      return todos.filter(todo => todo.completed)
    case show_active:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisbleTodoList(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)