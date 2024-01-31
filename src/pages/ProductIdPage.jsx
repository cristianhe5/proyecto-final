import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductInfo from '../components/ProductsIdPage/ProductInfo'
import SimilarProducts from '../components/ProductsIdPage/SimilarProducts'
import SliderImgs from '../components/ProductsIdPage/SliderImgs'
import './styles/ProductIdPage.css'

const ProductIdPage = () => {

  const {id} = useParams()

  const [product, getProduct] = useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-8zks.onrender.com/products/${id}`
    getProduct(url)
  }, [id]) // cada ves que id cambie tenemos que hacer otra peticion
  

  return (
    <div className='productIdPage__container'>
      <div className='productIdPage__imagensAndInfo'>
        <SliderImgs product={product}/>
        <ProductInfo product={product}/>
      </div>
      <SimilarProducts categoryId={product?.category.id} idProd={product?.id} />
    </div>
  )
}

export default ProductIdPage