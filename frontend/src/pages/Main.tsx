import React from 'react';
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';
import Map from '../components/Map';
import Brand from '../components/Brand';
import Incoterms from '../components/Incoterms';

const  Main = () => {
  return (
    <div>
       <Tax></Tax>
       <Brand></Brand>
       <section className={`${styles.about}`} id="about">
                    <About />
                    <AboutServices />
                </section>

        <Incoterms></Incoterms>
        <Conteiner></Conteiner>
       <Contact></Contact>
    </div>
  );
}

export default Main;
