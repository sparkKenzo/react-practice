import React from 'react'

function Todo({completed, text, onClick}) {
  return (
    <li
      style={{textDecoration: completed ? 'line-through' : ''}}
      onClick={onClick}>
      {text}
    </li>
  )
}

export default Todo
