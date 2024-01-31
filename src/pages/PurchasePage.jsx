import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import getConfigToken from '../utils/getTokenConfig'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'
import './styles/PurchasePage.css'

const PurchasePage = () => {

   const [purchases, getPurchases] = useFetch()
   
   useEffect(() => {
    const url = 'https://e-commerce-api-8zks.onrender.com/purchases'
    getPurchases(url, getConfigToken())
   }, [])

   console.log(purchases);

  return (
    <div className='purchases'>
        <h2 className='purchase__title'>My purchases</h2>
        <div className='purchases__container'>
            {
                purchases?.map( infoPurchase => (
                    <PurchaseCard 
                        key={infoPurchase.id}
                        purchase={infoPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasePage