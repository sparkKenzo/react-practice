import React from 'react'
import {connect} from 'react-redux'
import {getCartProducts, getTotal} from 'store/reducers/shopping-cart'
import {checkout} from 'store/actions/shopping_cart'
import Cart from 'components/shopping-cart/cart'

function CartContainer({products, total, checkout}) {
  return (
    <Cart
      total={total}
      products={products}
      onCheckoutClicked={() => checkout(products)}
    />
  )
}
const mapStateToProps = state => {
  return {
    total: getTotal(state.shopping_cart),
    products: getCartProducts(state.shopping_cart)
  }
}
const mapDispatchToProps = dispatch => ({
  checkout: products => dispatch(checkout(products))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)