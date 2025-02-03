import styles from './LanguageSelector.module.css'

import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

interface ILanguageSelectorProps {
    setLanguage: (language: string) => void;
}

const LanguageSelector = (props: ILanguageSelectorProps) => {

    const { language } = useContext(LanguageContext);

    const onLinkClick = (language: string) => {
        window.onbeforeunload = null
        props.setLanguage(language);
    }

    return (
        <>
            <a className={`${language === "pt" ? `${styles.activeLang}` : ""}`} onClick={() => onLinkClick("pt")}><img src={`./assets/brazil-flag.png`} width={35} height={35} /></a>
            <a className={`${language === "en" ? `${styles.activeLang}` : ""}`} onClick={() => onLinkClick("en")}> <img src={`./assets/english-flag.png`} width={35} height={35} /> </a>
            <a className={`${language === "es" ? `${styles.activeLang}` : ""}`} onClick={() => onLinkClick("es")}><img src={`./assets/spanish-flag.png`} width={35} height={35} /></a>

        </>

    );
}

export default LanguageSelector;