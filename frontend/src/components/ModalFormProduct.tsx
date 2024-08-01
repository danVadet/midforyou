import { useState } from "react";
import "./ModalFormProduct.css"
import axios from "axios";
import { Product } from "../models/Product";

interface ModalFormProductProps {

    closeModal(): void
    getConteiners(): void
    productData?: Product
}

const ModalFormProduct = ({ closeModal, getConteiners, productData }: ModalFormProductProps) => {

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

    const handleSubmit =  (e: React.FormEvent) => {
        e.preventDefault();

        if (product.nome === '' && product.quantidade === 0 && product.peso === 0 && product.volume === 0) {
            closeModal();
            getConteiners();

        } else {
            if (productData?.id) {
                updateProduct(productData.id);              

            } else {
                addProduct();

    
            }

        }

    } 
    const updateProduct = async (id : number) => {

        const response = await axios.put(`http://localhost:5077/products/${id}`, {
            nome: product.nome,
            quantidade: product.quantidade,
            peso: product.peso,
            volume: product.volume,
        });
        console.log(response.data);
        closeModal();
        getConteiners();

    }


    const addProduct = async () => {
        const response = await axios.post(`http://localhost:5077/addProduct`, {
            nome: product.nome,
            quantidade: product.quantidade,
            peso: product.peso,
            volume: product.volume,
        });
        console.log(response.data);
        closeModal();
        getConteiners();


    }


    return (

        <div className="modal-overflow">
            <div className="modal-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={product.nome} onChange={(e) => handleChange(e)} />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade" value={product.quantidade} onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input type="number" name="peso" value={product.peso} onChange={(e) => handleChange(e)} />
                    <label>Volume</label>
                    <input type="number" name="volume" value={product.volume} onChange={(e) => handleChange(e)} />
                    <button>Adicionar</button>
                    <button onClick={closeModal}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalFormProduct;