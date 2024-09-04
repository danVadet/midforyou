import axios from 'axios';
import styles from './Incoterms.module.css'
import { Incoterm } from '../models/Incoterm';
import { useEffect, useState } from 'react';

const Incoterms = () => {
    const [options, setOptions] = useState<Incoterm[]>([]);
    const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm>({
        id: 0,
        nome: "",
        acronym: "",
        costStage: 0,
        riskStage: 0,
        safetyStage: 0,
        freightDetails: "",
        riskDetails: "",
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

    const handleChangeSelectIncoterm = async  (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value =  e.target.value;
        const response = await axios.get(`http://localhost:5077/incoterms/${value}`);
        console.log(response.data);
        setSelectedIncoterm(response.data);

    }
    useEffect(()  => {
      getOptions();
}, []);


    return (
        <>

        <h1>Incoterms</h1>
        <div className={`${styles.incotermsComponent}`}>
        <div className={`${styles.incotermsInformations}`}>

        
            
        <select onChange={(e) => handleChangeSelectIncoterm(e)}>
                <option>Selecionar...</option>
                {options.map((option, index) => (
                   <option value={option.id} key={index}>{option.acronym}</option>
                ))}
            </select>
            <div>
            <h2>{`${selectedIncoterm.acronym} - ${selectedIncoterm.nome}`}</h2>
            </div>

        </div>
        <div className={`${styles.incotermStages}`}>
            <div className={`${styles.barCaptions_mobile}`}>
              <p>Fábrica</p>
              <p>Cliente</p>
            </div>
            <div className={`${styles.incotermStage}`}>
            <div className={`${styles.incotermStage__cost}`}>
              <div className={`factory__bar size__${selectedIncoterm.costStage}`}>
                <p>Fábrica</p>
              </div>
              <div className="customer__bar">
                <p>Cliente</p>
              </div>
            </div>
            </div>
            <div className={`${styles.incotermStage}`}>
            <div className={`${styles.incotermStage__risk}`}>
              <div className={`factory__bar size__${selectedIncoterm.riskStage}`}>
                <p>Fábrica</p>
              </div>
              <div className="customer__bar">
                <p>Cliente</p>
              </div>
            </div>
            </div>
            <div className={`${styles.incotermStage}`}>
            <div className={`${styles.incotermStage__safety}`}>
              <div className={`factory__bar size__${selectedIncoterm.safetyStage}`}>
                <p>Fábrica</p>
              </div>
              <div className="customer__bar">
                <p>Cliente</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="detailLine">
          <div className="captions">
            <div className="captionsCost">
              <div className="square"></div>
              Custos
            </div>
            <div className="captionsRisk">
              <div className="square"></div>
              Riscos
            </div>
            <div className="captionsSafety">
              <div className="square"></div>
              Seguro
            </div>
          </div>

          <div className="first__column">
            <p className="detail__freight__details">
              <strong>Frete:</strong>
              <p>{selectedIncoterm.freightDetails}</p>
            </p>
            <p className="detail__risk__details">
              <strong>Modal:</strong>
              <p>{selectedIncoterm.riskDetails}</p>
            </p>
          </div>
          <div className="second-column">
            <p className="detail more-details">
              <strong>Mais detalhes:</strong>
              <p>{selectedIncoterm.moreDetails}</p>
            </p>
          </div>
        </div>
        </>
    )
}

export default Incoterms;