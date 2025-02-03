import styles from './AboutServices.module.css'
import AboutServiceCard from './AboutServiceCard';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import  multiLang  from '../multiLang.json';

const AboutServices = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className={`${styles.about_services_component}`}>
        <AboutServiceCard
          imageUrl={`./assets/Acessoria comercial internacional.jpg`}
          imagePosition='left'
          title={`${(language === "pt" && `${multiLang.pt.card_1_title}`) || (language === "en"  && `${multiLang.en.card_1_title}`) ||( language === "es" && `${multiLang.es.card_1_title}`)}`}
          description={`${(language === "pt" && `${multiLang.pt.card_1_description}`) || (language === "en"  && `${multiLang.en.card_1_description}`) ||( language === "es" && `${multiLang.es.card_1_description}`)}`} />
        <AboutServiceCard
          imageUrl={`./assets/Análise Aduaneira.jpg`}
          imagePosition='right'
          title={`${(language === "pt" && `${multiLang.pt.card_2_title}`) || (language === "en"  && `${multiLang.en.card_2_title}`) ||( language === "es" && `${multiLang.es.card_2_title}`)}`}
          description={`${(language === "pt" && `${multiLang.pt.card_2_description}`) || (language === "en"  && `${multiLang.en.card_2_description}`) ||( language === "es" && `${multiLang.es.card_2_description}`)}`} />
        <AboutServiceCard
          imageUrl={`./assets/Importação e Exportação.jpg`}
          imagePosition='left'
          title={`${(language === "pt" && `${multiLang.pt.card_3_title}`) || (language === "en"  && `${multiLang.en.card_3_title}`) ||( language === "es" && `${multiLang.es.card_3_title}`)}`}
          description={`${(language === "pt" && `${multiLang.pt.card_3_description}`) || (language === "en"  && `${multiLang.en.card_3_description}`) ||( language === "es" && `${multiLang.es.card_3_description}`)}`} />
        <AboutServiceCard
          imageUrl={`./assets/Laboratório de Qualidade.jpg`}
          imagePosition='right'
          title={`${(language === "pt" && `${multiLang.pt.card_4_title}`) || (language === "en"  && `${multiLang.en.card_4_title}`) ||( language === "es" && `${multiLang.es.card_4_title}`)}`}
          description={`${(language === "pt" && `${multiLang.pt.card_4_description}`) || (language === "en"  && `${multiLang.en.card_4_description}`) ||( language === "es" && `${multiLang.es.card_4_description}`)}`} />
      </div>
    </>
  );

}

export default AboutServices;