import { useNav } from "../Hooks/useNav";
import { Tax } from "./Tax";
import { Banner } from "./Banner/Banner";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from './About.module.css'

import multiLang from "../multiLang.json"

export const Home = () => {

    const { language } = useContext(LanguageContext);
    const homeRef = useNav(`${(language === "pt" && multiLang.pt.navItem.home) || (language === "en" && multiLang.en.navItem.home) || (language === "es" && multiLang.es.navItem.home)}`)

    return (
        <section ref={homeRef} id={`${(language === "pt" && multiLang.pt.navItem.home.toLowerCase()) || (language === "en" &&  multiLang.en.navItem.home.toLowerCase() ) || (language === "es" &&  multiLang.es.navItem.home.toLowerCase())}Section`} >
            <Tax/>
            <Banner />
                   <div className={`${styles.aboutComponentContainer}`}>
                            <div className={`${styles.aboutTextContainer}`}>
                                <h1>{((language === "pt" && multiLang.pt.aboutText1) || (language === "en" && multiLang.en.aboutText1) || (language === "es" && multiLang.es.aboutText1))}</h1>
                                <p>
                                    {((language === "pt" && multiLang.pt.aboutText2) || (language === "en" && multiLang.en.aboutText2) || (language === "es" && multiLang.es.aboutText2))}
                                    <br />
                                    <br />
                                    {((language === "pt" && multiLang.pt.aboutText3) || (language === "en" && multiLang.en.aboutText3) || (language === "es" && multiLang.es.aboutText3))}                                    
                                    <br />
                                    <br />
                                    {((language === "pt" && multiLang.pt.aboutText4) || (language === "en" && multiLang.en.aboutText4) || (language === "es" && multiLang.es.aboutText4))}
                                </p>
                            </div>
                        </div>
        </section>
    );
}