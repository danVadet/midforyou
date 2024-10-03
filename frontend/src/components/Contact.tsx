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

interface IValues {
  nome: string;
  telefone: string;
  email: string;
  nomeEmpresa: string;
  ramoAtividade: string;
  local: string;
  mensagem: string;
}

const Contact = (props: IContactProps) => {

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

  interface IErrors extends Partial<IValues> { }

  const [sentData, setSentData] = useState(false);

  const [errors, setErrors] = useState<IErrors>({});
  const emailParrent = new  RegExp (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setVisitor({ ...visitor, [target.name]: target.value })
  }

  const validate = (visitor: Visitor) => {
    const errors: { nome?: string; telefone?: string; email?: string; nomeEmpresa?: string; ramoAtividade?: string; local?: string; mensagem?: string } = {};

    if (!visitor.nome) {
      errors.nome = "Nome obrigatório";
    }

    if(!visitor.telefone) {
       errors.telefone = "Telefone obrigatório";
    }

    if (!visitor.email) {
      errors.email = "Email obrigatório";

    } else if (!emailParrent.test(visitor.email)) {
      errors.email = "Email inválido";
    }

    if(!visitor.nomeEmpresa) {
        errors.nomeEmpresa = "Nome da empresa obrigatório";
    }

    if (!visitor.ramoAtividade) {
       errors.ramoAtividade = "Ramo da atividade obrigatória";
    }

    if(!visitor.local) {
      errors.local = "Local obrigatório";
    }

    if(!visitor.mensagem) {
      errors.mensagem = "Mensagem obrigatória";
    }

   
    return errors;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(visitor);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
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
      setErrors({});
      setSentData(true);
    }

  }
  return (
    <div className={`${styles.contato}`} >

      <h1>{props.contactTitle}</h1>

      <div>   <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>

        <label>{props.fullName}</label>
        <input type="text" name="nome" value={visitor.nome} className={visitor.nome ? "" : `${errors.nome && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
        {visitor.nome ? "" : errors.nome && <p className={styles.formError}>{`${errors.nome}`}</p>}

        <label>{props.phone}</label>
        <IMaskInput name="telefone" value={visitor.telefone} className={visitor.telefone ? "" : `${errors.telefone && `${styles.invalid}`}`} mask="(00) #0000-0000" definitions={{ '#': /9?/ }} onChange={(e) => handleChange(e)} placeholder="Digite o número do seu telefone" />
        {visitor.telefone ? "" : errors.telefone && <p className={styles.formError}>{`${errors.telefone}`}</p>}

        <label>{props.email}</label>
        <input type="text" name="email" value={visitor.email} className={visitor.email  && emailParrent.test(visitor.email) ? "" : `${errors.email && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
        {visitor.email && emailParrent.test(visitor.email) ? "" : errors.email && <p className={styles.formError}>{`${errors.email}`}</p>}

        <label>{props.companyName}</label>
        <input type="text" name="nomeEmpresa" value={visitor.nomeEmpresa} className={visitor.nomeEmpresa ? "" : `${errors.nomeEmpresa && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
        {visitor.nomeEmpresa ? "" : errors.nomeEmpresa && <p className={styles.formError}>{`${errors.nomeEmpresa}`}</p>}

        <label>{props.ramoAtividade}</label>
        <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} className={visitor.ramoAtividade ? "" : `${errors.ramoAtividade && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
        {visitor.ramoAtividade ? "" : errors.ramoAtividade && <p className={styles.formError}>{`${errors.ramoAtividade}`}</p>}

        <label>{props.local}</label>
        <input type="text" name="local" value={visitor.local} className={visitor.local ? "" : `${errors.local && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
        {visitor.local ? "" : errors.local && <p className={styles.formError}>{`${errors.local}`}</p>}

        <label>{props.message}</label>
        <textarea name="mensagem" value={visitor.mensagem} className={visitor.mensagem ? "" : `${errors.mensagem && `${styles.invalid}`}`} onChange={(e) => handleChange(e)}>
        </textarea>
        {visitor.mensagem ? "" : errors.mensagem && <p className={styles.formError}>{`${errors.mensagem}`}</p>}
        {sentData ? <button className={`${styles.sentButton}`}>Enviado</button> : <button className={`${styles.sendButton}`} >Enviar</button>}
      </form>
      </div>
    </div>
  );
}

export default Contact;
