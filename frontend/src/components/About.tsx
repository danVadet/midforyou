import { useEffect, useState } from 'react';
import styles from './About.module.css'
import  multiLang  from '../multiLang.json';

interface IAboutProps {
    
    aboutInfo1: string;
    aboutInfo2: string;
    aboutInfo3: string;
    aboutInfo4: string;
    setContent(multiLang: object): void

}
const About = ({ aboutInfo1, aboutInfo2, aboutInfo3, aboutInfo4, setContent }: IAboutProps) => {

   
    const [lang, setLang] = useState("");
    useEffect(()  => {

        if (lang ==="en") {
            setContent(multiLang.en)

        } else if(lang === "es") {
           setContent(multiLang.es);
        }
        
        
}, [lang, setLang]);
  


  
    return (

        <>

           <div className={`${styles.aboutComponentContainer}`}>
            <div className={`${styles.aboutTextContainer}`}>
                <h1>{aboutInfo1}</h1>
                <p>
                    {aboutInfo2}
                    <br />
                    <br />
                     {aboutInfo3}
                    <br />
                    <br />
                    {aboutInfo4}
                   </p>
            </div>
           </div>
         
        
        </>

    );

}

export default About;