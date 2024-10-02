import React, { useState } from 'react';
import styles from './Contact.module.css'
import { Visitor } from '../models/Visitor';
import { IMaskInput } from 'react-imask';
import axios from 'axios';


interface IContactProps {
    
  contactTitle: string;
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  ramoAtividade: string;
  local: string;
  message: string;
  buttonSend: string;
}


const Contact = ( props: IContactProps) => {

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

const [sentData, setSentData] = useState(false);

const [formErrors,  setFormErrors] = useState({
  nome: "",
  telefone: "",
  email: "",
  nomeEmpresa: "",
  ramoAtividade: "",
  local: "",
  mensagem: ""
});
const emailParrent = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 


const handleChange = (e: React.FormEvent) => {
  const target = e.target as HTMLInputElement;
  setVisitor({ ...visitor, [target.name]: target.value })
}
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  
  
  if(!visitor.nome || !visitor.email || !visitor.nomeEmpresa || !visitor.ramoAtividade || !visitor.local || !visitor.mensagem) {

    if (!emailParrent.test(visitor.email)) {
      setFormErrors({

        nome: "",
        telefone: "", 
        email: "Email inválido", 
        nomeEmpresa: "", 
        ramoAtividade: "",
        local: "",
        mensagem: ""

      })
    }
    setFormErrors({
                  nome: "Nome obrigatório",
                   telefone: "Telefone obrigatório", 
                   email: "Email obrigatório", 
                   nomeEmpresa: "Nome da empresa obrigatório", 
                   ramoAtividade: "Ramo da atividade obrigatório",
                   local: "Local obrigatório",
                   mensagem: "Mensagem obrigatória"
                  })
    }  else if (!emailParrent.test(visitor.email)) {

      setFormErrors({

        nome: "",
        telefone: "", 
        email: "Email inválido", 
        nomeEmpresa: "", 
        ramoAtividade: "",
        local: "",
        mensagem: ""

      })


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


  setVisitor({ id: 0, nome: "", telefone: "", email: "", nomeEmpresa: "", ramoAtividade: "", local: "", mensagem: "" });
  setFormErrors({ nome: "", telefone: "", email: "", nomeEmpresa: "",  ramoAtividade: "", local: "", mensagem: "" });
  setSentData(true);
  }
  
}
  return (
    <div className={`${styles.contato}`} >

      <h1>{props.contactTitle}</h1>

      <div>   <form onSubmit={(e) => handleSubmit(e)}  className={`${styles.formContainer}`}>

                    <label>{props.fullName}</label>
                    <input type="text" name="nome" value={visitor.nome}  className={ visitor.nome ? "" :  `${formErrors.nome && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
                    {visitor.nome ?  "" :   formErrors.nome && <p className={styles.formError}>{`${formErrors.nome}`}</p> }

                    <label>{props.phone}</label>
                    <IMaskInput name="telefone" value={visitor.telefone} className={ visitor.telefone ? "" :  `${formErrors.telefone && `${styles.invalid}`}`}  mask="(00) #0000-0000" definitions={{ '#': /9?/ }}  onChange={(e) => handleChange(e)} placeholder= "Digite o número do seu telefone"/>
                    {visitor.telefone ?  "" :   formErrors.telefone && <p className={styles.formError}>{`${formErrors.telefone}`}</p> }

                    <label>{props.email}</label>
                    <input type="email" name="email" value={visitor.email} className={ visitor.email ? "" :  `${formErrors.email && `${styles.invalid}`}`}  onChange={(e) => handleChange(e)} />
                    {visitor.email ?  "" :   formErrors.email && <p className={styles.formError}>{`${formErrors.email}`}</p> }

                    <label>{props.companyName}</label>
                    <input type="text" name="nomeEmpresa" value={visitor.nomeEmpresa} className={ visitor.nomeEmpresa ? "" :  `${formErrors.nomeEmpresa && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
                    {visitor.nomeEmpresa ?  "" :   formErrors.nomeEmpresa && <p className={styles.formError}>{`${formErrors.nomeEmpresa}`}</p> }
                    
                    <label>{props.ramoAtividade}</label>
                    <input type="text" name="ramoAtividade"  value={visitor.ramoAtividade}  className={ visitor.ramoAtividade ? "" :  `${formErrors.nome && `${styles.invalid}`}`}  onChange={(e) => handleChange(e)}/>
                    {visitor.ramoAtividade ?  "" :   formErrors.ramoAtividade && <p className={styles.formError}>{`${formErrors.ramoAtividade}`}</p> }
                    
                    <label>{props.local}</label>
                    <input type="text" name="local" value={visitor.local}   className={ visitor.local ? "" :  `${formErrors.local && `${styles.invalid}`}`}  onChange={(e) => handleChange(e)} />
                    {visitor.local ?  "" :   formErrors.local && <p className={styles.formError}>{`${formErrors.local}`}</p> }
                    
                    <label>{props.message}</label>
                    <textarea name="mensagem" value={visitor.mensagem} className={ visitor.mensagem ? "" :  `${formErrors.mensagem && `${styles.invalid}`}`}  onChange={(e) => handleChange(e)}>
                    </textarea>
                    {visitor.mensagem ?  "" :   formErrors.mensagem && <p className={styles.formError}>{`${formErrors.mensagem}`}</p> }
                     {sentData ? <button className={`${styles.sentButton}`}>Enviado</button> :  <button className={`${styles.sendButton}`} >Enviar</button>}
                </form>
      </div>
    </div>
  );
}

export default Contact;
