import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css'
import { Visitor } from '../models/Visitor';
import { IMaskInput } from 'react-imask';
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
const [formErrors,  setFormErrors] = useState({
  nome: "",
  nomeEmpresa: "",
  local: ""
});

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
  
  if(!visitor.nome && !visitor.nomeEmpresa) {
    setFormErrors({nome: "Nome obrigatório", nomeEmpresa: "Nome obrigatório", local: "Local obrigatório"})
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
                    <input type="text" name="nome"  className={`${visitor.nome}` ?  `${styles.valid}` : `${formErrors.nome  && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
                    {formErrors && visitor.nome ? "" : <p className={styles.formError}>{formErrors.nome}</p>}
                    <label>Telefone</label>
                    <IMaskInput  mask="(00) #0000-0000" definitions={{ '#': /9?/ }}  onChange={(e) => handleChange(e)} placeholder= "Digite o número do seu telefone"/>
                    
                    <label>Email</label>
                    <input type="email" name="email" value={visitor.email} onChange={(e) => handleChange(e)} />
                    <label>Nome da empresa</label>
                    <input type="text" name="nomeEmpresa"  className={`${visitor.nomeEmpresa}` ? `${styles.valid}`  : `${formErrors.nomeEmpresa && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
                    {formErrors && visitor.nomeEmpresa ? "" : <p className={styles.formError}>{formErrors.nomeEmpresa}</p>}
                    <label>Ramo da atividade</label>
                    <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} onChange={(e) => handleChange(e)}/>
                    <label>Local</label>
                    <input type="text" name="local"  className={`${visitor.local}` ? `${styles.valid}`  : `${formErrors.local && `${styles.invalid}` }`} onChange={(e) => handleChange(e)} />
                    {formErrors && visitor.local ? "" : <p className={styles.formError}>{formErrors.local}</p>}
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
