import { AboutServiceCard } from "./AboutServiceCard";
import { IServices } from "../models/IServices";
import { useNav } from "../Hooks/useNav";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import multiLang from "../multiLang.json"
import styles from "./AboutServices.module.css"


export interface IAboutServicesProps {

    services: IServices[]
}

export const AboutServices = (props: IAboutServicesProps) => {

    const { language } = useContext(LanguageContext);
    const aboutRef = useNav(`${(language === "pt" && multiLang.pt.navItem.services) || (language === "en" &&  multiLang.en.navItem.services ) || (language === "es" &&  multiLang.es.navItem.services)}`)
    
    return (

        <>
            <div ref={aboutRef} className={`${styles.about_services_component}`} id={`${(language === "pt" && multiLang.pt.navItem.services.toLowerCase()) || (language === "en" &&  multiLang.en.navItem.services.toLowerCase()) || (language === "es" &&  multiLang.es.navItem.services.toLowerCase()) }Section`}>

                {props.services.map((service, index) => (
                    <AboutServiceCard
                        key={index}
                        imageUrl={service.imageUrl}
                        imagePosition={service.imagePosition}
                        title={service.title}
                        description={service.description} />

                ))}
            </div>
        </>
    );
}
