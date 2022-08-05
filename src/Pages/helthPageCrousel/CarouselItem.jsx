import React from 'react'
import './CarouselHealth.css'
const CarouselItem = ({slide}) => {
  return (
     <div className='carousel-item' style={{width:"700px"}}>
        <img id='crouselimg' src={slide} />
        
     </div>
  )
}

export default CarouselItem