import { useEffect, useRef, useState } from "react";

export const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
           if(entry.isIntersecting) {
               setIsInView(true);
           }
         
          },
          {
            threshold: 0.1,
          }
        );
    
        const currentRef = ref.current;
        if (currentRef) {
          observer.observe(currentRef);
        }
    
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }, []);
      return { ref, isInView }
}