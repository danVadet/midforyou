import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './Contact.module.css'
import { IVisitor } from '../models/IVisitor';
import axios from 'axios';
import { Message } from './Message';
import { useNav } from '../hooks/useNav';
import { LanguageContext } from '../contexts/LanguageContext';
import multiLang from "../multiLang.json"
import { ICity } from '../models/ICity';
import { IState } from '../models/IState';
import { maskCNPJ } from '../utils/maskCNPJ';
import { maskPhone } from '../utils/maskPhone'


interface IValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  companyCNPJ: string;
  ramoAtividade: string;
  city: string;
  subject: string;
  message: string;
}

interface IErrors extends Partial<IValues> { }

export const Contact = () => {

  const { language } = useContext(LanguageContext);
  const contactRef = useNav(`${`${(language === "pt" && multiLang.pt.navItem.contact) || (language === "en" && multiLang.en.navItem.contact) || (language === "es" && multiLang.es.navItem.contact)}`}`)


  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedState, setSelectedState] = useState<IState>({
    id: 0,
    nome: "",
    sigla: ""

});

  const [selectedCity, setSelectedCity] = useState<ICity>({
    id: 0,
    nome: ""
  });

  const [visitor, setVisitor] = useState<IVisitor>({
    id: 0,
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    companyCNPJ: "",
    ramoAtividade: "",
    city: {
      id: 0,
      nome: ""

    },
    state: {
      id: 0,
      nome: "",
      sigla: ""
    },
    subject: "",
    message: ""

  });

  const [sentData, setSentData] = useState(false);
  const [message, setMessage] = useState(false);

  const [errors, setErrors] = useState<IErrors>({});

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setVisitor({ ...visitor, [target.name]: target.value })
  }
  const validate = (visitor: IVisitor) => {
    const errors: { fullName?: string; phoneNumber?: string; email?: string; companyName?: string; companyCNPJ?: string; ramoAtividade?: string; city?: string; subject?: string; message?: string } = {};

    if (!visitor.fullName) {
      errors.fullName = 'Nome obrigatório';
    }

    if (!visitor.phoneNumber) {
      errors.phoneNumber = 'Telefone obrigatório';
    }

    if (!visitor.email) {
      errors.email = 'Email obrigatório';
    }

    if (!visitor.companyName) {
      errors.companyName = 'Nome da empresa obrigatório';
    }

    if (!visitor.companyCNPJ) {
      errors.companyCNPJ = 'CNPJ da empresa obrigatório';
    }


    if (!visitor.ramoAtividade) {
      errors.ramoAtividade = 'Ramo de atividade obrigatório';
    }

    if (!visitor.city) {
      errors.city = 'Cidade obrigatória';
    }
    if (!visitor.subject) {
      errors.subject = 'Assunto obrigatório';
    }

    if (!visitor.message) {
      errors.message = 'Mensagem obrigatório';
    }

    return errors;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors = validate(visitor);

    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      const response = await axios.post(`http://localhost:5262/visitor/sendContact`, {
        fullName: visitor.fullName,
        phoneNumber: visitor.phoneNumber,
        email: visitor.email,
        companyName: visitor.companyName,
        companyCNPJ: visitor.companyCNPJ,
        ramoAtividade: visitor.ramoAtividade,
        city: selectedCity,
        state: selectedState,
        subject: visitor.subject,
        message: visitor.message

      });
      console.log(response.data);

      setVisitor({ id: 0, fullName: "", phoneNumber: "", email: "", companyName: "", companyCNPJ: "", ramoAtividade: "", city: { id: 0, nome: "" }, state: { id: 0, nome: "", sigla: "" }, subject: "", message: "" });
      setErrors({});

      setMessage(true);
      setSentData(true);

    }
  }

  const getCities = async () => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.sigla}/municipios`)
    setCities(response.data);
  }
  const getStates = async () => {

    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    setStates(response.data);
  }

  const onSelectChangeState = async (e: ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value
    selectedState.sigla = state;

    setSelectedState(selectedState);

  }

  const onSelectChangeCity = async (e: ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value
    selectedCity.nome = city;
    setSelectedCity(selectedCity);
  }

  useEffect(() => {
    getStates();
    getCities();
  });


  return (

    <section ref={contactRef} id={`${(language === "pt" && multiLang.pt.navItem.contact.toLowerCase()) || (language === "en" && multiLang.en.navItem.contact.toLowerCase()) || (language === "es" && multiLang.es.navItem.contact.toLowerCase())}Section`}>
      <div className={`${styles.contato}`} >

        <h1>Contato</h1>
        <div>
          {sentData ? <>{message && <Message type='sucess' message='Mensagem enviada com sucesso, e até em breve faremos contato.' />}</> : <form onSubmit={(e) => onSubmit(e)} className={`${styles.formContainer}`}>
            <label>Nome completo</label>
            <input type="text" name="fullName" value={visitor.fullName} className={visitor.fullName ? "" : `${errors.fullName && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.fullName ? "" : errors.fullName && <p className={styles.formError}>{`${errors.fullName}`}</p>}
            <label>Telefone</label>
            <input type="text" name="phoneNumber" value={maskPhone(visitor.phoneNumber)} className={visitor.phoneNumber ? "" : `${errors.phoneNumber && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.phoneNumber ? "" : errors.phoneNumber && <p className={styles.formError}>{`${errors.phoneNumber}`}</p>}
            <label>Email</label>
            <input type="email" name="email" value={visitor.email} className={visitor.email ? "" : `${errors.email && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.email ? "" : errors.email && <p className={styles.formError}>{`${errors.email}`}</p>}
            <label>Nome da empresa</label>
            <input type="text" name="companyName" value={visitor.companyName} className={visitor.companyName ? "" : `${errors.companyName && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.companyName ? "" : errors.companyName && <p className={styles.formError}>{`${errors.companyName}`}</p>}
            <label>CNPJ da empresa</label>
            <input type="text" name="companyCNPJ" value={maskCNPJ(visitor.companyCNPJ)} className={visitor.companyCNPJ ? "" : `${errors.companyCNPJ && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.companyCNPJ ? "" : errors.companyCNPJ && <p className={styles.formError}>{`${errors.companyCNPJ}`}</p>}

            <label>Ramo da atividade</label>
            <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} className={visitor.ramoAtividade ? "" : `${errors.ramoAtividade && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} />
            {visitor.ramoAtividade ? "" : errors.ramoAtividade && <p className={styles.formError}>{`${errors.ramoAtividade}`}</p>}

            <label>Estado</label>
            <select name="state" id="state" onChange={(e) => onSelectChangeState(e)}>
              <option value="">Seleciona o estado...</option>

              {states.map((state, index) => (
                <option key={index} value={state.sigla}>{state.nome}</option>
              ))}
            </select>


            <label>Cidade</label>
            <select name="city" id="city" onChange={(e) => onSelectChangeCity(e)}>
              <option value="">Seleciona a cidade...</option>

              {cities.map((city, index) => (
                <option key={index} value={city.nome}>{city.nome}</option>
              ))}
            </select>

            <label>Assunto</label>
            <input type="text" name="subject" value={visitor.subject} onChange={(e) => handleChange(e)} className={visitor.subject ? "" : `${errors.subject && `${styles.invalid}`}`} />
            {visitor.subject ? "" : errors.subject && <p className={styles.formError}>{`${errors.subject}`}</p>}

            <label>Mensagem</label>
            <textarea name="message" value={visitor.message} className={visitor.message ? "" : `${errors.message && `${styles.invalid}`}`} onChange={(e) => handleChange(e)}>
            </textarea>
            {visitor.message ? "" : errors.message && <p className={styles.formError}>{`${errors.message}`}</p>}

            <button>Enviar</button>

          </form>}
        </div>
      </div>
    </section>
  );
}