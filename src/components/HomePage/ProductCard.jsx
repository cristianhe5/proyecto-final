import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { addProductToCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './style/ProductsCard.css'

const ProductCard = ({product}) => {

    const navigate = useNavigate()
    const handleNavegate = () => {
        navigate(`/product/${product.id}`)
    }

    const dispatch = useDispatch()

    const handelAddCart = e =>{
        e.stopPropagation() //onClick es un evento que se propaga a todos sus hijos
        dispatch(addProductToCartThunk(product.id))// por defecto ya le pusimos en el Thunk que el segundo parametro sea 1 cada ves que le mandemos un id entonces no es necesario 
    }
  return (
    <article className='product' onClick={handleNavegate}>
        <header className='product__header'>
            <img className='product__img product__img-1' src={product.images[0]?.url} alt="" />
            <img className='product__img product__img-2' src={product.images[1]?.url} alt="" />
        </header>
        <section className='product__body'>
            <h4 className='product__brand'>{product.brand}</h4>
            <h3 className='product__name'>{product.title}</h3>
            <div className='product__price'>
                <span className='product__price-label'>price</span>
                <span className='product__price-value'>{product.price}</span>
            </div>
            <button className='product__btn' onClick={handelAddCart}>
            <i className='bx bx-cart product__iconcart'></i>
            </button>
        </section>        
    </article>
  )
}

export default ProductCard