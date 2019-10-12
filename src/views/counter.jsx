import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
    this.incrementAsync = this.incrementAsync.bind(this)
  }
  
  incrementIfOdd () {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }
  incrementAsync () {
    setTimeout(this.props.onIncrement, 1000)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>incremet if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.counter
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({type: 'INCREMENT'}),
  onDecrement: () => dispatch({type: 'DECREMENT'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
