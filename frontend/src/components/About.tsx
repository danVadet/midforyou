import styles from './About.module.css'

interface IAboutProps {
    
    aboutInfo1: string;
    aboutInfo2: string;
    aboutInfo3: string;
    aboutInfo4: string;

}
const About = ( props: IAboutProps) => {
    
    return (

        <>
           <div className={`${styles.aboutComponentContainer}`}>
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
        </>

    );

}

export default About;