import axios from 'axios';
import styles from './Incoterms.module.css'
import incotermsIcons from '../icotermsIcons.json'

import { Incoterm } from '../models/Incoterm';
import { useEffect, useState } from 'react';
import TooltipIncoterms from './TooltipIncoterm';
import TooltipIncoterm from './TooltipIncoterm';

const Incoterms = () => {
  const [options, setOptions] = useState<Incoterm[]>([]);
  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm>({
    id: 0,
    name: "",
    acronym: "",
    costStage: 0,
    riskStage: 0,
    safetyStage: 0,
    freightDetails: "",
    modal: "",
    moreDetails: ""

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
          <select onChange={(e) => handleChangeSelectIncoterm(e)}>
            <option>Selecionar...</option>
            {options.map((option, index) => (
              <option value={option.id} key={index}>{option.acronym}</option>
            ))}
          </select>

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
        </div>
        <div className={`${styles.incotermsRight}`}>
          
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

              {selectedIncoterm.costStage === 0 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.costStage === 0 ? "calc(calc(100% / 19) * 2)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.costStage === 1 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.costStage === 1 ? "calc(calc(100% / 19) * 4)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.costStage === 2 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.costStage === 2 ? "calc(calc(100% / 19) * 6)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}

                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
            <div className={`${styles.incotermStage} ${styles.incotermStage__risk}`}>
            {selectedIncoterm.riskStage === 0 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.riskStage === 0 ? "calc(calc(100% / 19) * 2)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.riskStage === 1 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.riskStage === 1 ? "calc(calc(100% / 19) * 4)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.riskStage === 2 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.riskStage === 2 ? "calc(calc(100% / 19) * 6)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                
                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
            <div className={`${styles.incotermStage} ${styles.incotermStage__safety}`}>
            {selectedIncoterm.safetyStage === 0 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.safetyStage === 0 ? "calc(calc(100% / 19) * 2)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.safetyStage === 1 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.safetyStage === 1 ? "calc(calc(100% / 19) * 4)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}
                {selectedIncoterm.safetyStage === 2 ? 
                             <div className={`${styles.factory__bar}`} style={{width: selectedIncoterm.safetyStage === 2 ? "calc(calc(100% / 19) * 6)" : "" }}>
                    <span>Fábrica</span>
                    <span></span>
                </div> : <></>}

                <div className={`${styles.customer__bar}`}>
                  <span>Cliente</span>
                </div>
            </div>
          </div>

          <h2>{`${selectedIncoterm.acronym} - ${selectedIncoterm.name}`}</h2>

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