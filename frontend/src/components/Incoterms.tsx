import styles from './Incoterms.module.css'
import incotermsIcons from '../icotermsIcons.json'
import { Incoterm } from '../models/Incoterm';
import { useState } from 'react';
import TooltipIncoterm from './TooltipIncoterm';

interface IIncotermProps {
    
    incoterms: Incoterm[]
    costLabel: string;
    riskLabel: string;
    insuranceLabel: string;
    freight: string;
    modal: string;
    moreDetails: string;
    seller: string;
    buyer: string;
}

const Incoterms = (props: IIncotermProps) => {
  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm | undefined>({
    id: 0,
    name:  "Ex Works - Saída de fábrica",
    acronym: "EXW",
    costStage: 0,
    riskStage: 0,
    safetyStage: 0,
    freightDetails: "Responsabilidade da fábrica",
    modal:  "Aquaviário",
    moreDetails: "Ex Works (EXW) coloca a máxima responsabilidade sobre o comprador, incluindo todos os custos de transporte, riscos e liberação de exportação e importação. O vendedor é apenas responsável por disponibilizar as mercadorias em suas instalações ou outro local nomeado (fábrica, armazém, etc.). O comprador arca com todos os custos e riscos envolvidos em levar as mercadorias até o destino desejado."

  },);
  const [ options ] = useState<Incoterm[]>([{
    id: props.incoterms[0].id,
    name:  props.incoterms[0].name,
    acronym: props.incoterms[0].acronym,
    costStage: props.incoterms[0].costStage,
    riskStage: props.incoterms[0].riskStage,
    safetyStage: props.incoterms[0].safetyStage,
    freightDetails: props.incoterms[0].freightDetails,
    modal:  props.incoterms[0].modal,
    moreDetails: props.incoterms[0].moreDetails
  },
  {
    id: props.incoterms[1].id,
    name:  props.incoterms[1].name,
    acronym: props.incoterms[1].acronym,
    costStage: props.incoterms[1].costStage,
    riskStage: props.incoterms[1].riskStage,
    safetyStage: props.incoterms[1].safetyStage,
    freightDetails: props.incoterms[1].freightDetails,
    modal:  props.incoterms[1].modal,
    moreDetails: props.incoterms[1].moreDetails
  },
  {
    id: props.incoterms[2].id,
    name:  props.incoterms[2].name,
    acronym: props.incoterms[2].acronym,
    costStage: props.incoterms[2].costStage,
    riskStage: props.incoterms[2].riskStage,
    safetyStage: props.incoterms[2].safetyStage,
    freightDetails: props.incoterms[2].freightDetails,
    modal:  props.incoterms[2].modal,
    moreDetails: props.incoterms[2].moreDetails
  },

  {
    id: props.incoterms[3].id,
    name:  props.incoterms[3].name,
    acronym: props.incoterms[3].acronym,
    costStage: props.incoterms[3].costStage,
    riskStage: props.incoterms[3].riskStage,
    safetyStage: props.incoterms[3].safetyStage,
    freightDetails: props.incoterms[3].freightDetails,
    modal:  props.incoterms[3].modal,
    moreDetails: props.incoterms[3].moreDetails
  },
  {
    id: props.incoterms[4].id,
    name:  props.incoterms[4].name,
    acronym: props.incoterms[4].acronym,
    costStage: props.incoterms[4].costStage,
    riskStage: props.incoterms[4].riskStage,
    safetyStage: props.incoterms[4].safetyStage,
    freightDetails: props.incoterms[4].freightDetails,
    modal:  props.incoterms[4].modal,
    moreDetails: props.incoterms[4].moreDetails
  },
  {
    id: props.incoterms[5].id,
    name:  props.incoterms[5].name,
    acronym: props.incoterms[5].acronym,
    costStage: props.incoterms[5].costStage,
    riskStage: props.incoterms[5].riskStage,
    safetyStage: props.incoterms[5].safetyStage,
    freightDetails: props.incoterms[5].freightDetails,
    modal:  props.incoterms[5].modal,
    moreDetails: props.incoterms[5].moreDetails
  },

  {
    id: props.incoterms[6].id,
    name:  props.incoterms[6].name,
    acronym: props.incoterms[6].acronym,
    costStage: props.incoterms[6].costStage,
    riskStage: props.incoterms[6].riskStage,
    safetyStage: props.incoterms[6].safetyStage,
    freightDetails: props.incoterms[6].freightDetails,
    modal:  props.incoterms[6].modal,
    moreDetails: props.incoterms[6].moreDetails
  },

  {
    id: props.incoterms[7].id,
    name:  props.incoterms[7].name,
    acronym: props.incoterms[7].acronym,
    costStage: props.incoterms[7].costStage,
    riskStage: props.incoterms[7].riskStage,
    safetyStage: props.incoterms[7].safetyStage,
    freightDetails: props.incoterms[7].freightDetails,
    modal:  props.incoterms[7].modal,
    moreDetails: props.incoterms[7].moreDetails
  },

  {
    id: props.incoterms[8].id,
    name:  props.incoterms[8].name,
    acronym: props.incoterms[8].acronym,
    costStage: props.incoterms[8].costStage,
    riskStage: props.incoterms[8].riskStage,
    safetyStage: props.incoterms[8].safetyStage,
    freightDetails: props.incoterms[8].freightDetails,
    modal:  props.incoterms[8].modal,
    moreDetails: props.incoterms[8].moreDetails
  },

  {
    id: props.incoterms[9].id,
    name:  props.incoterms[9].name,
    acronym: props.incoterms[9].acronym,
    costStage: props.incoterms[9].costStage,
    riskStage: props.incoterms[9].riskStage,
    safetyStage: props.incoterms[9].safetyStage,
    freightDetails: props.incoterms[9].freightDetails,
    modal:  props.incoterms[9].modal,
    moreDetails: props.incoterms[9].moreDetails
  },

  {
    id: props.incoterms[10].id,
    name:  props.incoterms[10].name,
    acronym: props.incoterms[10].acronym,
    costStage: props.incoterms[10].costStage,
    riskStage: props.incoterms[10].riskStage,
    safetyStage: props.incoterms[10].safetyStage,
    freightDetails: props.incoterms[10].freightDetails,
    modal:  props.incoterms[10].modal,
    moreDetails: props.incoterms[10].moreDetails
  },
]);

  const handleChangeSelectIncoterm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected =  options.find(option => option.id === parseInt(e.target.value));
    setSelectedIncoterm(selected);
  }

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
                {props.costLabel}
              </div>
              <div className={`${styles.captions__risk}`}>
                <div className={`${styles.square}`}></div>
                {props.riskLabel}
              </div>
              <div className={`${styles.captions__safety}`}>
                <div className={`${styles.square}`}></div>
                {props.insuranceLabel}
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

              <div className={`${styles.factory__bar} ${selectedIncoterm?.costStage === 0 && styles.costStage0}
                 ${selectedIncoterm?.costStage === 1 && styles.costStage1} ${selectedIncoterm?.costStage === 2 && styles.costStage2}
                 ${selectedIncoterm?.costStage === 3 && styles.costStage3} ${selectedIncoterm?.costStage === 4 && styles.costStage4}
                 ${selectedIncoterm?.costStage === 5 && styles.costStage5} ${selectedIncoterm?.costStage === 6 && styles.costStage6}
                 ${selectedIncoterm?.costStage === 7 && styles.costStage7} ${selectedIncoterm?.costStage === 8 && styles.costStage8}`} >
              <span>{props.seller}</span>
              </div>

              <div className={`${styles.customer__bar}`}>
                <span>{props.buyer}</span>
              </div>
            </div>
            <div className={`${styles.incotermStage} ${styles.incotermStage__risk}`}>
            <div className={`${styles.factory__bar} ${selectedIncoterm?.riskStage === 0 && styles.riskStage0}
                  ${selectedIncoterm?.riskStage === 1 && styles.riskStage1} ${selectedIncoterm?.riskStage === 2 && styles.riskStage2}
                  ${selectedIncoterm?.riskStage === 3 && styles.riskStage3} ${selectedIncoterm?.riskStage === 4 && styles.riskStage4}
                  ${selectedIncoterm?.riskStage === 5 && styles.riskStage5} ${selectedIncoterm?.riskStage === 6 && styles.riskStage6}
                  ${selectedIncoterm?.riskStage === 7 && styles.riskStage7} ${selectedIncoterm?.riskStage === 8 && styles.riskStage8}`} >
              <span>{props.seller}</span>
              </div>

              <div className={`${styles.customer__bar}`}>
                <span>{props.buyer}</span>
              </div>
            </div>

            <div className={`${styles.incotermStage} ${styles.incotermStage__safety}`}>

            <div className={`${styles.factory__bar} ${selectedIncoterm?.safetyStage === 0 && styles.safetyStage0}
                 ${selectedIncoterm?.safetyStage === 1 && styles.safetyStage1}  ${selectedIncoterm?.safetyStage === 2 && styles.safetyStage2}
                 ${selectedIncoterm?.safetyStage === 3 && styles.safetyStage3} ${selectedIncoterm?.safetyStage === 4 && styles.safetyStage4}
                 ${selectedIncoterm?.safetyStage === 5 && styles.safetyStage5} ${selectedIncoterm?.safetyStage === 6 && styles.safetyStage6}
                 ${selectedIncoterm?.safetyStage === 7 && styles.safetyStage7} ${selectedIncoterm?.safetyStage === 8 && styles.safetyStage8}`} >
              <span>{props.seller}</span>
              </div>
              <div className={`${styles.customer__bar}`}>
                <span>{props.buyer}</span>
              </div>
            </div>
          </div>
          <div>
          </div>

          <h2 className={`${styles.incotermTitle}`}>{`${selectedIncoterm?.acronym} - ${selectedIncoterm?.name}`}</h2>
          <div className={`${styles.incotermsInformations}`}>
            <span className={`${styles.detail__freight__details}`}>
              <strong>{props.freight}:</strong>
              <span>{selectedIncoterm?.freightDetails}</span>
            </span>
            <span className={`${styles.detail__risk__details}`}>
              <strong>{props.modal}:</strong>
              <span>{selectedIncoterm?.modal}</span>
            </span>
            <span className={`${styles.detail__more__details}`}>
              <strong>{props.moreDetails}:</strong>
              <span>{selectedIncoterm?.moreDetails}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Incoterms;