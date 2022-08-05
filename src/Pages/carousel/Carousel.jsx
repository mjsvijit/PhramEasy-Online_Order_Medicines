import React,{useState,useEffect} from 'react'
import CarouselItem from './CarouselItem'
import './Caraousel.css'
import CarauselControls from './CarauselControls'
import CarauselIndicators from './CarauselIndicators'

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const prev =()=>{
    const index = currentSlide > 0 ?currentSlide-1 :slides.length -1
    setCurrentSlide(index)
  }

  const switchIndex = (index) =>{
   
    setCurrentSlide(index)
  }

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }


  useEffect(()=>{
      const slideInterval = setInterval(()=> {
          setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide +1 : 0)
      }, 4000)

      return ()=> clearInterval(slideInterval)
  }, [])
  
  
  return (
    <div className='carousel'>
    <div 
    className='carousel-inner'
    style={{transform: `translate(${-currentSlide * 100}%)`}}
    >
        {
          slides.map((slide,index)=>(
           <CarouselItem slide={slide} key={index} />
          ))
        }
    </div>

           <CarauselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />
           <CarauselControls prev={prev} next={next} />

    </div>
  )
}

export default Carousel