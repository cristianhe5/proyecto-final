import axios from "axios"


const useAuth = () => {

 const registerUser = (user) => {
    const url = 'https://e-commerce-api-8zks.onrender.com/users'
    axios.post(url,user)
    .then(res => console.log(res.data))
    .catch(err=> console.log(err))
 }
 const loginUser = (credentials) => {
    const url = 'https://e-commerce-api-8zks.onrender.com/users/login'
    axios.post(url,credentials)
    .then(res =>{ 
      console.log(res.data)
      localStorage.setItem('token', res.data.token) //si queremos guardar algo en el localStorage solo ponemos setItem ( el numbre que queramos como key, y lo que queremos guardar) ==> en este caso como res.data es la infomacion empaquetada en un json de 6 propiedades entonces accedemos a esa informacion y a la propiedad que queremos guardar

      // localStorage.getItem('token') si alguna ves queremos acceder al valor que guardamos en el locastorege solo ponemos getItem y el qui del valor 
      //localStorage.removeItem('token') si queremos removerlo
   
   })
    .catch(err=>console.log(err))
 }
 return {registerUser, loginUser}
}

export default useAuth