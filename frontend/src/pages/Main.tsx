import React from 'react';
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';
import Map from '../components/Map';
import Brand from '../components/Brand';

const  Main = () => {
  return (
    <div>
       <Tax></Tax>
       <Brand></Brand>
       <section className={`${styles.about}`} id="about">
                    <About />
                    <AboutServices />
                </section>


        <Conteiner></Conteiner>
        <Map></Map>
       <Contact></Contact>
    </div>
  );
}

export default Main;
