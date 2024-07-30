
import axios from 'axios';
import styles from './DeleteProductModal.module.css'


interface DeletePeoductModalProps {
    message: string
    closeModal(): void
    confirmDelete(id: number): void
    productId: number

}

const DeleteProductModal = ({ message, closeModal, confirmDelete, productId }: DeletePeoductModalProps) => {

    return (
        <>
            <div className={`${styles.dialog}`}>
                <div className={`${styles.dialogContainer}`}>
                    <h2>{message}</h2>
                    <div className={`${styles.dialogButtonContainer}`}>
                        <button onClick={() => confirmDelete(productId)}>Sim</button>
                        <button onClick={closeModal}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}


export default DeleteProductModal;