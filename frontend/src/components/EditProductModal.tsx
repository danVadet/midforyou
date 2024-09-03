import { useState } from "react";
import styles from './EditProductModal.module.css'
import axios from "axios";
import { Product } from "../models/Product";
import Message from "./Message";

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
            window.location.reload();

        }

    } 


    return (

        <div className={`${styles.modal}`}>
            <div className={`${styles.modalBody}`}>
             <button onClick={() => closeModal()}>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#00afef" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
</svg>
             </button>
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