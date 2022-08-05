import React from 'react'
import './Caraousel.css'
const CarauselIndicators = ({slides, currentIndex,switchIndex}) => {
  return (
    <div className='carousel-indicators'>
      {
          slides.map((_, index) =>(
            <button className=
            {`carousel-indicator-item${currentIndex === index ? ' active ' : ''}`}
            onClick={()=>switchIndex(index)}
            >
            </button>
             
          ))
      }
      
    </div>


  )
}

export default CarauselIndicators