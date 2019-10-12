import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter} from 'store/actions/todos'

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  
  handleAddTodo () {

  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text}/>
        <button onClick={this.handleAddTodo}>add todo</button>
        <ul>
          {
            this.props.todos.map(todo => (
              <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.text}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
})
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
