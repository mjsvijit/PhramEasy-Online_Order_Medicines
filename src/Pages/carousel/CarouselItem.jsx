import React from 'react'
import './Caraousel.css'
const CarouselItem = ({slide}) => {
  return (
     <div className='carousel-item'>
        <img id='crouselimg' src={slide} />
        
     </div>
  )
}

export default CarouselItem