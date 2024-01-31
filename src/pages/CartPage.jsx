import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import axios from 'axios'
import getConfigToken from '../utils/getTokenConfig'
import './styles/CartPage.css'

const CartPage = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])



  const totalPriceCart = cart.reduce((acc, cv) => {
    const price = Number(cv.product.price)

    return acc + price * cv.quantity
  }, 0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-8zks.onrender.com/purchases'
    axios.post(url, '', getConfigToken())
      .then(res => {
        console.log(res.data)
        dispatch(setCart([]))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='cartPage__container'>
      <h1 className='cartPage__title'>Cart</h1>
      <div className='cartPage__products-container'>
        {
          cart.map(prod => (
            <CartProduct
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <hr className='cartPage__hr' />
      <footer className='cartPage__footer'>
        <div>
          <span className='cartPage__span-total'>Total:</span>
          <span className='cartPage__totalPrice'>{totalPriceCart}</span>
        </div>
        <button className='cartPage__btn' onClick={handlePurchase}>Checkout</button>
      </footer>

    </div>
  )
}

export default CartPage