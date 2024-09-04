import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css'
import { Visitor } from '../models/Visitor';
import axios from 'axios';
import Message from './Message';
import  multiLang  from '../multiLang.json';
interface IContactProps {
    
  contactTitle: string;
  buttonSend: string;
  setContent(multiLang: object): void

}


const Contact = ({contactTitle, buttonSend, setContent }: IContactProps) => {

  const [visitor, setVisitor] = useState<Visitor>({
    id: 0,
    nome: "",
    telefone: "",
    email: "",
    nomeEmpresa: "",
    ramoAtividade: "",
    local: "",
    mensagem: ""

});
const [message,  setMessage] = useState(false);
const [formErros,  setFormErrors] = useState("");

const [lang, setLang] = useState("");
    useEffect(()  => {

        if (lang === "en") {
            setContent(multiLang.en)

        } else if(lang === "es") {
           setContent(multiLang.es);
        }
        
        
}, [lang, setLang]);



const handleChange = (e: React.FormEvent) => {
  const target = e.target as HTMLInputElement;
  setVisitor({ ...visitor, [target.name]: target.value })
}
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if(!visitor.nome) {
    setFormErrors(`Nome obrigatório`)
  } else {
    const response = await axios.post(`http://localhost:5077/visitor/sendEmail`, {
      nome: visitor.nome,
      telefone: visitor.telefone,
      email: visitor.email,
      nomeEmpresa: visitor.nomeEmpresa,
      ramoAtividade: visitor.ramoAtividade,
      local: visitor.local,
      mensagem: visitor.mensagem
     
  });
  console.log(response.data);

 setMessage(true);


  }
  
  

}
  return (
    <div className={`${styles.contato}`} >

      <h1>{contactTitle}</h1>


      <div>   <form onSubmit={(e) => handleSubmit(e)}  className={`${styles.formContainer}`}>
                    <label>Nome completo</label>
                    <input type="text" name="nome"  value={visitor.nome} onChange={(e) => handleChange(e)} />
                    {formErros && <p>{formErros}</p>}
                    <label>Telefone</label>
                    <input type="text" name="telefone"  value={visitor.telefone} onChange={(e) => handleChange(e)} />
                    <label>Email</label>
                    <input type="email" name="email" value={visitor.email} onChange={(e) => handleChange(e)} />
                    <label>Nome da empresa</label>
                    <input type="text" name="nomeEmpresa" value={visitor.nomeEmpresa} onChange={(e) => handleChange(e)} />
                    <label>Ramo da atividade</label>
                    <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} onChange={(e) => handleChange(e)}/>
                    <label>Local</label>
                    <input type="text" name="local" value={visitor.local} onChange={(e) => handleChange(e)}   />
                    <label>Mensagem</label>
                    <textarea  name="mensagem" value={visitor.mensagem} onChange={(e) => handleChange(e)}>
                    </textarea>
                    <button>{buttonSend}</button>
                    
                {message && <Message   message='Envio com sucesso' type='sucess'  />}

                </form>



      </div>
    </div>
  );
}

export default Contact;
