import React from 'react';
import logo from './logo.svg';

function Contact() {
  return (
    <div className="contact">

      <h1>Entre em contato</h1>


      <div>

      <form>
                    <input type="text" name="nome" placeholder='Digite o nome'/>
                    <input type="number" name="peso" placeholder='Digite o peso' />
                    <input type="number" name="volume" placeholder='Digite o volume' />
                    <button>Enviar</button>
                </form>


      </div>
    </div>
  );
}

export default Contact;
