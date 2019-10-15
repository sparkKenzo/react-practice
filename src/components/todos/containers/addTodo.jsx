import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {addTodo} from 'store/actions/todos'

class AddTodo extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const text = this.input.current.value
    if (text) {
      this.props.addTodo(text)
      this.input.current.value = '' 
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.input}/>
        <button>Add Todo</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})
export default connect(null, mapDispatchToProps)(AddTodo)
