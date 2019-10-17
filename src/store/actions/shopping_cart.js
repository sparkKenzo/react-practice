import {RECEIVE_PRODUCTS, ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from 'store/constants/shopping_cart'
import shop from 'api/shop'

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().shopping_cart.products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { shopping_cart } = getState()
  dispatch({
    type: CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: CHECKOUT_SUCCESS,
      cart: shopping_cart.cart
    })
  })
}