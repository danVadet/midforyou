import { useEffect, useRef, useState } from "react";

export const useInNavView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
        
               setIsInView(entry.isIntersecting);
         
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