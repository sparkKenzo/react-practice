import {connect} from 'react-redux'
import {setVisibilityFilter} from 'store/actions/todos'
import Link from 'components/todos/link'

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)