import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from './LanguageSelector.module.css'
import { INavLang } from "../models/INavLang";

export interface ILangaugeSelectorProps {
    navLangs: INavLang[]
}

export const LanguageSelector = (props: ILangaugeSelectorProps) => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            {props.navLangs.map((navLang, index) => (

                <li key={index} className={language === navLang.lang ? `${styles.activeLang}` : ""}>
                    <div className={`${styles.itemLang}`}>
                        <img src={navLang.imageUrl} alt="" />
                        <a href={navLang.link}>{navLang.name}</a>
                    </div>
                </li>
            ))}


        </>
    )
}