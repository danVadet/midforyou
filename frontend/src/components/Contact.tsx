import React, { useContext, useState } from 'react';
import styles from './Contact.module.css'
import { Visitor } from '../models/Visitor';
import axios from 'axios';
import { Message } from './Message';
import  multiLang  from '../multiLang.json';
import { LanguageContext } from '../Context/LanguageContext';


interface IContactProps {
  contactTitle: string;
  imageLegend: string;
  enterFullName: string;
  fullNameRequiredContact: string;
  enterPhone: string;
  phoneRequiredContact: string;
  enterEmail: string;
  emailRequiredContact: string;
  enterCompanyName: string;
  companyNameRequiredContact: string;
  enterRamoAtividade: string;
  ramoAtividadeRequiredContact: string;
  enterLocal: string;
  localRequiredContact: string;
  enterMessage: string;
  messageRequiredContact: string
  buttonSend: string;
  buttonSending: string;

  contactRef: React.RefObject<HTMLDivElement>;
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

 export const Contact = (props: IContactProps) => {

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
  const [sendingData, setSendingData] = useState(false);
  const [message, setMessage] = useState(false);
  const [errors, setErrors] = useState<IErrors>({});
  const { language, setLanguage } = useContext(LanguageContext);
  

  const emailParrent = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setVisitor({ ...visitor, [target.name]: target.value })
  }

  const validate = (visitor: Visitor) => {
    const errors: { nome?: string; telefone?: string; email?: string; nomeEmpresa?: string; ramoAtividade?: string; local?: string; mensagem?: string } = {};

    if (!visitor.nome) {
      errors.nome = `${props.fullNameRequiredContact}`;
    }

    if (!visitor.telefone) {
      errors.telefone = `${props.phoneRequiredContact}`;
    }

    if (!visitor.email) {
      errors.email = `${`${(language === "pt" && `${multiLang.pt.emailRequiredContact}`) || (language === "en"  && `${multiLang.en.emailRequiredContact}`) ||( language === "es" && `${multiLang.es.emailRequiredContact}`)}`}`;

    } else if (!emailParrent.test(visitor.email)) {
      errors.email = "Email inválido";
    }

    if (!visitor.nomeEmpresa) {
      errors.nomeEmpresa = `${props.companyNameRequiredContact}`;
    }

    if (!visitor.ramoAtividade) {
      errors.ramoAtividade = `${props.ramoAtividadeRequiredContact}`;
    }

    if (!visitor.local) {
      errors.local = `${props.localRequiredContact}`;
    }

    if (!visitor.mensagem) {
      errors.mensagem = `${props.messageRequiredContact}`;
    }

    return errors;
  }
  const resetContactForm = () => {
    setVisitor({ id: 0, nome: "", telefone: "", email: "", nomeEmpresa: "", ramoAtividade: "", local: "", mensagem: "" });
    setErrors({});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(visitor);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      setSendingData(true);
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
      resetContactForm();
      setMessage(true);
      setSendingData(false);
      setSentData(true);
    }
  }

  return (


    <section ref={props.contactRef}>
      <div className={`${styles.contactComponent}`}>
        <div className={`${styles.contactImage}`} >

          <div className={`${styles.contactLegend}`}>
            <span>{props.imageLegend}</span>

          </div>

          <div className={`${styles.contactContainer}`}>
            <h1>{props.contactTitle}</h1>

            {sentData ? <>  {message && <Message type='sucess' message='Mensagem enviada com sucesso, e até em breve faremos contato.' />} </> : <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>

              <div className={`${styles.inputIcon}`}>

                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d=" M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke={`${errors.nome ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"  }`} strokeWidth="2" />
                </svg>


                <input type="text" name="nome" value={visitor.nome} className={visitor.nome ? "" : `${errors.nome && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} placeholder={`${props.enterFullName}`} />
                {visitor.nome ? "" : errors.nome && <p className={styles.formError}>{`${errors.nome}`}</p>}
              </div>

              <div className={`${styles.inputIcon}`}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z" fill={`${errors.telefone ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} />
                </svg>
                <input type="tel" name="telefone" value={maskPhone(visitor.telefone)} className={visitor.telefone ? "" : `${errors.telefone && `${styles.invalid}`}`} onChange={(e) => handleChange(e)} placeholder={`${props.enterPhone}`} />
                {visitor.telefone ? "" : errors.telefone && <p className={styles.formError}>{`${errors.telefone}`}</p>}
              </div>

              <div className={`${styles.inputIcon}`}>

                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke={`${errors.email ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} strokeWidth="2" />
                </svg>
                <input type="text" name="email" value={visitor.email} className={visitor.email && emailParrent.test(visitor.email) ? "" : `${errors.email && `${styles.invalid}`}`} placeholder={`${props.enterEmail}`} onChange={(e) => handleChange(e)} />
                {visitor.email && emailParrent.test(visitor.email) ? "" : errors.email && <p className={styles.formError}>{`${errors.email}`}</p>}

              </div>

              <div className={`${styles.inputIcon}`}>

                <svg fill={`${errors.nomeEmpresa ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} viewBox="0 0 24 24" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" />
                </svg>

                <input type="text" name="nomeEmpresa" value={visitor.nomeEmpresa} className={visitor.nomeEmpresa ? "" : `${errors.nomeEmpresa && `${styles.invalid}`}`} placeholder={`${props.enterCompanyName}`} onChange={(e) => handleChange(e)} />
                {visitor.nomeEmpresa ? "" : errors.nomeEmpresa && <p className={styles.formError}>{`${errors.nomeEmpresa}`}</p>}
              </div>

              <label className={`${styles.inputIcon}`}>

                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`${errors.ramoAtividade ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} width="30" height="30"> <path d=" M15 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h5V4c0-.552.448-1 1-1h6zm1 5H8v11h8V8zM4 8v11h2V8H4zm10-3h-4v1h4V5zm4 3v11h2V8h-2z" /></svg>


                <input type="text" name="ramoAtividade" value={visitor.ramoAtividade} className={visitor.ramoAtividade ? "" : `${errors.ramoAtividade && `${styles.invalid}`}`} placeholder={`${props.enterRamoAtividade}`} onChange={(e) => handleChange(e)} />
                {visitor.ramoAtividade ? "" : errors.ramoAtividade && <p className={styles.formError}>{`${errors.ramoAtividade}`}</p>}

              </label>

              <div className={`${styles.inputIcon}`}>
                <svg viewBox="0 0 24 24" fill="none" width="30" height="30" xmlns="http://www.w3.org/2000/svg"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke={`${errors.local ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} strokeWidth="2" /></svg>

                <input type="text" name="local" value={visitor.local} className={visitor.local ? "" : `${errors.local && `${styles.invalid}`}`} placeholder={`${`${props.enterLocal}`}`} onChange={(e) => handleChange(e)} />
                {visitor.local ? "" : errors.local && <p className={styles.formError}>{`${errors.local}`}</p>}
              </div>

              <div className={`${styles.inputIcon}`}>
                <svg viewBox="0 0 24 24" fill="none" width="30" height="30" className={styles.mensagemIcon} xmlns="http://www.w3.org/2000/svg"> <path d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke={`${errors.mensagem ? "rgb(240, 19, 11)" : "rgb(0, 178, 239)"}`} strokeWidth="2" /> </svg>

                <textarea name="mensagem" value={visitor.mensagem} className={visitor.mensagem ? "" : `${errors.mensagem && `${styles.invalid}`}`} placeholder={`${props.enterMessage}`} onChange={(e) => handleChange(e)}>
                </textarea>
                {visitor.mensagem ? "" : errors.mensagem && <p className={styles.formError}>{`${errors.mensagem}`}</p>}


              </div>

              {sendingData ? <button className={`${styles.sendingButton}`}> {props.buttonSending} <svg className={styles.spinner} viewBox="0 0 50 50"><circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg></button> : <button className={`${styles.sendButton}`} >{props.buttonSend}</button>}
              {message && <Message type='sucess' message='Mensagem enviada com sucesso, e até em breve faremos contato.' />}
            </form>}

          </div>
        </div>

      </div>

    </section>
  );
}
