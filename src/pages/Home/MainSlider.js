import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SlideImages from './SlideImages'; // array of images for a slider // 
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './MainSlider.css';

function MainSlider() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const slides = SlideImages

  const sliderLeft = {
    backgroundImage: `url(${slides[leftIndex].image})`,
  }
  const sliderRight = {
    backgroundImage: `url(${slides[rightIndex].image})`
  }

// Logic behind arrows on a slider //
  const goToPrevious = () => {
    setDirection(-1)
    const firstSlide = leftIndex  === 0 || rightIndex === 0
    const leftSlide = firstSlide ? slides.length - 2 : leftIndex - 2
    const rightSlide = firstSlide ? slides.length - 1 : rightIndex - 2
    setLeftIndex(leftSlide);
    setRightIndex(rightSlide);
  };

  const goToNext = () => {
    setDirection(1)
    const lastSlide = leftIndex === slides.length - 2;
    const leftSlide = lastSlide ? 0 : leftIndex + 2;
    const rightSlide = lastSlide ? 1 : rightIndex + 2;
    setLeftIndex(leftSlide)
    setRightIndex(rightSlide);  
  };

// Slide animation //
  const slideAnimation = {
    initial: direction => {
      return { 
        x: direction > 0 ? 100 : -100,
        opacity: 0 }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: 'ease-in',
    },
    exit: direction => {
      return { 
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: 'ease-out',
      }
    },
  }

  return (
    <main className="main-slider">
      <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
        <motion.div className='slider-wrapper' variants={slideAnimation} animate='animate' initial='initial' exit='exit' custom={direction} key={leftIndex}>
            <div className='slider-left' style={sliderLeft}>
                <img 
                  className='left-arrow' 
                  src={leftArrow}
                  onClick={goToPrevious}>
                </img>
            </div> 
            <div className='slider-right' style={sliderRight}>
                <img 
                  className='right-arrow' 
                  src={rightArrow} 
                  onClick={goToNext}>
                </img>
            </div> 
        </motion.div> 
        </AnimatePresence> 
    </main>
  )
}

export default MainSlider
