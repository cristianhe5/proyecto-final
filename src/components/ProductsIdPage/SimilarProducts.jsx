import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../HomePage/ProductCard'
import './styles/SimilarProducts.css'


const SimilarProducts = ({categoryId, idProd}) => {
   const [productsByCategory, getProducts] = useFetch()

   useEffect(() => {
    if(categoryId){ // ponemos el if ya que si category es undefind no me renderiza ya que en algun momento category es undefind aunque tengamos el encadenamiento opcional en este caso category es undefine osea se no renderiza pero si se guarda el como undefined y eso es lo que me va a mostrar entonces para eso colocamos el if
        
        const url = `https://e-commerce-api-8zks.onrender.com/products?categoryId=${categoryId}`
        getProducts(url)

    }
   }, [categoryId])

   
   
  return (
    <article className='similarProducts'>
        <h2 className='similarProducts__title'>Similar Products</h2>
        <div className='similarProducts__products'>
            { // con el filter lo que hacemos es eliminar el elemento en el cual estoy y lo hacemos mediante su id
                productsByCategory?.filter(prod => prod.id !== idProd).map( product => (
                    <ProductCard 
                    key={product.id}
                    product={product} // le enviamos el iterador como estamos re untilizando el componente tenemos que mandarle la prop con el mismo nombre que le pasamos a ese compnente ateriormente 
                    />
                ))
            }
        </div>
    </article>
  )
}

export default SimilarProducts