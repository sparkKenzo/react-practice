import React from 'react'
import Todo from './todo'

function TodoList({todos, toggleTodo}) {
  return (
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}>
          </Todo>
        ))
      }
    </ul>
  )
}

export default TodoList
