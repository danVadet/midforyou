import { useEffect, useRef, useState } from "react";
import { useInCountUpView } from "./useInCountUpView";


export const useCountUp = (end: number, start: number = 0, duration: number = 2000) => {
  
  const [count, setCount] = useState(start);
  const {ref, isInView} = useInCountUpView();

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrame: number = 0;

    const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);
            
            if (progress < 1) {
                  requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);


  }, [end, start, duration, isInView]);

  return [count, ref] as const;
}