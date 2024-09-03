import React, { useEffect, useState } from 'react';
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
import  multiLang  from '../multiLang.json'

const  Main = () => {

    const [lang, setLang] = useState("");
  const [content, setContent] = useState({
    home: "Início",
    about: "Serviços",
    container: "Contêineres",
    contact: "Contato",
    aboutCompanhy: "Desde a prospecção de fornecedores até a nacionalização da mercadoria."
    


  });

  useEffect (() => {

    if(lang === "en") {
      setContent(multiLang.en);

   } else if(lang === "es") {
      setContent(multiLang.es);


  }




  }, [lang])
  
  return (
    <div>


      <Navbar home={content.home} about={content.about} container={content.container} contact={content.contact} setContent={setContent}></Navbar>
       <Tax></Tax>
       <Brand></Brand>
       <section className={`${styles.about}`} id="about">
                    <About aboutCompanhy={content.aboutCompanhy} setContent={setContent}  />
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
