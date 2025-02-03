import styles from './Incoterms.module.css'
import { Incoterm } from '../models/Incoterm';
import { useContext, useEffect, useState } from 'react';
import TooltipIncoterm from './TooltipIncoterm';
import { IconIcoterm } from '../models/IconIcoterm';
import { LanguageContext } from '../Context/LanguageContext';
import  multiLang  from '../multiLang.json';


interface IIncotermProps {
 
  
  incotermsRef: React.RefObject<HTMLDivElement>

}

const Incoterms = (props: IIncotermProps) => {

  const { language, setLanguage } = useContext(LanguageContext);

  const [incoterms, setIncoterms] = useState<Incoterm[]>([{
    id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[0].id}`) || (language === "en"  && `${multiLang.en.incoterms[0].id}`) ||( language === "es" && `${multiLang.es.incoterms[0].id}`)}`),
    name: `${(language === "pt" && `${multiLang.pt.incoterms[0].name}`) || (language === "en"  && `${multiLang.en.incoterms[0].name}`) ||( language === "es" && `${multiLang.es.incoterms[0].name}`)}`,
    acronym: "EXW",
    costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[0].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[0].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[0].costStage}`)}`),
    riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[0].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[0].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[0].riskStage}`)}`),
    insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[0].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[0].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[0].insuranceStage}`)}`),
    freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[0].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].freightDetails}`)}`,
    modal: `${(language === "pt" && `${multiLang.pt.incoterms[0].modal}`) || (language === "en"  && `${multiLang.en.incoterms[0].modal}`) ||( language === "es" && `${multiLang.es.incoterms[0].modal}`)}`,
    moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[0].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].moreDetails}`)}`
  }, 

  {
    id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[1].id}`) || (language === "en"  && `${multiLang.en.incoterms[1].id}`) ||( language === "es" && `${multiLang.es.incoterms[1].id}`)}`),
    name: `${(language === "pt" && `${multiLang.pt.incoterms[1].name}`) || (language === "en"  && `${multiLang.en.incoterms[1].name}`) ||( language === "es" && `${multiLang.es.incoterms[1].name}`)}`,
    acronym: "FCA",
    costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[1].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[1].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[1].costStage}`)}`),
    riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[1].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[1].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[1].riskStage}`)}`),
    insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[1].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[1].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[1].insuranceStage}`)}`),
    freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[1].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[1].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[1].freightDetails}`)}`,
    modal: `${(language === "pt" && `${multiLang.pt.incoterms[1].modal}`) || (language === "en"  && `${multiLang.en.incoterms[1].modal}`) ||( language === "es" && `${multiLang.es.incoterms[1].modal}`)}`,
    moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[1].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[1].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[1].moreDetails}`)}`
  },

  {
    id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[2].id}`) || (language === "en"  && `${multiLang.en.incoterms[2].id}`) ||( language === "es" && `${multiLang.es.incoterms[2].id}`)}`),
    name: `${(language === "pt" && `${multiLang.pt.incoterms[2].name}`) || (language === "en"  && `${multiLang.en.incoterms[2].name}`) ||( language === "es" && `${multiLang.es.incoterms[2].name}`)}`,
    acronym: "FAS",
    costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[2].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[2].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[2].costStage}`)}`),
    riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[2].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[2].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[2].riskStage}`)}`),
    insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[2].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[2].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[2].insuranceStage}`)}`),
    freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[2].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[2].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[2].freightDetails}`)}`,
    modal: `${(language === "pt" && `${multiLang.pt.incoterms[2].modal}`) || (language === "en"  && `${multiLang.en.incoterms[2].modal}`) ||( language === "es" && `${multiLang.es.incoterms[2].modal}`)}`,
    moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[2].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[2].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[2].moreDetails}`)}`
  },

  {
    id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[3].id}`) || (language === "en"  && `${multiLang.en.incoterms[3].id}`) ||( language === "es" && `${multiLang.es.incoterms[3].id}`)}`),
    name: `${(language === "pt" && `${multiLang.pt.incoterms[3].name}`) || (language === "en"  && `${multiLang.en.incoterms[3].name}`) ||( language === "es" && `${multiLang.es.incoterms[3].name}`)}`,
    acronym: "FOB",
    costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[3].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[3].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[3].costStage}`)}`),
    riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[3].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[3].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[3].riskStage}`)}`),
    insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[3].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[3].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[3].insuranceStage}`)}`),
    freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[3].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[3].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[3].freightDetails}`)}`,
    modal: `${(language === "pt" && `${multiLang.pt.incoterms[3].modal}`) || (language === "en"  && `${multiLang.en.incoterms[3].modal}`) ||( language === "es" && `${multiLang.es.incoterms[3].modal}`)}`,
    moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[3].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[3].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[3].moreDetails}`)}`
},

{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[4].id}`) || (language === "en"  && `${multiLang.en.incoterms[4].id}`) ||( language === "es" && `${multiLang.es.incoterms[4].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[4].name}`) || (language === "en"  && `${multiLang.en.incoterms[4].name}`) ||( language === "es" && `${multiLang.es.incoterms[4].name}`)}`,
  acronym: "CFR",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[4].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[4].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[4].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[4].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[4].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[4].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[4].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[4].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[4].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[4].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[4].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[4].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[4].modal}`) || (language === "en"  && `${multiLang.en.incoterms[4].modal}`) ||( language === "es" && `${multiLang.es.incoterms[4].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[4].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[4].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[4].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[5].id}`) || (language === "en"  && `${multiLang.en.incoterms[5].id}`) ||( language === "es" && `${multiLang.es.incoterms[5].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[5].name}`) || (language === "en"  && `${multiLang.en.incoterms[5].name}`) ||( language === "es" && `${multiLang.es.incoterms[5].name}`)}`,
  acronym: "CIF",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[5].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[5].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[5].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[5].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[5].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[5].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[5].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[5].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[5].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[5].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[5].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[5].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[5].modal}`) || (language === "en"  && `${multiLang.en.incoterms[5].modal}`) ||( language === "es" && `${multiLang.es.incoterms[5].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[5].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[5].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[5].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[6].id}`) || (language === "en"  && `${multiLang.en.incoterms[6].id}`) ||( language === "es" && `${multiLang.es.incoterms[6].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[6].name}`) || (language === "en"  && `${multiLang.en.incoterms[6].name}`) ||( language === "es" && `${multiLang.es.incoterms[6].name}`)}`,
  acronym: "CPT",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[6].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[6].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[6].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[6].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[6].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[6].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[6].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[6].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[6].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[6].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[5].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[6].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[6].modal}`) || (language === "en"  && `${multiLang.en.incoterms[6].modal}`) ||( language === "es" && `${multiLang.es.incoterms[6].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[6].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[6].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[6].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[7].id}`) || (language === "en"  && `${multiLang.en.incoterms[7].id}`) ||( language === "es" && `${multiLang.es.incoterms[7].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[7].name}`) || (language === "en"  && `${multiLang.en.incoterms[7].name}`) ||( language === "es" && `${multiLang.es.incoterms[7].name}`)}`,
  acronym: "CIP",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[7].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[7].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[7].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[7].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[7].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[7].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[7].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[7].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[7].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[7].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[7].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[7].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[7].modal}`) || (language === "en"  && `${multiLang.en.incoterms[7].modal}`) ||( language === "es" && `${multiLang.es.incoterms[7].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[7].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[7].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[7].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[8].id}`) || (language === "en"  && `${multiLang.en.incoterms[8].id}`) ||( language === "es" && `${multiLang.es.incoterms[8].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[8].name}`) || (language === "en"  && `${multiLang.en.incoterms[8].name}`) ||( language === "es" && `${multiLang.es.incoterms[8].name}`)}`,
  acronym: "DAP",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[8].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[8].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[8].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[8].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[8].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[8].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[8].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[8].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[8].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[8].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[8].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[8].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[8].modal}`) || (language === "en"  && `${multiLang.en.incoterms[8].modal}`) ||( language === "es" && `${multiLang.es.incoterms[8].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[8].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[8].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[8].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[9].id}`) || (language === "en"  && `${multiLang.en.incoterms[9].id}`) ||( language === "es" && `${multiLang.es.incoterms[5].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[9].name}`) || (language === "en"  && `${multiLang.en.incoterms[9].name}`) ||( language === "es" && `${multiLang.es.incoterms[5].name}`)}`,
  acronym: "DPU",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[9].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[9].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[9].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[9].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[9].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[9].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[9].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[9].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[9].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[9].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[9].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[9].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[9].modal}`) || (language === "en"  && `${multiLang.en.incoterms[9].modal}`) ||( language === "es" && `${multiLang.es.incoterms[9].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[9].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[9].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[9].moreDetails}`)}`
},
{
  id: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[10].id}`) || (language === "en"  && `${multiLang.en.incoterms[10].id}`) ||( language === "es" && `${multiLang.es.incoterms[10].id}`)}`),
  name: `${(language === "pt" && `${multiLang.pt.incoterms[10].name}`) || (language === "en"  && `${multiLang.en.incoterms[10].name}`) ||( language === "es" && `${multiLang.es.incoterms[5].name}`)}`,
  acronym: "DDP",
  costStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[10].costStage}`) || (language === "en"  && `${multiLang.en.incoterms[10].costStage}`) ||( language === "es" && `${multiLang.es.incoterms[10].costStage}`)}`),
  riskStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[10].riskStage}`) || (language === "en"  && `${multiLang.en.incoterms[10].riskStage}`) ||( language === "es" && `${multiLang.es.incoterms[10].riskStage}`)}`),
  insuranceStage: parseInt(`${(language === "pt" && `${multiLang.pt.incoterms[10].insuranceStage}`) || (language === "en"  && `${multiLang.en.incoterms[10].insuranceStage}`) ||( language === "es" && `${multiLang.es.incoterms[10].insuranceStage}`)}`),
  freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[10].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[10].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[10].freightDetails}`)}`,
  modal: `${(language === "pt" && `${multiLang.pt.incoterms[10].modal}`) || (language === "en"  && `${multiLang.en.incoterms[10].modal}`) ||( language === "es" && `${multiLang.es.incoterms[10].modal}`)}`,
  moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[10].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[10].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[10].moreDetails}`)}`
}

]);

const [iconsIcotermPt, setIconsIcotermPt] = useState<IconIcoterm[]>([
  {
   id: parseInt (`${multiLang.pt.iconsIcoterms[0].id}`),
  icon: `${multiLang.pt.iconsIcoterms[0].icon}` ,
  name: `${multiLang.pt.iconsIcoterms[0].name}`
  }, 
  {
    id: parseInt (`${multiLang.es.iconsIcoterms[1].id}`),
   icon: `${multiLang.pt.iconsIcoterms[1].icon}` ,
   name: `${multiLang.pt.iconsIcoterms[1].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[2].id}`),
   icon: `${multiLang.pt.iconsIcoterms[2].icon}` ,
   name: `${multiLang.pt.iconsIcoterms[2].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[3].id}`),
   icon: `${multiLang.pt.iconsIcoterms[3].icon}` ,
   name: `${multiLang.pt.iconsIcoterms[3].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[4].id}`),
   icon: `${multiLang.es.iconsIcoterms[4].icon}` ,
   name: `${multiLang.es.iconsIcoterms[4].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[5].id}`),
   icon: `${multiLang.es.iconsIcoterms[5].icon}` ,
   name: `${multiLang.es.iconsIcoterms[5].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[6].id}`),
   icon: `${multiLang.es.iconsIcoterms[6].icon}` ,
   name: `${multiLang.es.iconsIcoterms[6].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[7].id}`),
   icon: `${multiLang.es.iconsIcoterms[7].icon}` ,
   name: `${multiLang.es.iconsIcoterms[7].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[8].id}`),
   icon: `${multiLang.es.iconsIcoterms[8].icon}` ,
   name: `${multiLang.es.iconsIcoterms[8].name}`
   },
])
  

const [iconsIcotermEn, setIconsIcotermEn] = useState<IconIcoterm[]>([
  {
   id: parseInt (`${multiLang.en.iconsIcoterms[0].id}`),
  icon: `${multiLang.en.iconsIcoterms[0].icon}` ,
  name: `${multiLang.en.iconsIcoterms[0].name}`
  }, 
  {
    id: parseInt (`${multiLang.en.iconsIcoterms[1].id}`),
   icon: `${multiLang.en.iconsIcoterms[1].icon}` ,
   name: `${multiLang.en.iconsIcoterms[1].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[2].id}`),
   icon: `${multiLang.en.iconsIcoterms[2].icon}` ,
   name: `${multiLang.en.iconsIcoterms[2].name}`
   }, 
   {
    id: parseInt (`${multiLang.en.iconsIcoterms[3].id}`),
   icon: `${multiLang.en.iconsIcoterms[3].icon}` ,
   name: `${multiLang.en.iconsIcoterms[3].name}`
   }, 
   {
    id: parseInt (`${multiLang.en.iconsIcoterms[4].id}`),
   icon: `${multiLang.en.iconsIcoterms[4].icon}` ,
   name: `${multiLang.en.iconsIcoterms[4].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[5].id}`),
   icon: `${multiLang.en.iconsIcoterms[5].icon}` ,
   name: `${multiLang.en.iconsIcoterms[5].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[6].id}`),
   icon: `${multiLang.en.iconsIcoterms[6].icon}` ,
   name: `${multiLang.en.iconsIcoterms[6].name}`
   }, 
   {
    id: parseInt (`${multiLang.en.iconsIcoterms[7].id}`),
   icon: `${multiLang.en.iconsIcoterms[7].icon}` ,
   name: `${multiLang.en.iconsIcoterms[7].name}`
   }, 
   {
    id: parseInt (`${multiLang.en.iconsIcoterms[8].id}`),
   icon: `${multiLang.en.iconsIcoterms[8].icon}` ,
   name: `${multiLang.en.iconsIcoterms[8].name}`
   },
]) 

const [iconsIcotermEs, setIconsIcotermEs] = useState<IconIcoterm[]>([
  {
   id: parseInt (`${multiLang.es.iconsIcoterms[0].id}`),
  icon: `${multiLang.es.iconsIcoterms[0].icon}` ,
  name: `${multiLang.es.iconsIcoterms[0].name}`
  }, 
  {
    id: parseInt (`${multiLang.es.iconsIcoterms[1].id}`),
   icon: `${multiLang.es.iconsIcoterms[1].icon}` ,
   name: `${multiLang.es.iconsIcoterms[1].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[2].id}`),
   icon: `${multiLang.es.iconsIcoterms[2].icon}` ,
   name: `${multiLang.es.iconsIcoterms[2].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[3].id}`),
   icon: `${multiLang.es.iconsIcoterms[3].icon}` ,
   name: `${multiLang.es.iconsIcoterms[3].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[4].id}`),
   icon: `${multiLang.es.iconsIcoterms[4].icon}` ,
   name: `${multiLang.es.iconsIcoterms[4].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[5].id}`),
   icon: `${multiLang.es.iconsIcoterms[5].icon}` ,
   name: `${multiLang.es.iconsIcoterms[5].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[6].id}`),
   icon: `${multiLang.es.iconsIcoterms[6].icon}` ,
   name: `${multiLang.es.iconsIcoterms[6].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[7].id}`),
   icon: `${multiLang.es.iconsIcoterms[7].icon}` ,
   name: `${multiLang.es.iconsIcoterms[7].name}`
   }, 
   {
    id: parseInt (`${multiLang.es.iconsIcoterms[8].id}`),
   icon: `${multiLang.es.iconsIcoterms[8].icon}` ,
   name: `${multiLang.es.iconsIcoterms[8].name}`
   }, 
]) 

  const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm | undefined>({
    id: 0,
    name: `${(language === "pt" && `${multiLang.pt.incoterms[0].name}`) || (language === "en"  && `${multiLang.en.incoterms[0].name}`) ||( language === "es" && `${multiLang.es.incoterms[0].name}`)}`,
    acronym: "EXW",
    costStage: 0,
    riskStage: 0,
    insuranceStage: 0,
    freightDetails: `${(language === "pt" && `${multiLang.pt.incoterms[0].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].freightDetails}`)}`,
     modal: `${(language === "pt" && `${multiLang.pt.incoterms[0].modal}`) || (language === "en"  && `${multiLang.en.incoterms[0].modal}`) ||( language === "es" && `${multiLang.es.incoterms[0].modal}`)}`,
    moreDetails: `${(language === "pt" && `${multiLang.pt.incoterms[0].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].moreDetails}`)}`
  });


  const handleChangeSelectIncoterm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = incoterms.find(incoterm => incoterm.id === parseInt(e.target.value));
    setSelectedIncoterm(selected);
  }

  return (
    <section ref={props.incotermsRef}>

      <div className={`${styles.incotermsComponent}`}>
      <h1>Incoterms</h1>
      <div className={`${styles.incotermsContainer}`}>

        <div className={`${styles.incotermsLeft}`}>
          <select className={`${styles.selectedIncoterm}`} onChange={(e) => handleChangeSelectIncoterm(e)}>
            {incoterms.map((incoterm, index) => (
              <option value={incoterm.id} key={index}>{incoterm.acronym}</option>
            ))}
          </select>

        </div>
        <div className={`${styles.incotermsRight}`}>
          
          <div className={`${styles.deail__line}`}>
            <div className={`${styles.captions}`}>
              <div className={`${styles.caption__seller}`}>
                <div className={`${styles.square}`}></div>
                {`${(language === "pt" && `${multiLang.pt.costLabel}`) || (language === "en"  && `${multiLang.en.costLabel}`) ||( language === "es" && `${multiLang.es.costLabel}`)}` }
              </div>
              <div className={`${styles.caption__buyer}`}>
                <div className={`${styles.square}`}></div>
                {`${(language === "pt" && `${multiLang.pt.riskLabel}`) || (language === "en"  && `${multiLang.en.riskLabel}`) ||( language === "es" && `${multiLang.es.riskLabel}`)}` }

              </div>
              <div className={`${styles.caption__transferRisk}`}>
                <svg className={`${styles.triangle}`} fill="rgb(255, 140, 0)" width="30px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7,17.5l-8.1-14c-0.8-1.4-2.7-1.9-4.1-1.1C10,2.7,9.6,3.1,9.4,3.5l-8.1,14c-0.8,1.4-0.3,3.3,1.1,4.1c0.5,0.3,1,0.4,1.5,0.4h16.1c1.7,0,3-1.4,3-3C23.1,18.4,22.9,17.9,22.7,17.5z M12,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,18,12,18z M13,13c0,0.6-0.4,1-1,1s-1-0.4-1-1V9c0-0.6,0.4-1,1-1s1,0.4,1,1V13z"></path></svg>
                {`${(language === "pt" && `${multiLang.pt.insuranceLabel}`) || (language === "en"  && `${multiLang.en.insuranceLabel}`) ||( language === "es" && `${multiLang.es.insuranceLabel}`)}` }
              </div>
            </div>
          </div>



          <div className={`${styles.inco}`}>
            {  (language === "pt" && iconsIcotermPt.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                <>
                
                  <img src={incotermIcon.icon} />
                  <h5>{incotermIcon.name}</h5>
                </>
              </TooltipIncoterm>
            ))) 
            ||  (language === "en" && iconsIcotermEn.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                <>
                
                  <img src={incotermIcon.icon} />
                  <h5>{incotermIcon.name}</h5>
                </>
              </TooltipIncoterm>
            )))

            || (language === "es"  && iconsIcotermEs.map((incotermIcon, index) => (
              <TooltipIncoterm disabled={false} text={`${incotermIcon.name}`} key={index}>
                <>
                
                  <img src={incotermIcon.icon} />
                  <h5>{incotermIcon.name}</h5>
                </>
              </TooltipIncoterm>
            )))
            
            
            }
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
              {selectedIncoterm?.acronym === "EXW" && <span>{`${(language === "pt" && `${multiLang.pt.agreedPlace}`) || (language === "en"  && `${multiLang.en.agreedPlace}`) ||( language === "es" && `${multiLang.es.agreedPlace}`)}` }</span> }
              {selectedIncoterm?.acronym === "FCA" && <span>{`${(language === "pt" && `${multiLang.pt.agreedPlace}`) || (language === "en"  && `${multiLang.en.agreedPlace}`) ||( language === "es" && `${multiLang.es.agreedPlace}`)}` }</span> }
              {selectedIncoterm?.acronym === "FAS" && <span>{`${(language === "pt" && `${multiLang.pt.loadPort}`) || (language === "en"  && `${multiLang.en.loadPort}`) ||( language === "es" && `${multiLang.es.loadPort}`)}` }</span> }
              {selectedIncoterm?.acronym === "FOB" && <span>{`${(language === "pt" && `${multiLang.pt.loadPort}`) || (language === "en"  && `${multiLang.en.loadPort}`) ||( language === "es" && `${multiLang.es.loadPort}`)}` }</span> }
              {selectedIncoterm?.acronym === "CFR" && <span>{`${(language === "pt" && `${multiLang.pt.destinationPort}`) || (language === "en"  && `${multiLang.en.destinationPort}`) ||( language === "es" && `${multiLang.es.destinationPort}`)}` }</span> }
              {selectedIncoterm?.acronym === "CIF" && <span>{`${(language === "pt" && `${multiLang.pt.agreedPlace}`) || (language === "en"  && `${multiLang.en.destinationPort}`) ||( language === "es" && `${multiLang.es.destinationPort}`)}` }</span> }
              {selectedIncoterm?.acronym === "CPT" && <span>{`${(language === "pt" && `${multiLang.pt.agreedPlace}`) || (language === "en"  && `${multiLang.en.destinationPlace}`) ||( language === "es" && `${multiLang.es.destinationPlace}`)}` }</span> }
              {selectedIncoterm?.acronym === "CIP" && <span>{`${(language === "pt" && `${multiLang.pt.destinationPlace}`) || (language === "en"  && `${multiLang.en.destinationPlace}`) ||( language === "es" && `${multiLang.es.destinationPlace}`)}` }</span> }
              {selectedIncoterm?.acronym === "DPU" && <span>{`${(language === "pt" && `${multiLang.pt.destinationPlace}`) || (language === "en"  && `${multiLang.en.destinationPlace}`) ||( language === "es" && `${multiLang.es.destinationPlace}`)}` }</span> }
              {selectedIncoterm?.acronym === "DAP" && <span>{`${(language === "pt" && `${multiLang.pt.destination}`) || (language === "en"  && `${multiLang.en.destination}`) ||( language === "es" && `${multiLang.es.destination}`)}` }</span> }
              {selectedIncoterm?.acronym === "DDP" && <span>{`${(language === "pt" && `${multiLang.pt.destination}`) || (language === "en"  && `${multiLang.en.destination}`) ||( language === "es" && `${multiLang.es.destination}`)}` }</span> }

            </div>
          </div>
          </div>
          <div>
          </div>

          <div className={`${styles.incotermsInformations}`}>
            <span className={`${styles.detail__freight__details}`}>
              <strong>{`${(language === "pt" && `${multiLang.pt.freight}`) || (language === "en"  && `${multiLang.en.freight}`) ||( language === "es" && `${multiLang.es.freight}`)}`}:</strong>
              <span>{ 
                selectedIncoterm?.acronym === "EXW" &&
              `${(language === "pt" && `${multiLang.pt.incoterms[0].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].freightDetails}`)}`
              ||  selectedIncoterm?.acronym === "FCA" && `${(language === "pt" && `${multiLang.pt.incoterms[1].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[1].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[1].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "FAS" && `${(language === "pt" && `${multiLang.pt.incoterms[2].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[2].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[2].freightDetails}`)}`
              ||  selectedIncoterm?.acronym === "FOB" && `${(language === "pt" && `${multiLang.pt.incoterms[3].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[3].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[3].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CFR" && `${(language === "pt" && `${multiLang.pt.incoterms[4].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[4].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[4].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CIF" && `${(language === "pt" && `${multiLang.pt.incoterms[5].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[5].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[5].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CPT" && `${(language === "pt" && `${multiLang.pt.incoterms[6].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[6].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[6].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CIP" && `${(language === "pt" && `${multiLang.pt.incoterms[7].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[7].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[7].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DAP" && `${(language === "pt" && `${multiLang.pt.incoterms[8].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[8].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[8].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DPU" && `${(language === "pt" && `${multiLang.pt.incoterms[9].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[9].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[9].freightDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DDP" && `${(language === "pt" && `${multiLang.pt.incoterms[10].freightDetails}`) || (language === "en"  && `${multiLang.en.incoterms[10].freightDetails}`) ||( language === "es" && `${multiLang.es.incoterms[10].freightDetails}`)}` 
              }</span>
            </span>
            <span className={`${styles.detail__risk__details}`}>
            <strong>{`${(language === "pt" && `${multiLang.pt.modal}`) || (language === "en"  && `${multiLang.en.modal}`) ||( language === "es" && `${multiLang.es.modal}`)}`}:</strong>
              <span>{ 
                selectedIncoterm?.acronym === "EXW" &&
              `${(language === "pt" && `${multiLang.pt.incoterms[0].modal}`) || (language === "en"  && `${multiLang.en.incoterms[0].modal}`) ||( language === "es" && `${multiLang.es.incoterms[0].modal}`)}`
              ||  selectedIncoterm?.acronym === "FCA" && `${(language === "pt" && `${multiLang.pt.incoterms[1].modal}`) || (language === "en"  && `${multiLang.en.incoterms[1].modal}`) ||( language === "es" && `${multiLang.es.incoterms[1].modal}`)}` 
              ||  selectedIncoterm?.acronym === "FAS" && `${(language === "pt" && `${multiLang.pt.incoterms[2].modal}`) || (language === "en"  && `${multiLang.en.incoterms[2].modal}`) ||( language === "es" && `${multiLang.es.incoterms[2].modal}`)}`
              ||  selectedIncoterm?.acronym === "FOB" && `${(language === "pt" && `${multiLang.pt.incoterms[3].modal}`) || (language === "en"  && `${multiLang.en.incoterms[3].modal}`) ||( language === "es" && `${multiLang.es.incoterms[3].modal}`)}` 
              ||  selectedIncoterm?.acronym === "CFR" && `${(language === "pt" && `${multiLang.pt.incoterms[4].modal}`) || (language === "en"  && `${multiLang.en.incoterms[4].modal}`) ||( language === "es" && `${multiLang.es.incoterms[4].modal}`)}` 
              ||  selectedIncoterm?.acronym === "CIF" && `${(language === "pt" && `${multiLang.pt.incoterms[5].modal}`) || (language === "en"  && `${multiLang.en.incoterms[5].modal}`) ||( language === "es" && `${multiLang.es.incoterms[5].modal}`)}` 
              ||  selectedIncoterm?.acronym === "CPT" && `${(language === "pt" && `${multiLang.pt.incoterms[6].modal}`) || (language === "en"  && `${multiLang.en.incoterms[6].modal}`) ||( language === "es" && `${multiLang.es.incoterms[6].modal}`)}` 
              ||  selectedIncoterm?.acronym === "CIP" && `${(language === "pt" && `${multiLang.pt.incoterms[7].modal}`) || (language === "en"  && `${multiLang.en.incoterms[7].modal}`) ||( language === "es" && `${multiLang.es.incoterms[7].modal}`)}` 
              ||  selectedIncoterm?.acronym === "DAP" && `${(language === "pt" && `${multiLang.pt.incoterms[8].modal}`) || (language === "en"  && `${multiLang.en.incoterms[8].modal}`) ||( language === "es" && `${multiLang.es.incoterms[8].modal}`)}` 
              ||  selectedIncoterm?.acronym === "DPU" && `${(language === "pt" && `${multiLang.pt.incoterms[9].modal}`) || (language === "en"  && `${multiLang.en.incoterms[9].modal}`) ||( language === "es" && `${multiLang.es.incoterms[9].modal}`)}` 
              ||  selectedIncoterm?.acronym === "DDP" && `${(language === "pt" && `${multiLang.pt.incoterms[10].modal}`) || (language === "en"  && `${multiLang.en.incoterms[10].modal}`) ||( language === "es" && `${multiLang.es.incoterms[10].modal}`)}`
              }
              </span>
            
            
            </span>
            <span className={`${styles.detail__more__details}`}>
            <strong>{`${(language === "pt" && `${multiLang.pt.moreDetails}`) || (language === "en"  && `${multiLang.en.moreDetails}`) ||( language === "es" && `${multiLang.es.moreDetails}`)}`}:</strong>
            <span>{ 
                  selectedIncoterm?.acronym === "EXW" && `${(language === "pt" && `${multiLang.pt.incoterms[0].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[0].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[0].moreDetails}`)}`
              ||  selectedIncoterm?.acronym === "FCA" && `${(language === "pt" && `${multiLang.pt.incoterms[1].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[1].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[1].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "FAS" && `${(language === "pt" && `${multiLang.pt.incoterms[2].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[2].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[2].moreDetails}`)}`
              ||  selectedIncoterm?.acronym === "FOB" && `${(language === "pt" && `${multiLang.pt.incoterms[3].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[3].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[3].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CFR" && `${(language === "pt" && `${multiLang.pt.incoterms[4].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[4].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[4].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CIF" && `${(language === "pt" && `${multiLang.pt.incoterms[5].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[5].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[5].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CPT" && `${(language === "pt" && `${multiLang.pt.incoterms[6].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[6].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[6].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "CIP" && `${(language === "pt" && `${multiLang.pt.incoterms[7].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[7].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[7].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DAP" && `${(language === "pt" && `${multiLang.pt.incoterms[8].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[8].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[8].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DPU" && `${(language === "pt" && `${multiLang.pt.incoterms[9].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[9].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[9].moreDetails}`)}` 
              ||  selectedIncoterm?.acronym === "DDP" && `${(language === "pt" && `${multiLang.pt.incoterms[10].moreDetails}`) || (language === "en"  && `${multiLang.en.incoterms[10].moreDetails}`) ||( language === "es" && `${multiLang.es.incoterms[10].moreDetails}`)}` 
              }</span>
            </span>
          </div>
        </div>
      </div>
        
      </div>

      
    </section>
  )
}

export default Incoterms;