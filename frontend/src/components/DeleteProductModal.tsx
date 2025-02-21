import axios from 'axios'
import styles from './DeleteProductModal.module.css'
import { Product } from '../models/Product'
import { Container } from '../models/Container';

interface IDeleteProductModalProps {
    setShowDeleteMessage(): void;
    setPctPeso(pctPeso: number): void;
    setProgressPeso(progress: React.SetStateAction<number>):void;
    setPctVolume(pctVolume: number): void;
    setProgressVolume(progress: React.SetStateAction<number>):void;
    message: string
    productCurrent: Product
    containerType: Container
    closeModal(): void
    getProducts(): void
    getTotalQuantity(): void;
    getSumPesoTotal(): void
    getSumVolumeTotal(): void

}
export const DeleteProductModal = (props: IDeleteProductModalProps) => {

    const confirmDelete = async () => { 
    
        const response = await axios.delete(`http://localhost:5077/products/${props.productCurrent.id}`);
        console.log(response.data);  

        if(props.containerType.id > 0) {
            const responsePeso = await axios.get(`http://localhost:5077/containers/capacityPeso/${props.containerType.id}`);

        props.setPctPeso(responsePeso.data);
        props.setProgressPeso(val => {
            const newVal = val + 10
            return newVal > 100 ? 100 : parseInt(responsePeso.data);
        })
        const responseVolume = await axios.get(`http://localhost:5077/containers/capacity/${props.containerType.id}`);
        props.setPctVolume(responseVolume.data);

        props.setProgressVolume( val => {
            const newVal = val + 10
            return newVal > 100 ? 100 : parseInt(responseVolume.data);
        })

        }
    
        props.closeModal();
        props.setShowDeleteMessage();
        props.getProducts();
        props.getTotalQuantity();
        props.getSumPesoTotal();
        props.getSumVolumeTotal(); 
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