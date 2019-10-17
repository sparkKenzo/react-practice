import React from 'react'
import Product from './product'

function Cart({products, total, onCheckoutClicked}) {
  console.log(products)
  const hasProduct = products.length > 0
  const nodes = hasProduct ? (
    products.map(product => (
      <Product
        key={product.id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
      />
    ))
  ) : (
    <em>请先添加商品到购物车</em>
  )

  return (
    <div>
      <h3>你的购物车</h3>
      <div>{nodes}</div>
      <p>Total: ${total}</p>
      <button
        disabled={hasProduct ? '' : 'disabled'}
        onClick={onCheckoutClicked}>
        结算
      </button>
    </div>
  )
}

export default Cart
