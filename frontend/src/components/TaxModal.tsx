import FormatCurrencyName from "../Library/FormatCurrencyName";
import ITaxKeys from "../models/ITaxKeys";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


interface ITaxModalProps {
    currentTax?:  ITaxModel
    closeModal(): void;

}

const TaxModal = (props : ITaxModalProps) => {

    return (
        <div className={`${styles.modal}`}>
        <div className={`${styles.modalBody}`}>
        <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#00afef" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
</svg>
             </a>

            
        <div className={`${styles.taxInfo}`}>

        <p> {props.currentTax?.symbol} </p>
        <Line data={{
            labels: [props.currentTax?.value],
            datasets: [{
                data: [props.currentTax?.variation]
            }
                
            ]
        }}/>

    


        

</div>

</div>
        
            
        </div>

    );
}

export default TaxModal;
