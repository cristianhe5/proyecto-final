import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCartThunk } from '../../store/slices/cart.slice'
import './styles/ProductsInfo.css'

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if(quantity-1 >= 1){
            setQuantity(quantity-1)
        }
        }
    const handleplus = () => setQuantity(quantity+1)

    const dispatch = useDispatch()

    const handleAddToCart = () => {
       dispatch( addProductToCartThunk(product.id, quantity))
    }
        
    

  return (
    <article className='productsInfo__article'>
        <h3 className='productsInfo__brand'>{product?.brand}</h3>
        <h2 className='productsInfo__title'>{product?.title}</h2>
        <p className='productsInfo__description'>{product?.description}</p>
        <footer className='productsInfo__footer'>
            <div className='productsInfo__price'>
                <span className='productsInfo__price-name'>Price:</span>
                <span className='productsInfo__price-span'>{product?.price}</span>
            </div>
            <div className='productsInfo__counter-div'>
                <button className='productsInfo__btn-minus' onClick={handleMinus}>-</button>
                <div className='productsInfo__quantity'>{quantity}</div>
                <button className='productsInfo__btn-plus' onClick={handleplus}>+</button>
            </div>
        </footer>
            <button className='productsInfo__addToCart' onClick={handleAddToCart}>Add to cart  <i className='bx bx-cart'></i></button>
    </article>
  )
}

export default ProductInfo