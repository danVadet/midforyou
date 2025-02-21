import styles from './AboutServiceFadeContent.module.css'
import { useEffect, useRef } from "react";

interface AboutServiceFadeContentProps {

  children?: JSX.Element;
}

export const AboutServiceFadeContent = (props: AboutServiceFadeContentProps) => {

  const fadeRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${styles.animate_fade}`);
        observer.unobserve(entry.target);
      }
    },
    );
    observer.observe(fadeRef.current);

    return () => observer.disconnect();
  }, []);

  return (

    <div ref={fadeRef}>
      {props.children}
    </div>
  );
}