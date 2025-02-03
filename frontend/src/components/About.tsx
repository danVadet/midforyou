import { useContext } from 'react';
import styles from './About.module.css'
import AboutServices from './AboutServices';
import { LanguageContext } from '../Context/LanguageContext';
import  multiLang  from '../multiLang.json';


interface IAboutProps {
    
   aboutRef:  React.RefObject<HTMLDivElement>; 

}
const About = ( props: IAboutProps) => {

    const { language, setLanguage } = useContext(LanguageContext);

    return (

        <>

        <section ref={props.aboutRef}>
            <div className={`${styles.aboutComponent}`}>

            <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.aboutTextContainer}`}>
                <h1>{`${`${(language === "pt" && `${multiLang.pt.aboutInfo1}`) || (language === "en"  && `${multiLang.en.aboutInfo1}`) ||( language === "es" && `${multiLang.es.aboutInfo1}`)}`}`}</h1>
                <p>
                    {`${`${(language === "pt" && `${multiLang.pt.aboutInfo2}`) || (language === "en"  && `${multiLang.en.aboutInfo2}`) ||( language === "es" && `${multiLang.es.aboutInfo2}`)}`}`}
                    <br />
                    <br />
                     {`${`${(language === "pt" && `${multiLang.pt.aboutInfo3}`) || (language === "en"  && `${multiLang.en.aboutInfo3}`) ||( language === "es" && `${multiLang.es.aboutInfo3}`)}`}`}
                    <br />
                    <br />
                    {`${`${(language === "pt" && `${multiLang.pt.aboutInfo4}`) || (language === "en"  && `${multiLang.en.aboutInfo4}`) ||( language === "es" && `${multiLang.es.aboutInfo1}`)}`}`}
                   </p>
            </div>
           </div>
           <AboutServices/>

            </div>
        


        </section>
        </>

    );

}

export default About;