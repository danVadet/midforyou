import { ReactNode} from "react";
import styles from "./AboutServiceFadeContent.module.css";
import { useFadeContent } from "../hooks/useFadeContent";

interface AboutServiceFadeContentProps {

  children: ReactNode;
}

export const AboutServiceFadeContent = (props: AboutServiceFadeContentProps) => {

  const fadeRef = useFadeContent();

  return (

    <div className={`${styles.fade}`} ref={fadeRef}>
      {props.children}
    </div>
  );
}