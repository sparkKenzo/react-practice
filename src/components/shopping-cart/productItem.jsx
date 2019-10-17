import React from 'react'
import Product from './product'

function ProductItem({product, onAddToCartClicked}) {
  return (
    <div>
      <Product 
        title={product.title}
        price={product.price}
        quantity={product.inventory}
      />
      <button
        disabled={product.inventory > 0 ? '' : 'disabled'}
        onClick={onAddToCartClicked}>
        {product.inventory > 0 ? '添加到购物车' : '已售完'}
      </button>
    </div>
  )
}

export default ProductItem
