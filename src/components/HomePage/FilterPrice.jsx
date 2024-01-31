import React from 'react'
import { useForm } from 'react-hook-form'
import './style/FilterPrice.css'

const FilterPrice = ({setPriceRange}) => {
     const {handleSubmit,register,reset} = useForm()

     const submit = (data) => {
        const from = +data.from
        const to = +data.to
        setPriceRange({
            
            from, // solo ponemos from ya que un string vacio es igual a 0 si lo pasamos a numero
            to: to === 0 ? Infinity : to // si to es igual a 0 entonces que nos de infinito y si es otro numero entonces que nos retorne to que seria el numero que el usuario ponga
        })
        reset({
            from: '',
            to: ''
        })

     }
    return (
        <form className='price__form' onSubmit={handleSubmit(submit)}>
            <label className='from__lable-price'>
                <span className='from__span-price'>From</span>
                <input className='from__input-price' {...register('from')} type='number'/>
            </label>
            <label className='from__lable-price'>
                <span className='from__span-price'>To</span>
                <input className='from__input-price' {...register('to')} type="number"  />
            </label>
            <button className='from__btn-price'>Filter</button>
        </form>
    )
}

export default FilterPrice