
import styles from "./LanguageLink.module.css"
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import  LanguageLink  from "./LanguageLink";


interface ILanguageSelectorProps {
    setLanguage: (language: string) => void;
}


export const LanguageSelector = (props: ILanguageSelectorProps) => {


    return (

        <>
           
            <li> <LanguageLink to='/' > <img src={`./assets/brazil-flag.png`} width={35} height={35} /> </LanguageLink>  </li> 
            <li> <LanguageLink to='/en' >  <img src={`./assets/english-flag.png`} width={35} height={35} /></LanguageLink>  </li>   
            <li> <LanguageLink to='/es' > <img src={`./assets/spanish-flag.png`} width={35} height={35} /> </LanguageLink> </li>
        
        </>
    );


}