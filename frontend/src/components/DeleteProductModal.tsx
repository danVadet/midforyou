
import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { IProduct } from '../models/IProduct'

interface IDeleteProductModalProps {
    message: string
    productCurrent?: IProduct
    selectedContainerId: number;
    closeModal(): void
    getProducts(): void
    getSumTotalWeight(): void;
    getSumTotalVolume(): void;
    getContainer(id: number): void;
    setShowDeleteMessage(): void;
}


export const DeleteProductModal = (props: IDeleteProductModalProps) => {

    
    const confirmDelete = async () => { 

        const response = await axios.delete(`http://localhost:5262/products/${props.productCurrent?.id}`);
        console.log(response.data);  

        props.closeModal();
        props.getProducts();
        props.getSumTotalWeight();
        props.getSumTotalVolume();
        props.getContainer(props.selectedContainerId);
        props.setShowDeleteMessage();
 
    }
    return (
        <>
            <div className={`${styles.modal}`}>
                <div className={`${styles.modalContainer}`}>
                    <h2>{props.message}</h2>
                    <div className={`${styles.modalButtonContainer}`}>
                        <button onClick={() => confirmDelete()}>Sim</button>
                        <button onClick={props.closeModal}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}