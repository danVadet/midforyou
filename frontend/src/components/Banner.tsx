import styles from './Brand.module.css';
import slides from '../slides.json'
import { useEffect, useState } from 'react';

interface IBannerProps {
  bannerInfo1: string;
  bannerInfo2: string;
}

const Banner = (props: IBannerProps) => {

  return (
      <div className={`${styles.bannerImage}`}>`
          <div className={`${styles.bannerText}`}>
          <h1>{props.bannerInfo1}</h1>
          <h3>{props.bannerInfo2}</h3>

          </div>        
      </div>
  );
}
export default Banner;