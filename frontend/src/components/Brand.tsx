import { useEffect, useState } from 'react';
import styles from './Brand.module.css';
import multiLang from '../multiLang.json'

interface IBrandProps {
  brandInfo1: string;
  brandInfo2: string;
}

const Brand = ({brandInfo1, brandInfo2 }: IBrandProps) => {

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