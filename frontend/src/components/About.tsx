import styles from './About.module.css'

interface IAboutProps {
    
    aboutInfo1: string;
    aboutInfo2: string;
    aboutInfo3: string;
    aboutInfo4: string;

}
const About = ({ aboutInfo1, aboutInfo2, aboutInfo3, aboutInfo4}: IAboutProps) => {
    
    return (

        <>

           <div className={`${styles.aboutComponentContainer}`}>
            <div className={`${styles.aboutTextContainer}`}>
                <h1>{aboutInfo1}</h1>
                <p>
                    {aboutInfo2}
                    <br />
                    <br />
                     {aboutInfo3}
                    <br />
                    <br />
                    {aboutInfo4}
                   </p>
            </div>
           </div>
         
        
        </>

    );

}

export default About;