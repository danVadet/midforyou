
import styles from "./Banner.module.css"

export interface IArrowsProps {
    prevSlide(): void;
    nextSlide(): void;
}

export const Arrows = (props: IArrowsProps) => {
    return (
        <>
          <span className={ `${styles.arrow} ${styles.prev}`} onClick={props.prevSlide}>
          <svg fill="rgba(255, 255, 255, 0.5)"  height="84px" width="84px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22 s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>
          </span>
          <span className={`${styles.arrow} ${styles.next}`} onClick={props.nextSlide}>
          <svg fill="rgba(255, 255, 255, 0.5)" height="84px" width="84px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22s-0.5-0.1-0.7-0.3 c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>
          </span>
        </>
      );
}