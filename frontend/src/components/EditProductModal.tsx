import { useState } from "react";
import styles from './EditProductModal.module.css'
import axios from "axios";
import { Product } from "../models/Product";

interface EditProductModalProps {

    closeModal(): void
    getProducts(): void
    productData?: Product
} 

const EditProductModal = ({ closeModal, getProducts, productData }: EditProductModalProps) => {

    const [product, setProduct] = useState<Product>({
        id: productData?.id || 0,
        nome: productData?.nome || "",
        quantidade: productData?.quantidade || 0,
        peso: productData?.peso || 0,
        volume: productData?.volume || 0,
        pesoTotal: productData?.pesoTotal || 0,
        volumeTotal: productData?.volumeTotal || 0,
    })
    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }

    const handleSubmit = async  (e: React.FormEvent) => {
        e.preventDefault();

        if (product.nome === '' && product.quantidade === 0 && product.peso === 0 && product.volume === 0) {
            closeModal();
            getProducts();

        } else {
            const response = await axios.put(`http://localhost:5077/products/${productData?.id}`, {
                nome: product.nome,
                quantidade: product.quantidade,
                peso: product.peso,
                volume: product.volume

            });
            console.log(response.data);
            closeModal();
            getProducts();

        }

    } 


    return (

        <div className={`${styles.modal}`}>
            <div className={`${styles.modalBody}`}>
            <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={product.nome} onChange={(e) => handleChange(e)} />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade" value={product.quantidade} onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input type="number" name="peso" value={product.peso} onChange={(e) => handleChange(e)} />
                    <label>Volume</label>
                    <input type="number" name="volume" value={product.volume} onChange={(e) => handleChange(e)} />
                    <button>Atualizar o produto</button>
                </form>


                
            </div>
        </div>
    )
}

export default EditProductModal;