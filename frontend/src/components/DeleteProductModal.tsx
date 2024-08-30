
import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { Product } from '../models/Product'

interface IProps {
    message: string
    productCurrent?: Product
    closeModal(): void
    getProducts(): void

}
const DeleteProductModal:  React.FC<IProps> = (props) => {
    
    const confirmDelete = async () => { 

        const response = await axios.delete(`http://localhost:5077/products/${props.productCurrent?.id}`);
        console.log(response.data);  

        props.closeModal();
        props.getProducts();
        window.location.reload();
    }
    return (
        <>
            <div className={`${styles.dialog}`}>
                <div className={`${styles.dialogContainer}`}>
                    <h2>{props.message}</h2>
                    <div className={`${styles.dialogButtonContainer}`}>
                        <button onClick={() => confirmDelete()}>Sim</button>
                        <button onClick={props.closeModal}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}


export default DeleteProductModal;