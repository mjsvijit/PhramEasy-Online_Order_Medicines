import React from 'react'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import './Caraousel.css'
const CarauselControls = ({prev,next}) => {
  return (
    <div>
    <button className='carousel-control left' onClick={prev}> <IoIosArrowBack size={"2rem"} color={"white"}  /></button>
    <button className='carousel-control right' onClick={next}><IoIosArrowForward  size={"2rem"} color={"white"} /></button>
    </div>
  )
}

export default CarauselControls