import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import ProductCard from '../components/HomePage/ProductCard'
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from '../components/HomePage/FilterPrice'
import './styles/HomePage.css'

const HomePage = () => {
  const [nameValue, setNameValue] = useState('')
  const [categorySlected, setCategorySlected] = useState('all')
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity
  })
  const [isDisable, setIsDisable] = useState(false)
  const products = useSelector(store => store.products)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const inputName = useRef()

  const handleInputName = () => {
    setNameValue(inputName.current.value.toLowerCase().trim())
  }


  const callBackFilter = prod => {
    //Filtrado por nombre
    const filterName = prod.title.toLowerCase().includes(nameValue)
    //Filtrado por tipo
    const filterCategory = categorySlected === 'all' ? true : categorySlected === prod.category.id // si el id que traemos es la palabra all entonces true para que se quede como esta la peticion pero si el id que traemos es igual al el id de products nos muestra los elemnetos que tengan ese mismo id osea se filtran los productos con mismo id

    //Filtrado por precio
    const price = +prod.price
    const filterPrice = priceRange.from <= price && price <= priceRange.to // el precio que pongammos en from tiene que ser menor al precio del articulo ya que desde ese precio queremo empezar a buscar y obvio el precio del producto(price) es menor al precio que posimos en to ya que hasta esa cantidad queremos llegas!!! no nos queremos pasar de el valor que posimos en tu


    return filterName && filterCategory && filterPrice

  }

  const handleModMenu = () => {
    setIsDisable(true)
  }
  const handleExit = () => {
    setIsDisable(false)
  }


  return (
    <div className='home__container'>

      <div className='home__filter-container'>
        <h2 className='filter__title'>Price filters</h2>
        <FilterPrice setPriceRange={setPriceRange} />
        <FilterCategory setCategorySlected={setCategorySlected} />
      </div>
      <div className='input__product-div'>
        <input className='home__input-search' onChange={handleInputName} type="text" placeholder='Product name' ref={inputName} />

        <div className='modBtn__div'>
          <button className='filter__modMenu-btn' onClick={handleModMenu}><i className='bx bx-filter-alt'></i></button>
        </div>


        <div className={`menu ${isDisable && "menu__disable"}`}>
          <div className='modMenu__container'>
          <div className='div__x'><span onClick={handleExit} className='span__x'><i className='bx bx-x'></i></span></div>
            <h2 className='modeMenu__title'>Price filters</h2>
            <FilterPrice setPriceRange={setPriceRange} />
            <FilterCategory
              setCategorySlected={setCategorySlected}
              setIsDisable={setIsDisable} />
          </div>
          
        </div>

        <div className='product__container'>
          {
            products?.filter(callBackFilter).map(prod => ( // le pasamos como prop los productos que son el iterador 
              <ProductCard
                key={prod.id}
                product={prod}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage