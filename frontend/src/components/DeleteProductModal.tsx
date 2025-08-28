import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { IProduct } from '../models/IProduct'

interface IDeleteProductModalProps {
    productCurrent?: IProduct
    selectedContainerId: number;
    closeModal(): void
    getProducts(): void
    getSumTotalWeight(): void;
    getSumTotalVolume(): void;
    getSumTotalQuantity(): void;
    getContainer(id: number): void;
    setShowDeleteMessage(): void;
}


export const DeleteProductModal = (props: IDeleteProductModalProps) => {

    
    const confirmDelete = async () => { 

        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/products/${props.productCurrent?.id}`);
        console.log(response.data);  

        props.closeModal();
        props.getProducts();
        props.getSumTotalQuantity();
        props.getSumTotalWeight();
        props.getSumTotalVolume();
        props.getContainer(props.selectedContainerId);
        props.setShowDeleteMessage();

 
    }
    return (
        <>
            <div className={`${styles.modal}`}>
                <div className={`${styles.modalContent}`}>
                    <span onClick={props.closeModal} className={`${styles.modalClose}`}>&times;</span>
                    <h1>Confirmar exclusão</h1>
                    <h3>Tem certeza que deseja excluir este produto?</h3>
                    <div className={`${styles.modalActions}`}>
                        <button className={`${styles.buttonDelete}`} onClick={() => confirmDelete()}>Excluir</button>
                        <button className={`${styles.buttonCancel}`} onClick={props.closeModal}>Cancelar</button>
                    </div>

                </div>

            </div>
        </>
    );

}