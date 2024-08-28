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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const  Main = () => {
  return (
    <div>
      <Navbar></Navbar>
       <Tax></Tax>
       <Brand></Brand>
       <section className={`${styles.about}`} id="about">
                    <About  />
                    <AboutServices />
                </section>


                <section className={`${styles.incoterms}`} id="incoterms">
                <Incoterms/>
                </section>
                <section className={`${styles.conteiners}`} id="conteiners">
                <Conteiner/>
                </section>
             <Map/>
       <section className={`${styles.contact}`} id="contact">
               <Contact/>
                </section>

       <Footer></Footer>
    </div>
  );
}

export default Main;
