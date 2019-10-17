import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllProducts, addToCart} from 'store/actions/shopping_cart'
import { getVisibleProducts } from 'store/reducers/shopping-cart/products'
import ProductList from 'components/shopping-cart/productList'
import ProductItem from 'components/shopping-cart/productItem'

class ProductListContainer extends Component {
  componentDidMount () {
    this.props.getAllProducts()
  }
  render() {
    return (
      <div>
        <ProductList title='商品'>
          {this.props.products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => this.props.addToCart(product.id)}
            />
          ))}
        </ProductList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.shopping_cart.products)
})
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  addToCart: productId => dispatch(addToCart(productId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
