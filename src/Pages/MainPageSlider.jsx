import React from 'react'
import './MainSlider.css'
import Carousel from './carousel/Carousel'
const MainPageSlider = () => {
   const slides =[
      'https://cms-contents.pharmeasy.in/banner/f94b6f47e03-MED25_Dweb.jpg?dim=1440x0&dpr=1&q=100',
      'https://cms-contents.pharmeasy.in/banner/85955054ec0-Surgicare_Dweb_1.jpg?dim=1440x0&dpr=1&q=100',
      'https://cms-contents.pharmeasy.in/banner/7400d70904b-DWEB.jpg?dim=1440x0&dpr=1&q=100'

   ]

  return (
    <div className='container'>
         <Carousel slides={slides} />
    </div>
  )
}

export default MainPageSlider