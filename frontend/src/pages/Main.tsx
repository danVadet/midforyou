import React from 'react';
import  { Conteiner } from '../components/Conteiner';
import  { Map } from '../components/Map';

import  { Contact } from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IServices } from '../models/IServices';


export interface IMainProps {
    services: IServices []
}

 export const Main   = (props: IMainProps) => {
  return (
    <>
      <Navbar></Navbar>
       <Tax></Tax>
       <div className={'${styles.brandImageComponent}'}>
       <div className={'${styles.brandImageComponent_gradient}'} />
      <div className={'${styles.brandImageComponent_textContainer}'}>
        <div className={'${styles.brandImageComponent_text}'}>
          <h1> Torne sua experiência com o comércio exterior mais eficiente e segura.</h1>
          <span>Somos o meio para você importar e exportar com segurança!</span>
        </div>
      </div>
  
      
         
       </div>
       <About services={props.services}></About>
       <Conteiner />
       <Map />
       <Contact />
       <Footer />
    </>
  );
}