import FormatCurrencyName from "../Library/FormatCurrencyName";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js'
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);


interface ITaxModalProps {
    currentTax?:  ITaxModel
    closeModal(): void;
}
const TaxModal =  (props : ITaxModalProps) => {

    const [ quotation, setQuotation ] = useState<number []>([]);
    const [ diasCotados, setDiasCotados ] = useState<Date[]>([]);
    const [days, setDays] = useState(1);
    
    useEffect(() => {
        getData()
      }, [days])
    
const getData = async () => {
  if(days === 7) {
    const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
    const data = response.data;

  
    const array: number [] = []; 
        
    Object.keys(data).map((key) => {
            array.push(data[key].bid);
    });
    setQuotation(array.reverse());

    const dates: Date [] = [];
      for (let i = 0; i <= days; i++) {
        const data = new Date();
        data.setDate(data.getDate() - i);
         console.log(data);
  
         dates.push(data);
      }
      setDiasCotados(dates);

 } else if(days == 30) {

  const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
  const data = response.data;

  const array: number [] = []; 
        
  Object.keys(data).map((key) => {
          array.push(data[key].bid);
  });
  setQuotation(array.reverse());

  const dates: Date [] = [];
  for (let i = 0; i <= days; i++) {
    const data = new Date();
    data.setDate(data.getDate() - i);
     console.log(data);

     dates.push(data);
  }
  setDiasCotados(dates);
} else if(days === 90) {
  const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
  const data = response.data;
  const array: number [] = []; 

  Object.keys(data).map((key) => {
    array.push(data[key].bid);
});
setQuotation(array.reverse());

const dates: Date [] = [];
for (let i = 0; i <= days; i++) {

    const data = new Date();
    data.setDate(data.getDate() - i);
    dates.push(data);
  }
  setDiasCotados(dates);
} else if (days === 180) {

  const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
  const data = response.data;
  const array: number [] = []; 

  Object.keys(data).map((key) => {
    array.push(data[key].bid);
});
setQuotation(array.reverse());

const dates: Date [] = [];
for (let i = 0; i <= days; i++) {

    const data = new Date();
    data.setDate(data.getDate() - i);
    dates.push(data);
}
setDiasCotados(dates);

    

  
 } else if (days === 365) {
        const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
        const data = response.data;
        const array: number [] = []; 

        Object.keys(data).map((key) => {
          array.push(data[key].bid);
      });
      setQuotation(array.reverse());

      const dates: Date [] = [];
      for (let i = 0; i <= days; i++) {

          const data = new Date();
          data.setDate(data.getDate() - i);
          dates.push(data);
        }
        setDiasCotados(dates);
  } else {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${year}${month}${day}`);
    const data = response.data;
    const array: number [] = []; 

    Object.keys(data).map((key) => {
      array.push(data[key].bid);
  });
  setQuotation(array.reverse());

  const dates: Date [] = [];
  Object.keys(data).map((key) => {
    const date = new Date (data[key].timestamp * 1000);
    dates.push(date);
});
    setDiasCotados(dates);
    setDays(1);

  }
  } 
    return (
        <div className={`${styles.modal}`}>
        <div className={`${styles.modalBody}`}>
        <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#00afef" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
</svg>
             </a>

            
        <div className={`${styles.taxInfo}`}>
            
        <p> {props.currentTax?.name && FormatCurrencyName({ key: props.currentTax?.name })}  </p>
        {props.currentTax?.variation && props.currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{props.currentTax?.variation}%</p> : <p className={`${styles.variation} ${styles.danger}`}> {props.currentTax?.variation}%</p>}
        

<Line data={{
            labels:  diasCotados.map(coin => {
    
              let time = coin.getHours() >= 12 ? `${coin.getHours()}:${coin.getMinutes()} PM` : `${coin.getHours()}:${coin.getMinutes()} AM`;
              return days === 1 ? time : coin.toLocaleDateString();
            }),

            datasets: [{
                data: quotation.map(coin => {
                    return coin;
                }),
                borderColor: 'rgb(0, 175, 239)',
            }
                
            ]
        }}
        
        options={{
            elements: {
                point: {
                    radius: 1
                }
            }
        }}/>

             
             <button onClick={() => setDays(1)} className={`${styles.selectDay}`}>  Hoje</button>
             <button onClick={() => setDays(7)} className={`${styles.selectDay}`}> 1 semana</button>
             <button onClick={() => setDays(30)} className={`${styles.selectDay}`}> 1 mês</button>
             <button onClick={() => setDays(90)} className={`${styles.selectDay}`}> 3 meses </button>
             <button onClick={() => setDays(180)} className={`${styles.selectDay}`}> 6 meses </button>
             <button onClick={() => setDays(365)} className={`${styles.selectDay}`}> 1 ano</button>
</div>

</div>
        
        </div>
    );
}

export default TaxModal;