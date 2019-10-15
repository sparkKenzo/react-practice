import React from 'react'
import {VisbilityFilters} from 'store/actions/todos'
import FilterLink from 'components/todos/containers/filterLink'

function Footer() {
  const {show_all, show_completed, show_active} = VisbilityFilters
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={show_all}>All</FilterLink>
      <FilterLink filter={show_completed}>completed</FilterLink>
      <FilterLink filter={show_active}>active</FilterLink>
    </div>
  )
}

export default Footer
