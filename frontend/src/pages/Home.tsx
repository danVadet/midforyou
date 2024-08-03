import React from 'react';
import logo from './logo.svg';
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';



const  Home = () => {
  return (
    <div>
       <Tax></Tax>
       <Conteiner></Conteiner>
       <Contact></Contact>
    </div>
  );
}

export default Home;
