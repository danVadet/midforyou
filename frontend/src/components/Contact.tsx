import React from 'react';
import logo from './logo.svg';
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={`${styles.contato}`} >

      <h1>Entre em contato</h1>


      <div>   <form className={`${styles.formContainer}`}>
                    <label>Nome completo</label>
                    <input type="text" name="nome"  />
                    <label>Telefone</label>
                    <input type="number" name="telefone"  />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Nome da empresa</label>
                    <input type="nome_empresa" name="nome_empresa"   />
                    <label>Ramo da atividade</label>
                    <input type="ramo_atividade" name="ramo_atividade"   />
                    <label>Local</label>
                    <input type="local" name="local"   />
                    <label>Mensagem</label>
                    <textarea  name="mensagem">
                    </textarea>
                    <button>Enviar</button>
                </form>



      </div>
    </div>
  );
}

export default Contact;
