import React from 'react'
import AddTodo from 'components/todos/containers/addTodo'
import VisibleTodoList from 'components/todos/containers/visibleTodoList'
import Footer from 'components/todos/footer'

function Todos() {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  )
}

export default Todos
