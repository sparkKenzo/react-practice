import React from 'react'
import ProductListContainer from 'components/shopping-cart/containers/productListContainer'
import CartContainer from 'components/shopping-cart/containers/cartContainer'

function ShoppingCart() {
  return (
    <div>
      <ProductListContainer/>
      <CartContainer/>
    </div>
  )
}

export default ShoppingCart
