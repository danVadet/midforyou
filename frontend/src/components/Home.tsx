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
            <Tax />
            <Banner />
                   <div className={`${styles.aboutComponentContainer}`}>
                            <div className={`${styles.aboutTextContainer}`}>
                                <h1>Desde a prospecção de fornecedores até a nacionalização da mercadoria.</h1>
                                <p>
                                    As Trading Companies são empresas especializadas em Comércio Exterior que facilitam processos de importação e exportação entre diferentes países, intermediando a negociação entre fornecedor e cliente de forma segura e contribuindo para a comercialização internacional de produtos de mercados variados.
                                    <br />
                                    <br />
                                    A Mid4u é uma Trading Company com sede em Cajazeiras, no Sertão do Estado da Paraíba, atuando no Comércio Exterior desde o ano de 2017, com especialidade em importação, exportação e intermediação comercial internacional.
                                    <br />
                                    <br />
                                    Possuímos Benefício Fiscal de ICMS, concedido através de Termo de Acordo de Regime Especial (TARE), pela Secretaria da Fazenda do Estado da Paraíba. Da prospecção de fornecedores até a nacionalização da mercadoria, a Mid4u cuida do seu processo de importação e exportação com transparência e segurança.
                                </p>
                            </div>
                        </div>
        </section>
    );
}