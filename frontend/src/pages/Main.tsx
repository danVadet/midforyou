import React, { useEffect, useState } from 'react';
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';
import Map from '../components/Map';
import Brand from '../components/Brand';
import Incoterms from '../components/Incoterms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const  Main = () => {

    const [lang, setLang] = useState('');
  const [content, setContent] = useState({
    home: "Início",
    about: "Serviços",
    container: "Contêineres",
    contact: "Contato",
    brandInfo1: "Torne sua experiência com o comércio exterior mais eficiente e segura.",
    brandInfo2: "Somos o meio para você importar e exportar com segurança!",
    aboutInfo1: "Desde a prospecção de fornecedores até a nacionalização da mercadoria.",
    aboutInfo2: "As Trading Companies são empresas especializadas em Comércio Exterior que facilitam processos de importação e exportação entre diferentes países, intermediando a negociação entre fornecedor e cliente de forma segura e contribuindo para a comercialização internacional de produtos de mercados variados.",
    aboutInfo3: "A Mid4u é uma Trading Company com sede em Cajazeiras, no Sertão do Estado da Paraíba, atuando no Comércio Exterior desde o ano de 2017, com especialidade em importação, exportação e intermediação comercial internacional.",
    aboutInfo4: "Possuímos Benefício Fiscal de ICMS, concedido através de Termo de Acordo de Regime Especial (TARE), pela Secretaria da Fazenda do Estado da Paraíba. Da prospecção de fornecedores até a nacionalização da mercadoria, a Mid4u cuida do seu processo de importação e exportação com transparência e segurança.",
    card_1_title: "Acessoria comercial internacional",
    card_1_description: "Prospecção de fornecedores, envio e recebimento de amostras para verificação de qualidade, negociação internacional, fiscalização de produção das mercadorias e o acompanhamento da carga dos produtos no contêiner. Tudo isso é feito visando a garantir a satisfação dos clientes e a qualidade dos produtos comercializados de forma internacional.",
    card_2_title: "Análise aduaneira",
    card_2_description: "Análise de mercado e viabilidade da operação, avaliação do tratamento administrativo e tributário conforme NCM/SH, e prestação de suporte para a certificação junto aos órgãos anuentes, como INMETRO, ANVISA, MAPA, entre outros. Esses processos são essenciais para assegurar que a operação seja realizada de forma adequada e legal, minimizando riscos e maximizando os resultados financeiros.",
    card_3_title: "Importação e Exportação",
    card_3_description: "Análise documental, gestão de nacionalização de mercadorias estrangeiras, desenvolvimento de marca própria (OEM) e de embalagens, previsão de custos para importação/exportação, fechamento de câmbio e seguro internacional, acompanhamento do desembaraço aduaneiro e gestão logística nacional e internacional. Todos esses serviços visam garantir que as operações de importação e exportação sejam realizadas de forma eficiente e lucrativa, com um mínimo de riscos e custos possíveis.",
    card_4_title: "Labatório de Qualidade",
    card_4_description: "Análise de amostras, conferência metrológica dos produtos, desenhos 2D e 3D, engenharia reversa e controle de qualidade. Esses serviços são essenciais para avaliar as características dos produtos, identificar possíveis falhas, realizar melhorias e garantir que os padrões de qualidade estejam em conformidade com as normas e regulamentações vigentes.",
    contactTitle: "Contato",
    buttonSend: "Enviar"

  });

  useEffect (() => {

    if(window.location.hash) {
         console.log(lang);

    }



  }, [lang, setLang])
  
  return (
    <div>


      <Navbar engLang={lang} espLang={''} home={content.home} about={content.about} container={content.container} contact={content.contact} setContent={setContent}></Navbar>
      <Tax></Tax>
       <Brand brandInfo1={content.brandInfo1} brandInfo2={content.brandInfo2} setContent={setContent}></Brand>
       <section className={`${styles.about}`} id="about">
                    <About aboutInfo1={content.aboutInfo1} aboutInfo2={content.aboutInfo2} aboutInfo3={content.aboutInfo3} aboutInfo4={content.aboutInfo4} setContent={setContent}  />
                    <AboutServices card_1_title={content.card_1_title} 
                                   card_1_description={content.card_1_description} 
                                   card_2_title={content.card_2_title} 
                                   card_2_description={content.card_2_description}
                                   card_3_title={content.card_3_title}
                                   card_3_description={content.card_3_description}
                                   card_4_title={content.card_4_title}
                                   card_4_description={content.card_4_description}
                                   setContent={setContent}
                                    />
                </section>


                <section className={`${styles.conteiners}`} id="conteiners">
                <Conteiner/>
                </section>
                 
       <section className={`${styles.contact}`} id="incoterms">
               <Incoterms/>
                </section>
                <Map></Map>
            
       <section className={`${styles.contact}`} id="contact">
               <Contact contactTitle={content.contactTitle} buttonSend={content.buttonSend} setContent={setContent}/>
                </section>

       <Footer></Footer>
    </div>
  );
}

export default Main;
