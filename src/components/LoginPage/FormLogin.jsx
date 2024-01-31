import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import './style/FormLogin.css'

const FormLogin = () => {
    const {register, handleSubmit, reset} = useForm()
    const {loginUser} = useAuth()
    const submit = data => {
        loginUser(data)
    }
  return (
    <form className='login__form' onSubmit={handleSubmit(submit)}>
        <h2 className='login__h2'>LOGIN</h2>
        <label className='login__label'>
            <span className='login__span'>Email</span>
            <input className='login__input' {...register("email")} placeholder='Email' type="text" />
        </label>
        <label className='login__label'>
            <span className='login__span'>Password</span>
            <input className='login__input' {...register("password")} placeholder='Password' type="Password" />
        </label>
        <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin