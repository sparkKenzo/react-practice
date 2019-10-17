import React from 'react'

function Product({title, price, quantity}) {
  return (
    <div>
      {title} - $ {price} {quantity ? `x${quantity}` : null}
    </div>
  )
}

export default Product
