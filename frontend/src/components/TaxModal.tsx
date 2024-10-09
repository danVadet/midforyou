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
    const [historicData, setHistoricData] = useState<number[]>([]);
    const [days, setDays] = useState(1);
   
    useEffect (() => {
        getHistoricData();

    }, [historicData]);

    const getHistoricData = async () => {

        /*
        const month: number = 0;
        const dateNow = new Date();
        const months = dateNow.getMonth() + month;
        const year = dateNow.getFullYear();
        const days = new Date( dateNow.getFullYear(), dateNow.getMonth() - month, 0).getDate()
        */


        const response =  await axios.get(`http://economia.awesomeapi.com.br/json/${props.currentTax?.currencyCode}/30`);
        const quote = response.data;

        const valueBidArray: number [] = [];
        
        Object.keys(quote).map((key) => {
            valueBidArray.push(quote[key].bid);
        });

      console.log(response.data);

      setHistoricData(valueBidArray);
    
   
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
        {props.currentTax?.variation && props.currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{props.currentTax?.variation}%</p> :  <p className={`${styles.variation} ${styles.danger}`}> -{props.currentTax?.variation}%</p>}
        
        <Line data={{
            labels: historicData.map((coin) => {
                let date = new Date();
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [{
                data: historicData.map(coin => {
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
