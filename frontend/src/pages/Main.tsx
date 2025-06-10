import React from 'react';
import  { CBMCalculator} from '../components/CBMCalculator';
import  { Map } from '../components/Map';
import  { Contact } from '../components/Contact';
import  { About } from '../components/About';
import { Navbar } from '../components/Navbar';
import  { Footer } from '../components/Footer';
import { IServices } from '../models/IServices';
import { Incoterms } from '../components/Incoterms';
import { IIncoterm } from '../models/IIncoterm';
import { IIncotermIcon } from '../models/IIncotermIcon';
import { Home } from '../components/Home';
import { INavLang } from '../models/INavLang';


export interface IMainProps {
    services: IServices []
    incoterms: IIncoterm []
    incotermIcons: IIncotermIcon []
    navLangs: INavLang []
}

 export const Main   = (props: IMainProps) => {
  return (

    // O site no ar

    <> 
      <Navbar navLangs={props.navLangs} />
      <Home/>
      <About services={props.services} />
      <Footer />
    </>


    // O site fora do ar

    /*
    <>
      <Navbar navLangs={props.navLangs} />
      <Home/>
      <Incoterms incoterms={props.incoterms} incotermsIcons={props.incotermIcons} />
      <CBMCalculator />
      <Map />
      <Contact />
      <Footer />
    </>
    */
  );
}