import { useEffect, useState } from "react";
import slides from "../../slides.json";
import styles from "./Banner.module.css";
import { SliderContent } from "./SliderContent";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";

export const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(autoPlay);
  }, [currentIndex]);

  return (

    // O site no ar

    <div className={`${styles.slider}`}>
      <SliderContent slides={slides} currentIndex={currentIndex} />
    </div>


   // O site fora do ar



    /*
    <div className={`${styles.slider}`}>

      <SliderContent slides={slides} currentIndex={currentIndex} />

      <Arrows
        prevSlide={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
        nextSlide={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
      />

      <Dots 
        slides={slides}
        currentIndex={currentIndex}
        goToSlide={(currentIndex) => setCurrentIndex(currentIndex)}
      />
    </div>
    */

  );
}