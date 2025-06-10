import { useEffect, useRef } from "react";
import styles from "../components/AboutServiceFadeContent.module.css";



export const useFadeContent = () => {

    const ref = useRef<any>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.animate_fade}`);
            observer.unobserve(entry.target);
        }
        },
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
        
    return ref;
}