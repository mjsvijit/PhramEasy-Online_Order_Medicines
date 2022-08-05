import React from 'react'
import './MainSlider.css'
import Carousel from './helthPageCrousel/HealthCarousel'
const HealthPageslider = () => {
   const slides =[
      'https://cms-contents.pharmeasy.in/banner/52cfab4079e-OneTouch-CB-April22.png?dim=700x0&dpr=1&q=100',
      'https://cms-contents.pharmeasy.in/banner/91fb9714baa-Boldcare-CB-May.jpg',
      'https://cms-contents.pharmeasy.in/banner/e5a04ef9dd0-Vicks-CBMay.jpg',
      'https://cms-contents.pharmeasy.in/banner/b9c60d0750a-cremaffin-CB.jpg',
      'https://cms-contents.pharmeasy.in/banner/66c72bac62c-TNW-NEW.jpg',
      'https://cms-contents.pharmeasy.in/banner/7076307845f-Johnson-CB-Mar22.jpg',
      'https://cms-contents.pharmeasy.in/banner/40e4bb39ec9-Nicotex-CB.jpg',
      'https://cms-contents.pharmeasy.in/banner/845124fc9dc-Tedibar-CB-Dec21.png'

   ]

  return (
    <div className='container'>
         <Carousel slides={slides} />
    </div>
  )
}

export default HealthPageslider