import styles from './Banner.module.css';
import slides from '../slides.json'
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import  multiLang  from '../multiLang.json';


const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, setLanguage } = useContext(LanguageContext);
  

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
    <div className={`${styles.bannerContainer}`}>
      {slides.map((slide, index) => (

        ( index  === currentIndex  && <div key={index} className={`${styles.bannerImage}`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.url})`}}>

         <div className={`${styles.bannerText}`}>
              <h1>   {`${`${(language === "pt" && `${multiLang.pt.bannerInfo1}`) || (language === "en"  && `${multiLang.en.bannerInfo1}`) ||( language === "es" && `${multiLang.es.bannerInfo1}`)}`}`}</h1>
              <h3>   {`${`${(language === "pt" && `${multiLang.pt.bannerInfo2}`) || (language === "en"  && `${multiLang.en.bannerInfo2}`) ||( language === "es" && `${multiLang.es.bannerInfo2}`)}`}`}</h3>
    
              </div>  

          </div>
           )
   
      ))}
              <div className={`${styles.leftArrow}`} onClick={() => prevSlide()}>
         <svg fill="rgba(255, 255, 255, 0.5)"  height="84px" width="84px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22 s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>
         </div>
      
         <div className={`${styles.rightArrow}`}  onClick={() => nextSlide()}>
         <svg fill="rgba(255, 255, 255, 0.5)" height="84px" width="84px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22s-0.5-0.1-0.7-0.3 c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>
          </div>
          <div className={`${styles.dots}`}>
          {slides.map((_, index) => (
            <span key={index} onClick={() => goToSlide(index)} className={`${styles.dot} ${currentIndex === index ? `${styles.dot_active}` : ``}`}>
            </span>
          ))}
        </div >
    </div>
  );
}
export default Banner;