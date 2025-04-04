
import { createContext, ReactNode, useEffect, useState } from "react";

export interface ILanguageContext {
    language: string
    setLanguage:(id: string) => void;

}
export interface ILanguageProviderProps {
    children: ReactNode;
}

export const LanguageContext = createContext<ILanguageContext>({
    language: '',
    setLanguage: () => {}, 
})

export const LanguageProvider = (props: ILanguageProviderProps) => {
    const [path, setPath] = useState(String(window.location.pathname));

    const [language, setLanguage] = useState('pt');

    useEffect(() => {
        setLanguage( path === "/" ? "pt" : path === "/en" ? "en" : "es" );
      }, [path]);


  
    return (
      <LanguageContext.Provider value={{language, setLanguage}}>{props.children}</LanguageContext.Provider>
    );
  };

