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
    let [valueBidData, setValueBidData] = useState<number []>([]);




    useEffect (() => {
        getDays();

    }, [valueBidData]);

    const getDays = async () => {
        const response =  await axios.get(`http://economia.awesomeapi.com.br/json/${props.currentTax?.currencyCode}/30`);
        const quote = response.data;

        const valueBidArray: number [] = [];
        let day  = new Date (30);
        
        Object.keys(quote).map((key) => {
            valueBidArray.push(quote[key].bid);
        });

      console.log(valueBidArray);
      console.log(day);

     

      setValueBidData(valueBidArray);
     
   
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
        <p className={`${styles.variation} ${props.currentTax?.variation && props.currentTax?.variation >= 0 ?  `${styles.success}` : `${styles.danger}`}`}>{props.currentTax?.variation}</p>
        
        <Line data={{
            labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dec'],
            datasets: [{
                data: valueBidData.map(tax => tax),
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
