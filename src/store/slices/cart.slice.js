import { createSlice,  } from "@reduxjs/toolkit";
import getConfigToken from "../../utils/getTokenConfig";
import axios from "axios";

export const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        addToCart: (currentValue, action) => [...currentValue, action.payload],
        removeFromCart: (currentValue, action) => currentValue.filter(prod => prod.id !== action.payload), // cuando encuentre un el id que es igual entonces no lo guarda // pero si prod.id es diferente entonces los guarda 

        setCart: (currentValue, action) => action.payload
    }
})
export const {addToCart,removeFromCart,setCart} = cartSlice.actions

export default cartSlice.reducer

const baseUrl = 'https://e-commerce-api-8zks.onrender.com/cart'

 export const getCartThunk = () => (dispatch) => {
    const url = `${baseUrl}`
    axios.get(url, getConfigToken())
    .then(res => dispatch(setCart(res.data)))
    .catch(err=>console.log(err))
 }

 export const addProductToCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${baseUrl}`
    const data = {productId, quantity}
    axios.post(url, data, getConfigToken()) // ver la documentacion para saber que parametros resive el backEnd o mas bien que parametros necesita
    .then(res => console.log(res.data))
    .catch(err=>console.log(err))


 }

 export const deleteProductFromCart = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`
    axios.delete(url,getConfigToken())
    .then(res => {
      console.log(res.data)
      dispatch(removeFromCart(id))
   })
    .catch(err=>console.log(err))
 }

 