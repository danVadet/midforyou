import styles from './Contact.module.css'
import { IVisitor } from '../../models/IVisitor';
import axios from 'axios';
import { Message } from '.././Message';
import { useNav } from '../../Hooks/useNav';
import { LanguageContext } from '../../contexts/LanguageContext';
import multiLang from "../../multiLang.json"
import { ICity } from '../../models/ICity';
import { IState } from '../../models/IState';
import { maskCNPJ } from '../../utils/maskCNPJ';
import { maskPhone } from '../../utils/maskPhone'
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { WaveText } from './WaveText';

interface IValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  companyCNPJ: string;
  ramoAtividade: string;
  state: string;
  city: string;
  message: string;
}

interface IErrors extends Partial<IValues> { }

export const Contact = () => {

  const { language } = useContext(LanguageContext);
  const contactRef = useNav(`${`${(language === "pt" && multiLang.pt.navItem.contact) || (language === "en" && multiLang.en.navItem.contact) || (language === "es" && multiLang.es.navItem.contact)}`}`)

  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [visitor, setVisitor] = useState<IVisitor>({
    id: 0,
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    companyCNPJ: "",
    ramoAtividade: "",
    city: "",
    state: "",
    message: ""

  });

  const [sentData, setSentData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const [errors, setErrors] = useState<IErrors>({});

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value } = e.target
    setVisitor({ ...visitor, [name]: value })
  }
  const validate = (visitor: IVisitor) => {
    const errors: IErrors = {};

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

    if (!visitor.state) {
      errors.state = 'Estado obrigatório';
    }

    if (!visitor.city) {
      errors.city = 'Cidade obrigatória';
    }

    if (!visitor.message) {
      errors.message = 'Mensagem obrigatória';
    }

    return errors;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors = validate(visitor);

    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      setLoading(true);

      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/visitor/sendContact`, {
        fullName: visitor.fullName,
        phoneNumber: visitor.phoneNumber,
        email: visitor.email,
        companyName: visitor.companyName,
        companyCNPJ: visitor.companyCNPJ,
        ramoAtividade: visitor.ramoAtividade,
        state: visitor.state,
        city: visitor.city,
        message: visitor.message

      });
      console.log(response.data);

      setTimeout(() => {
        setLoading(false);
        setVisitor({ id: 0, fullName: "", phoneNumber: "", email: "", companyName: "", companyCNPJ: "", ramoAtividade: "", city: "", state: "", message: "" });
        setErrors({});
        setMessage(true);
        setSentData(true);
        setTimeout(async () => {
          setMessage(false);
        }, 2000);
      }, 2000)

    }
  }

  const getCities = async () => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${visitor.state}/municipios`)
    setCities(response.data);
  }
  const getStates = async () => {

    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
    setStates(response.data);
  }

  useEffect(() => {
    getStates();
    getCities();
  }, [visitor.state]);

  return (

    <section ref={contactRef} className={`${styles.contact}`} id={`${(language === "pt" && multiLang.pt.navItem.contact.toLowerCase()) || (language === "en" && multiLang.en.navItem.contact.toLowerCase()) || (language === "es" && multiLang.es.navItem.contact.toLowerCase())}Section`}>

      <form onSubmit={(e) => onSubmit(e)} className={`${styles.formContainer}`}>

        <h1 className={`${styles.title}`}> Contato</h1>
        <h1 className={`${styles.text}`}>A Mid4u lhe proporciona acompanhamento com profissionais especializados</h1>

        <div className={`${styles.formInline}`}>

          <div className={styles.formGroup}>
            <input type="text" name="fullName" value={visitor.fullName} className={visitor.fullName ? `${styles.valid}` : `${errors.fullName && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>Nome completo <p className={errors.fullName && `${styles.input_required_indicator }`}>*</p></label>
            {visitor.fullName ? "" : errors.fullName && <p className={styles.formError}>{`${errors.fullName}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <input type="text" name="phoneNumber" value={maskPhone(visitor.phoneNumber)} className={visitor.phoneNumber ? `${styles.valid}` : `${errors.phoneNumber && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>Telefone<p className={errors.phoneNumber && `${styles.input_required_indicator }`}>*</p></label>
            {visitor.phoneNumber ? "" : errors.phoneNumber && <p className={styles.formError}>{`${errors.phoneNumber}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <input type="email" name="email" value={visitor.email} className={visitor.email ? `${styles.valid}` : `${errors.email && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>Email <p className={errors.email && `${styles.input_required_indicator }`}>*</p></label>
            {visitor.email ? "" : errors.email && <p className={styles.formError}>{`${errors.email}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <input type="text" name="companyName" value={visitor.companyName} className={visitor.companyName ? `${styles.valid}` : `${errors.companyName && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>Nome da empresa <p className={errors.companyName && `${styles.input_required_indicator }`}>*</p> </label>
            {visitor.companyName ? "" : errors.companyName && <p className={styles.formError}>{`${errors.companyName}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <input type="text" name="companyCNPJ" value={maskCNPJ(visitor.companyCNPJ)} className={visitor.companyCNPJ ? `${styles.valid}` : `${errors.companyCNPJ && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>CNPJ da empresa <p className={errors.companyCNPJ && `${styles.input_required_indicator }`}>*</p></label>
            {visitor.companyCNPJ ? "" : errors.companyCNPJ && <p className={styles.formError}>{`${errors.companyCNPJ}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} className={visitor.ramoAtividade ? `${styles.valid}` : `${errors.ramoAtividade && `${styles.invalid}`}`} onChange={(e) => onChange(e)} />
            <label>Ramo da atividade <p className={errors.ramoAtividade && `${styles.input_required_indicator }`}>*</p></label>
            {visitor.ramoAtividade ? "" : errors.ramoAtividade && <p className={styles.formError}>{`${errors.ramoAtividade}`}</p>}

          </div>

          <div className={styles.formGroup}>
            <select name="state" id="state" value={visitor.state} className={visitor.state ? `${styles.valid}` : `${errors.state && `${styles.invalid}`}`} onChange={(e) => onChange(e)}>
              <option value="">Seleciona o estado...</option>

              {states.map((state, index) => (
                <option key={index} value={state.sigla}>{state.nome}</option>
              ))}
            </select>
            {visitor.state ? "" : errors.state && <p className={styles.formError}>{`${errors.state}`}</p>}
          </div>

          <div className={styles.formGroup}>
            <select name="city" id="city" value={visitor.city} className={visitor.city ? `${styles.valid}` : `${errors.city && `${styles.invalid}`}`} onChange={(e) => onChange(e)}>
              <option value="">Seleciona a cidade...</option>

              {cities.map((city, index) => (
                <option key={index} value={city.nome}>{city.nome}</option>
              ))}
            </select>
            {visitor.city ? "" : errors.city && <p className={styles.formError}>{`${errors.city}`}</p>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <textarea name="message" value={visitor.message} className={visitor.message ? `${styles.valid}` : `${errors.message && `${styles.invalid}`}`} onChange={(e) => onChange(e)}>
          </textarea>
          <label>Mensagem <p className={errors.message && `${styles.input_required_indicator }`}>*</p></label>
          {visitor.message ? "" : errors.message && <p id={`${styles.errorMessage}`} className={styles.formError}>{`${errors.message}`}</p>}
        </div>

        <button disabled={loading}> {loading ? ( <WaveText text='Enviando...'/>) : (<>Enviar</>)} </button>

        {sentData && (message && <Message type='sucess' message='Mensagem enviada com sucesso, e até em breve faremos contato.' />)}

      </form>

    </section>
  );
}