
import { useEffect, useState } from 'react';
import styles from './Brand.module.css';
import multiLang from '../multiLang.json'
interface IBrandProps {
    
  brandInfo1: string;
  brandInfo2: string;
  setContent(multiLang: object): void

}

const Brand = ({brandInfo1, brandInfo2, setContent }: IBrandProps) => {



  const [lang, setLang] = useState("");
  useEffect(()  => {

      if (lang === "en") {
          setContent(multiLang.en)

      } else if(lang === "es") {
         setContent(multiLang.es);
      }
      
      
}, [lang, setLang]); 

    return (

        <>
        <div className={`${styles.brandImageComponent}`}>
       <div className={`${styles.brandImageComponent_gradient}`} />
      <div className={`${styles.brandImageComponent_textContainer}`}>
        <div className={`${styles.brandImageComponent_text}`}>
          <h1>{brandInfo1}</h1>
          <p>{brandInfo2}</p>
        </div>
      </div>
  
      
         
       </div>

      
    
    </>

    );
}
export default Brand;