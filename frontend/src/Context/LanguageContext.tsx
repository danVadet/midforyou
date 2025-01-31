import { createContext, ReactNode, useState } from "react";

interface ILanguageContextValue {
    language: string;
    setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<ILanguageContextValue>({
    language: "pt",
    setLanguage: () => {},
})

interface ILanguageContextProviderProps {
    children: ReactNode;
}

export const LanguageContextProvider = (props: ILanguageContextProviderProps) => {

    const [language, setLanguage] = useState("pt");


    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )

}
export const LanguageContextConsumer = LanguageContext.Consumer;