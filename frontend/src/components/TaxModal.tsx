import FormatCurrencyName from "../Library/FormatCurrencyName";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js'
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);


interface ITaxModalProps {
    currentTax?:  ITaxModel
    closeModal(): void;

}


const TaxModal =  (props : ITaxModalProps) => {
    const [arrayBids, setArrayBids] = useState<number[]>([]);
    const [arrayDates, setArrayDates] = useState<number[]>([]);
    const [days, setDays] = useState(1);
   
    useEffect (() => {
        getHistoricData();

    }, []);

    const getHistoricData = async () => {

        const response =  await axios.get(`http://economia.awesomeapi.com.br/json/${props.currentTax?.currencyCode}/30`);
        const quote = response.data;
        const valueBidArray: number [] = []; 
        const valueDateArray: number [] = [];
        
        Object.keys(quote).map((key) => {
            valueBidArray.push(quote[key].bid);
        });
        Object.keys(quote).map((key) => {
            valueDateArray.push(quote[key].timestamp);
        });

      console.log(response.data);

      setArrayBids(valueBidArray);
      setArrayDates(valueDateArray);
    
   
    }

    return (

    
    
       
    
         <div className={`${styles.modal}`}>
        <div className={`${styles.modalBody}`}>
        <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#00afef" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
</svg>
             </a>

            
        <div className={`${styles.taxInfo}`}>
            
        <p> {props.currentTax?.name && FormatCurrencyName({ key: props.currentTax?.name })}  </p>
        {props.currentTax?.variation && props.currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{props.currentTax?.variation}%</p> :  <p className={`${styles.variation} ${styles.danger}`}> {props.currentTax?.variation}%</p>}
        
        <Line data={{
            labels: arrayDates.map(coin => {
                let date = new Date(coin * 1000);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [{
                data: arrayBids.map(coin => {
                    return coin;
                }),
                borderColor: 'rgb(0, 175, 239)',
            }
                
            ]
        }}/>
</div>

</div>
        
            
        </div>
        

    );
}

export default TaxModal;
