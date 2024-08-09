import React from 'react';
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Home.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';

const  Home = () => {
  return (
    <div>
       <Tax></Tax>
       <div className={`${styles.brandImageComponent}`}>
       <div className={`${styles.brandImageComponent_gradient}`} />
      <div className={`${styles.brandImageComponent_textContainer}`}>
        <div className={`${styles.brandImageComponent_text}`}>
          <h1> Torne sua experiência com o comércio exterior mais eficiente e segura.</h1>
          <span>Somos o meio para você importar e exportar com segurança!</span>
        </div>
      </div>
  
      
         
       </div>
       <section className={`${styles.about}`} id="about">
                    <About />
                    <AboutServices />
                </section>

       <Conteiner></Conteiner>
       <Contact></Contact>
    </div>
  );
}

export default Home;
