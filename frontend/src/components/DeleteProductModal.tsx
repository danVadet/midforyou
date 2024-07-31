
import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { Product } from '../models/Product'

interface DeletePeoductModalProps {
    message: string
    closeModal(): void
    getConteiners(): void

}

const DeleteProductModal = ({ message, closeModal, getConteiners}: DeletePeoductModalProps) => {

    const confirmDelete = async () => { 

        closeModal();
        getConteiners();
    }
    return (
        <>
            <div className={`${styles.dialog}`}>
                <div className={`${styles.dialogContainer}`}>
                    <h2>{message}</h2>
                    <div className={`${styles.dialogButtonContainer}`}>
                        <button onClick={confirmDelete}>Sim</button>
                        <button onClick={closeModal}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}


export default DeleteProductModal;