
import { useEffect, useState } from 'react'
import styles from './TaxModal.module.css'
import ITaxKeys from '../models/ITaxKeys';
import { ITaxModel } from '../models/ITaxModel';



interface ITaxModalProps {

    currentKeyTax?: ITaxKeys;

} 



const TaxModal = (props: ITaxModalProps) => {



     switch(props.currentKeyTax){
        case "USDBRL":
            return ""
     }
     
    




    return (
        <div className={`${styles.modal}`}>
            <div className={`${styles.modalBody}`}>

                
            </div>
        </div>
    )
}

export default TaxModal;