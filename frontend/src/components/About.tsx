import { useContext } from 'react';
import styles from './About.module.css'
import { AboutServices } from './AboutServices';
import { LanguageContext } from '../Context/LanguageContext';
import { IServices } from '../models/IServices';


interface IAboutProps {
    
   aboutRef:  React.RefObject<HTMLDivElement>; 
   aboutInfo1: string;
   aboutInfo2: string;
   aboutInfo3: string;
   aboutInfo4: string;
   services: IServices []

}
export const About = ( props: IAboutProps) => {

    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <section ref={props.aboutRef}>
            <div className={`${styles.aboutComponent}`}>
            <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.aboutTextContainer}`}>
                <h1>{props.aboutInfo1}</h1>
                <p>
                    {props.aboutInfo2}
                    <br />
                    <br />
                    {props.aboutInfo3}
                    <br />
                    <br />
                    {props.aboutInfo4}
                   </p>
            </div>
           </div>
           <AboutServices services={props.services}/>

            </div>
        


        </section>
    );

}