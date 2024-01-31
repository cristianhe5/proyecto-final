import axios from "axios"
import { useState } from "react"

const useFetch = () => {
  const [infoApi, setInfoApi] = useState()

  const getApi = (url, Config = {}) => {
    axios.get(url,Config)
    .then(res => setInfoApi(res.data))
    .catch(err=>console.log(err))
  }

  return [infoApi, getApi]
}

export default useFetch