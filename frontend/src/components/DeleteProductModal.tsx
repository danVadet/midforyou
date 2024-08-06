
import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { Product } from '../models/Product'

interface DeletePeoductModalProps {
    message: string
    productCurrent?: Product
    closeModal(): void
    getProducts(): void

}

const DeleteProductModal = ({ message, closeModal, getProducts, productCurrent}: DeletePeoductModalProps) => {
    
    const confirmDelete = async () => { 

        const response = await axios.delete(`http://localhost:5077/products/${productCurrent?.id}`);
        console.log(response.data);  

        closeModal();
        getProducts();
    }
    return (
        <>
            <div className={`${styles.dialog}`}>
                <div className={`${styles.dialogContainer}`}>
                    <h2>{message}</h2>
                    <div className={`${styles.dialogButtonContainer}`}>
                        <button onClick={() => confirmDelete()}>Sim</button>
                        <button onClick={closeModal}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}


export default DeleteProductModal;