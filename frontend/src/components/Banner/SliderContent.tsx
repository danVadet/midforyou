import styles from "./Banner.module.css"

export interface ISliderContentProps {
    slides: Array<any>;
    currentIndex: number;
}

export const SliderContent = (props: ISliderContentProps) => {
    return (

         // O site no ar

            <>
       <img className={`${styles.imageSlide}`} src={`../assets/slides/slide1.jpg`} alt="" />
                    <div className={`${styles.containerBackground}`}>
                        <div className={`${styles.bannerText}`}>
                            <h1>Torne sua experiência com  <br /> o comércio exterior mais <br /> eficiente e segura.</h1>
                            <p>Somos o meio para você importar  <br /> e exportar com segurança! </p>

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