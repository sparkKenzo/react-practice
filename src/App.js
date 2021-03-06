import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from 'views/home'
import Counter from 'views/counter'
import Todos from 'views/todos'
import Topics from 'views/routing/topics'
import ShoppingCart from 'views/shopping_cart'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/todos'>Todos</Link>
        <Link to='/topics'>Topics</Link>
        <Link to='/shopping_cart'>Shopping Cart</Link>
        <Switch>
          <Route path='/counter' component={Counter}/>
          <Route path='/todos' component={Todos}/>
          <Route path='/topics' component={Topics}/>
          <Route path='/shopping_cart' component={ShoppingCart}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
