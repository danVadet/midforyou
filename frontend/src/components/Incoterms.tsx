import axios from 'axios';
import styles from './Incoterms.module.css'
import incotermsIcons from '../icotermsIcons.json'

import { Incoterm } from '../models/Incoterm';
import { useEffect, useState } from 'react';
import TooltipIncoterm from './TooltipIncoterm';

const Incoterms = () => {
  const [options, setOptions] = useState<Incoterm[]>([]);
  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm>({
    id: 0,
    name: "" || "EXW",
    acronym: "" || "Ex Works - Saída de fábrica",
    costStage: 0,
    riskStage: 0,
    safetyStage: 0,
    freightDetails: "" || "Responsabilidade da fábrica",
    modal: ""  || "Aquaviário",
    moreDetails: "" ||  "Ex Works (EXW) coloca a máxima responsabilidade sobre o comprador, incluindo todos os custos de transporte, riscos e liberação de exportação e importação. O vendedor é apenas responsável por disponibilizar as mercadorias em suas instalações ou outro local nomeado (fábrica, armazém, etc.). O comprador arca com todos os custos e riscos envolvidos em levar as mercadorias até o destino desejado."

  });


  const getOptions = async () => {

    try {
      const response = await axios.get(`http://localhost:5077/incoterms`);
      setOptions(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeSelectIncoterm = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const response = await axios.get(`http://localhost:5077/incoterms/${value}`);
    console.log(response.data);
    setSelectedIncoterm(response.data);

  }
  useEffect(() => {
    getOptions();
  }, []);


  return (
    <>

      <h1>Incoterms</h1>
      <div className={`${styles.incotermsComponent}`}>

        <div className={`${styles.incotermsLeft}`}>
          <select className={`${styles.selectedIncoterm}`} onChange={(e) => handleChangeSelectIncoterm(e)}>
            {options.map((option, index) => (
              <option value={option.id} key={index}>{option.acronym}</option>
            ))}
          </select>

         
        </div>
        <div className={`${styles.incotermsRight}`}>
        <div className={`${styles.deail__line}`}>
            <div className={`${styles.captions}`}>
              <div className={`${styles.captions__cost}`}>
                <div className={`${styles.square}`}></div>
                Custos
              </div>
              <div className={`${styles.captions__risk}`}>
                <div className={`${styles.square}`}></div>
                Riscos
              </div>
              <div className={`${styles.captions__safety}`}>
                <div className={`${styles.square}`}></div>
                Seguro
              </div>
            </div>
          </div>
          
          <div className={`${styles.inco}`}>
            {incotermsIcons.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                  
               <>
               <img src={incotermIcon.icon} />
               <h4>{incotermIcon.name}</h4>
               </>

                </TooltipIncoterm>
              
            ))}
               
          </div>
             
     

          <div className={`${styles.incotermStages}`}>
         
            <div className={`${styles.incotermStage} ${styles.incotermStage__cost}`}>

             
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.costStage === 0 ? "calc(calc(100% / 18) * 2)" : ""  
                             ||  selectedIncoterm.costStage === 1 ? "calc(calc(100% / 22) * 4)" : ""  ||  selectedIncoterm.costStage === 2 ? "calc(calc(100% / 17) * 6)" : "" 
                             ||  selectedIncoterm.costStage === 3 ? "calc(calc(100% / 20) * 8)" : "" ||  selectedIncoterm.costStage === 4 ? "calc(calc(100% / 19) * 10)" : ""
                             || selectedIncoterm.costStage === 5 ? "calc(calc(100% / 20) * 12 )" : "" || selectedIncoterm.costStage === 6 ? "calc(calc(100% / 23) * 14 )" : "" 
                             ||  selectedIncoterm.costStage === 7 ? "calc(calc(100% / 22.5) * 16 )" : ""  || selectedIncoterm.costStage === 8 ? "calc(calc(100% / 18) * 18 )" : "" }}>
                    <span>Fábrica</span>
                </div>


               

                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
            <div className={`${styles.incotermStage} ${styles.incotermStage__risk}`}>
            
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.riskStage === 0 ? "calc(calc(100% / 18) * 2)" : ""  
                             || selectedIncoterm.riskStage === 1 ? "calc(calc(100% / 22) * 4)" : "" || selectedIncoterm.riskStage === 2 ? "calc(calc(100% / 20 ) * 6)" : "" 
                             ||   selectedIncoterm.riskStage === 3 ? "calc(calc(100% / 20) * 8)" : "" ||  selectedIncoterm.riskStage === 4 ? "calc(calc(100% / 19) * 10)" : ""
                             || selectedIncoterm.riskStage === 5 ? "calc(calc(100% / 20) * 12 )" : "" || selectedIncoterm.riskStage === 6 ? "calc(calc(100% / 23) * 14 )" : "" 
                             ||  selectedIncoterm.riskStage === 7 ? "calc(calc(100% / 22.5) * 16 )" : ""  || selectedIncoterm.riskStage === 8 ? "calc(calc(100% / 18) * 18 )" : "" }}>
                    <span>Fábrica</span>
                </div> 
                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
            <div className={`${styles.incotermStage} ${styles.incotermStage__safety}`}>

                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.safetyStage === 0 ? "calc(calc(100% / 18) * 2)" : ""  
                             || selectedIncoterm.safetyStage === 1 ? "calc(calc(100% / 22) * 4)" : "" ||   selectedIncoterm.safetyStage === 2 ? "calc(calc(100% / 20) * 6)" : ""  
                             ||  selectedIncoterm.safetyStage === 3 ? "calc(calc(100% / 20) * 8)" : "" ||  selectedIncoterm.safetyStage === 4 ? "calc(calc(100% / 19) * 10)" : ""
                             || selectedIncoterm.safetyStage === 5 ? "calc(calc(100% / 20) * 12 )" : "" || selectedIncoterm.safetyStage === 6 ? "calc(calc(100% / 23) * 14 )" : "" 
                             ||  selectedIncoterm.safetyStage === 7 ? "calc(calc(100% / 22.5) * 16 )" : ""  || selectedIncoterm.safetyStage === 8 ? "calc(calc(100% / 18) * 18 )" : ""}}>
                    <span>Fábrica</span>
                </div> 
                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
          </div>
          <div>
            
          </div>

          <h2 className={`${styles.incotermTitle}`}>{`${selectedIncoterm.acronym} - ${selectedIncoterm.name}`}</h2>

          <div className={`${styles.incotermsInformations}`}>
            <span className={`${styles.detail__freight__details}`}>
              <strong>Frete:</strong>
              <span>{selectedIncoterm.freightDetails}</span>
            </span>
            <span className={`${styles.detail__risk__details}`}>
              <strong>Modal:</strong>
              <span>{selectedIncoterm.modal}</span>
            </span>
            <span className={`${styles.detail__more__details}`}>
              <strong>Mais detalhes:</strong>
              <span>{selectedIncoterm.moreDetails}</span>
            </span>

          </div>

        </div>

      </div>

    </>
  )
}

export default Incoterms;