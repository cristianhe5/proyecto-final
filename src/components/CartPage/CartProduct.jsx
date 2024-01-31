import React from 'react'
import { deleteProductFromCart } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/CartProduct.css'

const CartProduct = ({prod}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductFromCart(prod.id))
    }

  return (
    <section className='cartProduct__card'>
        <header className='cartProduct__header'>
            <img className='cartProduct__image' src={prod.product.images[0].url} alt="" />
        </header>
        <article className='cartProduct__details'>
            <h3 className='cartProduct__product-title'>{prod.product.title}</h3>
            <span className='cartProduct__product-quantity'>{prod.quantity}</span>
            <div className='cartProduct__div-price'>
                <span className='cartProduct__price-title'>price</span>
                <span className='cartProduct__price'>{prod.product.price}</span>
            </div>
        </article>
        <button className='cartProduct__checkout-btn' onClick={handleDelete}>
            <i className='bx bx-trash'></i>
        </button>
    </section>
  )
}

export default CartProduct