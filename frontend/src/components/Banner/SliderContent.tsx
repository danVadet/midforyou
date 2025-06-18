import { useContext } from "react";
import styles from "./Banner.module.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import multiLang from "../../multiLang.json";

export interface ISliderContentProps {
    slides: Array<any>;
    currentIndex: number;
}

export const SliderContent = (props: ISliderContentProps) => {

     const { language } = useContext(LanguageContext);

    return (

         // O site no ar

            <>
       <img className={`${styles.imageSlide}`} src={`../assets/slides/slide1.jpg`} alt="" />
                    <div className={`${styles.containerBackground}`}>
                        <div className={`${styles.bannerText}`}>
                            <h1> {((language === "pt" && multiLang.pt.bannerText1) || (language === "en" && multiLang.en.bannerText1) || (language === "es" && multiLang.es.bannerText1))}  <br /> 
                                 {((language === "pt" && multiLang.pt.bannerText2) || (language === "en" && multiLang.en.bannerText2) || (language === "es" && multiLang.es.bannerText2))}   <br /> 
                                 {((language === "pt" && multiLang.pt.bannerText3) || (language === "en" && multiLang.en.bannerText3) || (language === "es" && multiLang.es.bannerText3))}
                                 
                            </h1>
                            <p>
                                {((language === "pt" && multiLang.pt.bannerText4) || (language === "en" && multiLang.en.bannerText4) || (language === "es" && multiLang.es.bannerText4))}  <br /> 
                                
                                {((language === "pt" && multiLang.pt.bannerText5) || (language === "en" && multiLang.en.bannerText5) || (language === "es" && multiLang.es.bannerText5))} </p>

                        </div>

                    </div>
       </>

       // O site fora do ar

        /*
        <>
        
            {props.slides.map((slide, index) => (

                (index === props.currentIndex && <div key={index}>


                    <img className={`${styles.imageSlide}`} src={slide.url} alt="" />
                    <div className={`${styles.containerBackground}`}>
                        <div className={`${styles.bannerText}`}>
                            <h1>Torne sua experiência com o comércio exterior mais eficiente e segura.</h1>
                            <h3>Somos o meio para você importar e exportar com segurança! </h3>

                        </div>

                    </div>

                </div>
                
                )

            ))}
        </> 
        */

    )
}