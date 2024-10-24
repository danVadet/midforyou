import styles from './Brand.module.css';
import slides from '../slides.json'
import { useEffect, useState } from 'react';

interface IBrandProps {
  brandInfo1: string;
  brandInfo2: string;
}

const Brand = (props: IBrandProps) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect (() => {

    const autoPlay = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(autoPlay);

  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % slides.length);
  };

  return (
      <div className={`${styles.sliderContainer}`}>
        {slides.map((image, index) => (
          <div key={index} className={index === currentIndex ? `${styles.slide_active}` : `${styles.slide}`}>
                <div className={`${styles.slide_gradient}`}>
                  <img src={image.url} alt="" />
                  <h2 className={`${styles.slide_text}`}>{(index === 0 && image.info && props.brandInfo1) || (index === 1 && image.info && props.brandInfo2) || (index === 2 && image.info && props.brandInfo1) }</h2>
                </div>
          </div>
        ))}

        <div className={`${styles.dots}`}>
          {slides.map((_, index) => (
            <span key={index} onClick={() => goToSlide(index)} className={`${styles.dot} ${currentIndex === index ? `${styles.dot_active}` : ``}`}>
            </span>
          ))}

        </div >
         <div className={`${styles.leftArrow}`} onClick={() => prevSlide()}>
         <svg fill="rgba(255, 255, 255, 0.8)"  height="84px" width="84px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22 s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>

         </div>
      
         <div className={`${styles.rightArrow}`}  onClick={() => nextSlide()}>
         <svg fill="rgba(255, 255, 255, 0.8)" height="84px" width="84px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22s-0.5-0.1-0.7-0.3 c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>
          </div>
      </div>
  );
}
export default Brand;