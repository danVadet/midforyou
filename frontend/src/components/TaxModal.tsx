
import { ITaxModel } from '../models/ITaxModel'
import styles from './TaxModal.module.css'


interface ITaxModalProps {

    currentTax?: ITaxModel
} 



const TaxModal = (props: ITaxModalProps) => {



    return (
        <div className={`${styles.modal}`}>
            <div className={`${styles.modalBody}`}>
                <h1>{props.currentTax?.name}</h1>

                
            </div>
        </div>
    )
}

export default TaxModal;