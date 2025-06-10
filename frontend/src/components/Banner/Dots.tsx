import styles from "./Banner.module.css"

export interface IDotsProps {
  slides: Array<any>;
  currentIndex: number;
  goToSlide(index: number): void;
}

export const Dots = (props: IDotsProps) => {

  return (
    <div className={`${styles.dots}`}>
      {props.slides.map((_, index) => (
        <span key={index}
          className={`${styles.dot} ${props.currentIndex === index ? `${styles.dot_active}` : ``}`}
          onClick={() => props.goToSlide(index)}>
        </span>
      ))}
    </div >
  )
}