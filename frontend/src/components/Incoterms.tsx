import { ChangeEvent, useContext, useState } from "react";
import { IIncoterm } from "../models/IIncoterm";
import  { IncotermsWrapper } from "./Incoterm.style";
import { LanguageContext } from "../contexts/LanguageContext";
import  multiLang  from '../multiLang.json';
import { TooltipIncoterm } from "./TooltipIncoterm";
import { IIncotermIcon } from "../models/IIncotermIcon";
import { useNav } from "../Hooks/useNav";

export interface IIncotermsProps {

    incoterms: IIncoterm[];
    incotermsIcons: IIncotermIcon []
}

export const Incoterms = (props: IIncotermsProps) => {

   
  const { language } = useContext(LanguageContext);
  const incotermsRef = useNav(`${(language === "pt" && multiLang.pt.navItem.incoterms) || (language === "en" && multiLang.en.navItem.incoterms) || (language === "es" && multiLang.es.navItem.incoterms)}`)
  
    const [selectedIncoterm, setSelectedIncoterm] = useState<IIncoterm | undefined>({
        id: props.incoterms[0].id,
        name: props.incoterms[0].name,
        acronym: props.incoterms[0].acronym,
        costStage: props.incoterms[0].costStage,
        freightDetails: props.incoterms[0].freightDetails,
        modal: props.incoterms[0].modal,
        moreDetails: props.incoterms[0].moreDetails
    });

    const onChangeSelectIncoterm = (e: ChangeEvent<HTMLSelectElement>) => {
        const selected = props.incoterms.find(incoterm => incoterm.id === parseInt(e.target.value));
        setSelectedIncoterm(selected);
    }

    return (
      <section ref={incotermsRef} id={`${(language === "pt" && multiLang.pt.navItem.incoterms.toLowerCase()) || (language === "en" &&  multiLang.en.navItem.incoterms.toLowerCase()) || (language === "es" &&  multiLang.es.navItem.incoterms.toLowerCase())}Section`}>
        <IncotermsWrapper className="incoterms-component">
     <h1>Incoterms</h1>
   <div className="inconterms-informations">

 
     <div className="incoterms-container container">
     <div className="detail-line grid-line container">
     <div className="captions">
           <div className="captions__cost">
             <div className="square"></div>
             {(language === "pt" ? `${multiLang.pt.sellerLabel}` : language === "en" ? `${multiLang.en.sellerLabel}` : `${multiLang.es.sellerLabel}`)}
           </div>
           <div className="captions__risk">
             <div className="square"></div>
             {(language === "pt" ? `${multiLang.pt.buyerLabel}` : language === "en" ? `${multiLang.en.buyerLabel}` : `${multiLang.es.buyerLabel}`)}
           </div>
           <div className="captions__safety">
             <svg fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
              {(language === "pt" ? `${multiLang.pt.riskTransferLabel}` : language === "en" ? `${multiLang.en.riskTransferLabel}` : `${multiLang.es.riskTransferLabel}`)}
           </div>
         </div>
        </div>

       <>
       <div className="incoterm-dropdown mobile">
          <select onChange={(e) => onChangeSelectIncoterm(e)}>
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

           {props.incotermsIcons.map((incotermIcon, index) => (
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
                  {incotermIcon.icon !== `../assets/incoterms/04.svg` && <hr className="gary" ></hr>}
                  {incotermIcon.icon !== `../assets/incoterms/04.svg` &&                   

                    <div className="transferRisk">

                      {
                      (selectedIncoterm?.acronym === "EXW" && incotermIcon.icon === `../assets/incoterms/00.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                  </svg>)
                  || (selectedIncoterm?.acronym === "FCA" && incotermIcon.icon === `../assets/incoterms/01.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                ||    (selectedIncoterm?.acronym === "FAS" && incotermIcon.icon === `../assets/incoterms/02.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
              </svg>)

                || (selectedIncoterm?.acronym === "FOB" && incotermIcon.icon === `../assets/incoterms/03.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
              </svg>)

                || (selectedIncoterm?.acronym === "CFR" && incotermIcon.icon === `../assets/incoterms/03.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>)
                || (selectedIncoterm?.acronym === "CIF" && incotermIcon.icon === `../assets/incoterms/03.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>)
                || (selectedIncoterm?.acronym === "CPT" && incotermIcon.icon === `../assets/incoterms/01.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                  </svg>) 
                || (selectedIncoterm?.acronym === "CIP" && incotermIcon.icon === `../assets/incoterms/01.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                || (selectedIncoterm?.acronym === "DAP" && incotermIcon.icon === `../assets/incoterms/07.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                 || (selectedIncoterm?.acronym === "DPU" && incotermIcon.icon === `../assets/incoterms/06.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path>
                </svg>) 
                  || (selectedIncoterm?.acronym === "DDP" && incotermIcon.icon === `../assets/incoterms/07.svg` &&    <svg fill="rgb(255, 140, 0)" width="30px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <select className="incoterm-dropdown desktop" onChange={(e) => onChangeSelectIncoterm(e)}>
             {props.incoterms.map((incoterm, index) => (
               <option value={incoterm.id} key={index}>{incoterm.acronym}</option>
             ))}
           </select>
 
         <div className="incoterm-stages container">
 
           <div className="incoterm-stage incoterm-stage__cost">
             <div className={`factory-bar size__${selectedIncoterm?.costStage}`}>
               <span>{(language === "pt" ? `${multiLang.pt.sellerLabel}` : language === "en" ? `${multiLang.en.sellerLabel}` : `${multiLang.es.sellerLabel}`)}</span>
             </div>
             <div className="customer-bar">
               <span>{(language === "pt" ? `${multiLang.pt.buyerLabel}` : language === "en" ? `${multiLang.en.buyerLabel}` : `${multiLang.es.buyerLabel}`)}</span>
             </div>
           </div>
         </div>
       </div>
 
       <div className="detail-line grid-line container">
         <div className="first-column">
           <span className="detail freight-details">
             <strong>{(language === "pt" ? `${multiLang.pt.freight}` : language === "en" ? `${multiLang.en.freight}` : `${multiLang.es.freight}`)}:&nbsp;</strong>
             {selectedIncoterm?.freightDetails}
           </span>
           <span className="detail risk-details">
             <strong>{((language === "pt" ? `${multiLang.pt.modal}` : language === "en" ? `${multiLang.en.modal}` : `${multiLang.es.modal}`))}:&nbsp;</strong>
             {selectedIncoterm?.modal}
           </span>
        
         </div>
        
         <div className="second-column">
           <span className="detail more-details">
             <strong>{(language === "pt" ? `${multiLang.pt.moreDetails}` : language === "en" ? `${multiLang.en.moreDetails}` : `${multiLang.es.moreDetails}`)}:&nbsp;</strong>
             {selectedIncoterm?.moreDetails}
           </span>
         </div>
       </div>
     </div>
   </div>
 </IncotermsWrapper>
      
      </section>   

    );

}