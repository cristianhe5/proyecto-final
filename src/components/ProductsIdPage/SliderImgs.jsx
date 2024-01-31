import React from 'react'
import './styles/SliderImg.css'
import { useState } from 'react'

const SliderImgs = ({product}) => {
    const [currentIndex, setCurrentIndex]=useState(0)

    const objSytle = {
        transform: `translateX(calc(-${currentIndex}/3 * 100%))`
    }
    const handlePrev = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex-1)
        } else {
            setCurrentIndex(2) 
        }
    }
    const handleNext = () => {
        if(currentIndex < 2){
            setCurrentIndex(currentIndex +1)
        } else {
            setCurrentIndex(0) 
        }
    }

  return (
    <div className='slider'>
        <button onClick={handlePrev} className='slider__btn slider-prev'><i className='bx bxs-chevron-left'></i></button>
        <div className='slider__movable' style={objSytle}>
            {
                product?.images.map(infoImg => (
                    <div className='slider__img-container' key={infoImg.id}>
                        <img className='slider__img' src={infoImg.url} alt="" />
                    </div>
                ))
            }
        </div>   
        <button onClick={handleNext} className='slider__btn slider-next'><i className='bx bxs-chevron-right' ></i></button>     
    </div>
  )
}

export default SliderImgs