import React from 'react';
import logo from './logo.svg';
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className="contact">

      <h1>Entre em contato</h1>


      <div>
      <form className={`${styles.formContainer}`}>
                    <label>Produto</label>
                    <input type="text" name="nome" placeholder='Digite o nome' />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade"  />
                    <label>Peso</label>
                    <input type="number" name="peso" placeholder='Digite o peso' />
                    <label>Volume</label>
                    <input type="number" name="volume" placeholder='Digite o volume'  />
                    <button>Adicionar o produto</button>
                </form>



      </div>
    </div>
  );
}

export default Contact;
