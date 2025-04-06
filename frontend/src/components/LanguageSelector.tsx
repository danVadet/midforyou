import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from './LanguageSelector.module.css'

export const LanguageSelector  = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
         <li className={language === "pt" ? '${styles.activeLang}' : ""}><a href="/">Português</a></li>
         <li  className={language === "en" ? '${styles.activeLang}' : ""}><a href="/en">Inglês</a></li>
         <li  className={language === "es" ? '${styles.activeLang}' : ""}><a href="/es">Espanhol</a></li>
        </>
    )
}

