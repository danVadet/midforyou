import styles from './About.module.css'
import AboutServices from './AboutServices';

interface IAboutProps {
    
    aboutInfo1: string;
    aboutInfo2: string;
    aboutInfo3: string;
    aboutInfo4: string;
    card_1_title: string;
   card_1_description: string;
   card_2_title: string;
   card_2_description: string;
   card_3_title: string;
   card_3_description: string;
   card_4_title: string;
   card_4_description: string;  
   aboutRef:  React.RefObject<HTMLDivElement>; 

}
const About = ( props: IAboutProps) => {

    
    return (

        <>

        <section ref={props.aboutRef}>
            <div className={`${styles.aboutComponent}`}>

            <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.aboutTextContainer}`}>
                <h1>{props.aboutInfo1}</h1>
                <p>
                    {props.aboutInfo2}
                    <br />
                    <br />
                     {props.aboutInfo3}
                    <br />
                    <br />
                    {props.aboutInfo4}
                   </p>
            </div>
           </div>
           <AboutServices card_1_title={props.card_1_title} 
                                   card_1_description={props.card_1_description} 
                                   card_2_title={props.card_2_title} 
                                   card_2_description={props.card_2_description}
                                   card_3_title={props.card_3_title}
                                   card_3_description={props.card_3_description}
                                   card_4_title={props.card_4_title}
                                   card_4_description={props.card_4_description}
                                    />

            </div>
        


        </section>
        </>

    );

}

export default About;