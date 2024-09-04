
import styles from './AboutServices.module.css'
import AboutServiceCard from './AboutServiceCard';
import ACI from '../assets/Acessoria comercial internacional.jpg'
import AA from '../assets/Análise Aduaneira.jpg'
import IE from '../assets/Importação e Exportação.jpg'
import LQ from '../assets/Laboratório de Qualidade.jpg'
import { useEffect, useState } from 'react';
import  multiLang  from '../multiLang.json';

interface IAboutServicesProps {
    
    card_1_title: string;
    card_1_description: string;
    card_2_title: string;
    card_2_description: string;
    card_3_title: string;
    card_3_description: string;
    card_4_title: string;
    card_4_description: string;
    setContent(multiLang: object): void

}

const AboutServices = ({card_1_title, card_1_description, card_2_title, card_2_description,  card_3_title, card_3_description, card_4_title, card_4_description, setContent }: IAboutServicesProps) => {



    const [lang, setLang] = useState("");
    useEffect(()  => {

        if (lang === "en") {
            setContent(multiLang.en)

        } else if(lang === "es") {
           setContent(multiLang.es);
        }
        
        
}, [lang, setLang]);
    return (
        <>
            <div className={`${styles.about_services_component}`}>
                <AboutServiceCard
                    imageUrl={ACI}
                    imagePosition='left'
                    title={card_1_title}
                    description={card_1_description} />
                <AboutServiceCard
                    imageUrl={AA}
                    imagePosition='right'
                    title={card_2_title}
                    description={card_2_description} />
                <AboutServiceCard
                    imageUrl={IE}
                    imagePosition='left'
                    title={card_3_title}
                    description={card_3_description} />
                <AboutServiceCard
                    imageUrl={LQ}
                    imagePosition='right'
                    title={card_4_title}
                    description={card_4_description} />
            </div>
        </>
    );

}

export default AboutServices;