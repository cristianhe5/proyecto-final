import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './style/FilterCategory.css'

const FilterCategory = ({setCategorySlected, setIsDisable}) => {

    const [categories, getCategories] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-8zks.onrender.com/categories'
      getCategories(url)
    }, [])

    const handleCategory = id => {
        setCategorySlected(id)
    }

    const handleExitMenu = () => {
      setIsDisable(false)
    }

    
    
  return (
    <section className='category__filter'>
        <h3 className='category__title'>Categories</h3>
        <hr className='category__hr' />
        <ul className='category__ul'>
            <li className='category__li' onClick={()=> handleCategory('all')}><span onClick={handleExitMenu}>All categories</span></li>
            {
                categories?.map( category => (
                    <li className='category__li' onClick={()=>{ handleCategory(category.id)}} key={category.id}> <span onClick={handleExitMenu}>{category.name}</span></li>
                    //para capturar un parametro en un onClick hacemos una funcion callback y le pasamos el handler y luego al handler le pasamos el parametro de la informacion que queremos recibir para que pueda llegar hasta el la funcion handler que hiciomos 
                ))
            }
        </ul>
    </section>
  )
}

export default FilterCategory