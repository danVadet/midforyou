import styles from './Incoterms.module.css'
import { Incoterm } from '../models/Incoterm';
import { useState } from 'react';
import TooltipIncoterm from './TooltipIncoterm';
import { IconIcoterm } from '../models/IconIcoterm';

interface IIncotermProps {

  incoterms: Incoterm[]
  iconsIcoterm: IconIcoterm[]
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
    id: props.incoterms[0].id,
    name:  props.incoterms[0].name,
    acronym:  props.incoterms[0].acronym,
    costStage:  props.incoterms[0].costStage,
    riskStage:  props.incoterms[0].riskStage,
    safetyStage:  props.incoterms[0].safetyStage,
    freightDetails:  props.incoterms[0].freightDetails,
    modal:  props.incoterms[0].modal,
    moreDetails: props.incoterms[0].moreDetails

  },);

  const handleChangeSelectIncoterm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = props.incoterms.find(incoterm => incoterm.id === parseInt(e.target.value));
    setSelectedIncoterm(selected);
  }

  return (
    <>

      <h1>Incoterms</h1>
      <div className={`${styles.incotermsComponent}`}>

        <div className={`${styles.incotermsLeft}`}>
          <select className={`${styles.selectedIncoterm}`} onChange={(e) => handleChangeSelectIncoterm(e)}>
            {props.incoterms.map((incoterm, index) => (
              <option value={incoterm.id} key={index}>{incoterm.acronym}</option>
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
            {props.iconsIcoterm.map((incotermIcon, index) => (
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