//obj de configuracion de token

const getConfigToken = () => ({
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}` // no olvidar la A con mayucula en Autorization
    }
})

export default getConfigToken