import React from 'react'
import './styles/PurchaseCard.css'

const PurchaseCard = ({ purchase }) => {

  
  return (
    <article className='purchasesCard'>
      <header className='purchasesCard__header'>
        <img className='purchasesCard__image' src={purchase.product.images[0].url} alt="" />
      </header>
      <div className='purchaseCard__description'>
        <h3 className='purchasesCard__produc-title'>{purchase.product.title}</h3>
        <span className='purchasesCard__quantity'>{purchase.quantity}</span>
        <div className='purchasesCard__price'>{purchase.product.price}</div>
      </div>
    </article>
  )
}

export default PurchaseCard