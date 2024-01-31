import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import './styles/FormRegister.css'

const FormRegister = () => {
    const {register, handleSubmit, reset} = useForm()

    const {registerUser} = useAuth()

    const submit = data => {
        registerUser(data)
    }

  return (
    <form className='register__form' onSubmit={handleSubmit(submit)}>
        <h2 className='register__title'>REGISTER</h2>
        <label className='register__label'>
            <span className='register__span'>First Name</span>
            <input className='register__input' {...register("firstName")} placeholder='Name' type="text" />
        </label>
        <label className='register__label'>
            <span className='register__span'>Last Name</span>
            <input className='register__input' {...register("lastName")} placeholder='Last Name' type="text" />
        </label>
        <label className='register__label'>
            <span className='register__span'>Email</span>
            <input className='register__input' {...register("email")} placeholder='Email' type="email" />
        </label>
        <label className='register__label'>
            <span className='register__span'>Password</span>
            <input className='register__input' {...register("password")} placeholder='Password' type="password" />
        </label>
        <label className='register__label'>
            <span className='register__span'>phone</span>
            <input className='register__input' {...register("phone")} placeholder='+123456789' type="text" />
        </label>
        <button className='register__btn'>Register</button>
    </form>
  )
}

export default FormRegister