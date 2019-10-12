import React from 'react'
import {Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom'

function Topic () {
  let { topicId } = useParams()
  console.log(useParams())
  return (
    <h3>Request topic ID: {topicId}</h3>
  )
}

function Topics() {
  let match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/component`}>component</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. state</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default Topics
