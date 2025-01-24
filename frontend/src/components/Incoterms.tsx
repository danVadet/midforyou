import styles from './Incoterms.module.css'
import { Incoterm } from '../models/Incoterm';
import { useEffect, useState } from 'react';
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
  agreedPlace: string;
  loadPort: string;
  destinationPort: string;
  destinationPlace: string;
  destination: string;
  
  incotermsRef: React.RefObject<HTMLDivElement>

}

const Incoterms = (props: IIncotermProps) => {

  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm | undefined>({
    id: props.incoterms[0].id,
    name: props.incoterms[0].name,
    acronym: props.incoterms[0].acronym,
    costStage: props.incoterms[0].costStage,
    riskStage: props.incoterms[0].riskStage,
    safetyStage: props.incoterms[0].safetyStage,
    freightDetails: props.incoterms[0].freightDetails,
    modal: props.incoterms[0].modal,
    moreDetails: props.incoterms[0].moreDetails

  },);


  const handleChangeSelectIncoterm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = props.incoterms.find(incoterm => incoterm.id === parseInt(e.target.value));
    setSelectedIncoterm(selected);
  }
  return (
    <section ref={props.incotermsRef}>

      <div className={`${styles.incotermsComponent}`}>
      <h1>Incoterms</h1>
      <div className={`${styles.incotermsContainer}`}>

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
              <div className={`${styles.caption__seller}`}>
                <div className={`${styles.square}`}></div>
                {props.costLabel}
              </div>
              <div className={`${styles.caption__buyer}`}>
                <div className={`${styles.square}`}></div>
                {props.riskLabel}
              </div>
              <div className={`${styles.caption__transferRisk}`}>
                <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
                {props.insuranceLabel}
              </div>
            </div>
          </div>



          <div className={`${styles.inco}`}>
            {props.iconsIcoterm.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                <>
                
                  <img src={incotermIcon.icon} />
                  <h5>{incotermIcon.name}</h5>
                </>
              </TooltipIncoterm>
            ))}
          </div>
          <hr className={`${styles.gary}  ${styles.gary0}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary1}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary2}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary3}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary4}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary5}`}></hr>
          <hr className={`${styles.gary}  ${styles.gary6}`}></hr>


          <div className={`${styles.incotermStages}`}>            <div className={`${styles.incotermStage} ${styles.incotermStage__cost}`}>
            <div className={`${styles.factory__bar} ${selectedIncoterm?.costStage === 0 && styles.costStage0}
                 ${selectedIncoterm?.costStage === 1 && styles.costStage1} ${selectedIncoterm?.costStage === 2 && styles.costStage2}
                 ${selectedIncoterm?.costStage === 3 && styles.costStage3} ${selectedIncoterm?.costStage === 4 && styles.costStage4}
                 ${selectedIncoterm?.costStage === 5 && styles.costStage5} ${selectedIncoterm?.costStage === 6 && styles.costStage6}
                 ${selectedIncoterm?.costStage === 7 && styles.costStage7} ${selectedIncoterm?.costStage === 8 && styles.costStage8}`} >
              <span>{selectedIncoterm?.acronym}</span>
            </div>

            {selectedIncoterm?.acronym === "EXW" && <div className={`${styles.transferRisk}  ${styles.transferRisk0}`}>


              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}

            {selectedIncoterm?.acronym === "FCA" && <div className={`${styles.transferRisk}  ${styles.transferRisk1}`}>

              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}
            {selectedIncoterm?.acronym === "FAS" && <div className={`${styles.transferRisk}  ${styles.transferRisk2}`}>


              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}
            {selectedIncoterm?.acronym === "FOB" && <div className={`${styles.transferRisk}  ${styles.transferRisk3}`}>


              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}
            {selectedIncoterm?.acronym === "CFR" && <div className={`${styles.transferRisk}  ${styles.transferRisk3}`}>


              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}

            {selectedIncoterm?.acronym === "CIF" && <div className={`${styles.transferRisk}  ${styles.transferRisk3}`}>

              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}

            {selectedIncoterm?.acronym === "CPT" && <div className={`${styles.transferRisk}  ${styles.transferRisk1}`}>


              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>


            </div>}

            {selectedIncoterm?.acronym === "CIP" && <div className={`${styles.transferRisk}  ${styles.transferRisk1}`}>
              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
            </div>
            }
              {selectedIncoterm?.acronym === "CIP" && <div className={`${styles.transferRisk}  ${styles.transferRisk1}`}>
              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
            </div>
            }
                {selectedIncoterm?.acronym === "DPU" && <div className={`${styles.transferRisk}  ${styles.transferRisk4}`}>
              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
            </div>
            }
            {selectedIncoterm?.acronym === "DAP" && <div className={`${styles.transferRisk}  ${styles.transferRisk5}`}>
              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
            </div>
            }

            {selectedIncoterm?.acronym === "DDP" && <div className={`${styles.transferRisk}  ${styles.transferRisk5}`}>
              <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
            </div>
            }

            <div className={`${styles.customer__bar}`}>
              {selectedIncoterm?.acronym === "EXW" && <span>{props.agreedPlace}</span> }
              {selectedIncoterm?.acronym === "FCA" && <span>{props.agreedPlace}</span> }
              {selectedIncoterm?.acronym === "FAS" && <span>{props.loadPort}</span> }
              {selectedIncoterm?.acronym === "FOB" && <span>{props.loadPort}</span> }
              {selectedIncoterm?.acronym === "CFR" && <span>{props.destinationPort}</span> }
              {selectedIncoterm?.acronym === "CIF" && <span>{props.destinationPort}</span> }
              {selectedIncoterm?.acronym === "CPT" && <span>{props.destinationPlace}</span> }
              {selectedIncoterm?.acronym === "CIP" && <span>{props.destinationPlace}</span> }
              {selectedIncoterm?.acronym === "DPU" && <span>{props.destinationPlace}</span> }
              {selectedIncoterm?.acronym === "DAP" && <span>{props.destination}</span> }
              {selectedIncoterm?.acronym === "DDP" && <span>{props.destination}</span> }

            </div>
          </div>
          </div>
          <div>
          </div>

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
        
      </div>

      
    </section>
  )
}

export default Incoterms;