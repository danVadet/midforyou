import React, { useState } from "react";
import IncotermsWrapper from "./Incoterms2.style";
import { Incoterm } from "../models/Incoterm";
import { IconIcoterm } from "../models/IconIcoterm";
import TooltipIncoterm from "./TooltipIncoterm";
import styles from "./Incoterms.module.css";

interface IProps {
  incotermsRef: React.RefObject<HTMLDivElement>;
  sellerLabel: string;
  buyerLabel: string;
  riskTransferLabel: string;
  incoterms: Incoterm[];
  iconIcoterms: IconIcoterm[];
  freight: string;
  modal: string;
  moreDetails: string;
}

const Incoterms = (props: IProps) => {

  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm | undefined>({
                id: props.incoterms[0].id,
                name: props.incoterms[0].name,
                acronym: props.incoterms[0].acronym,
                costStage: props.incoterms[0].costStage,
                riskStage: props.incoterms[0].riskStage,
                insuranceStage: props.incoterms[0].insuranceStage,
                freightDetails: props.incoterms[0].freightDetails,
                modal: props.incoterms[0].modal,
                moreDetails: props.incoterms[0].moreDetails
  });
  
  const handleChangeSelectIncoterm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = props.incoterms.find(incoterm => incoterm.id === parseInt(e.target.value));
    setSelectedIncoterm(selected);
  }
  
     return (
      <section ref={props.incotermsRef}>
         <IncotermsWrapper className="incoterms-component">
    <h1>Incoterms</h1>
  <div className="inconterms-informations">
    
    <div className="incoterms-container container">
    <div className="captions">
          <div className="captions__cost">
            <div className="square"></div>
            {props.sellerLabel}
          </div>
          <div className="captions__risk">
            <div className="square"></div>
            {props.buyerLabel}
          </div>
          <div className="captions__safety">
            <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
             {props.riskTransferLabel}
          </div>
        </div>
      <>
        <div className="incoterm-dropdown mobile">
          <select onChange={(e) => handleChangeSelectIncoterm(e)}>
            {props.incoterms.map((incoterm, index) => (
              <option value={incoterm.id} key={index}>{incoterm.acronym}</option>
            ))}
          </select>
          
        </div>
     
      </>

      <div className="stage-line">
        <div className="blank-cell"></div>
        <div className="stages-wrapper">
          <div className="stages">
          {props.iconIcoterms.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                <div key={incotermIcon.id} className="stage">
                  <img
                    className="stage__icon"
                    src={incotermIcon.icon}
                    alt={incotermIcon.name}
                  />
                  <div className="stage__div__name">
                    <span className="stage__name">{incotermIcon.name}</span>
                  </div>
                  {incotermIcon.icon !== `incoterms/05.svg` && <hr className="gary" ></hr>}
                  {incotermIcon.icon !== `incoterms/05.svg` &&                   
                  
                    <div className="transferRisk">

                      {
                      (selectedIncoterm?.acronym === "EXW" && incotermIcon.icon === `incoterms/01.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                  </svg>)
                  || (selectedIncoterm?.acronym === "FCA" && incotermIcon.icon === `incoterms/02.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                ||    (selectedIncoterm?.acronym === "FAS" && incotermIcon.icon === `incoterms/03.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
              </svg>)
                 
                || (selectedIncoterm?.acronym === "FOB" && incotermIcon.icon === `incoterms/04.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
              </svg>)

                || (selectedIncoterm?.acronym === "CFR" && incotermIcon.icon === `incoterms/04.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>)
                || (selectedIncoterm?.acronym === "CIF" && incotermIcon.icon === `incoterms/04.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>)
                || (selectedIncoterm?.acronym === "CPT" && incotermIcon.icon === `incoterms/02.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                  </svg>) 
                || (selectedIncoterm?.acronym === "CIP" && incotermIcon.icon === `incoterms/02.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                || (selectedIncoterm?.acronym === "DAP" && incotermIcon.icon === `incoterms/08.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                 || (selectedIncoterm?.acronym === "DPU" && incotermIcon.icon === `incoterms/07.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                  || (selectedIncoterm?.acronym === "DDP" && incotermIcon.icon === `incoterms/08.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                  </svg>)
              }
                       
              
                    </div>
                  }
                </div>
              </TooltipIncoterm>
            ))}
           
            <div className="stage blank"></div>
          </div>
        </div>
      </div>

      <div className="incoterm-line grid-line">
        <div className="incoterm-dropdown desktop">
         <select onChange={(e) => handleChangeSelectIncoterm(e)}>
            {props.incoterms.map((incoterm, index) => (
              <option value={incoterm.id} key={index}>{incoterm.acronym}</option>
            ))}
          </select>
        </div>

        <div className="incoterm-stages container">
        
          <div className="incoterm-stage incoterm-stage__cost">
            <div className={`factory-bar size__${selectedIncoterm?.costStage}`}>
              <span>{props.sellerLabel}</span>
            </div>
            <div className="customer-bar">
              <span>{props.buyerLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-line grid-line container">
        <div className="first-column">
          <span className="detail freight-details">
            <strong>{props.freight}:&nbsp;</strong>
            <span>{selectedIncoterm?.freightDetails}</span>
          </span>
          <span className="detail risk-details">
            <strong>{props.modal}:&nbsp;</strong>
            <span>{selectedIncoterm?.modal}</span>
          </span>
        </div>
        <div className="second-column">
          <span className="detail more-details">
            <strong>{props.moreDetails}:&nbsp;</strong>
            <span>{selectedIncoterm?.moreDetails}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</IncotermsWrapper>


      </section>

      
 
     )

}

export default Incoterms;