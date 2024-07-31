import { useEffect, useState } from "react";
import "./AddProductModal.css"
import axios from "axios";
import { Product } from "../models/Product";
import { useParams } from "react-router-dom";

interface AddProductModalProps {
   
    closeModal(): void
    getConteiners(): void
}

const FormProductModal = ({ closeModal, getConteiners }: AddProductModalProps) => {

    const { id } = useParams();

    const [product, setProduct] = useState<Product>({
        id: 0,
        nome: "",
        quantidade: 0,
        peso: 0,
        volume: 0,
        pesoTotal: 0,
        volumeTotal: 0,
    })

    useEffect(() => {
        if (id) {
            const response = await axios.get(`http://localhost:5077/products/${id}`);

        }
         
    }, [id]);
    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (product.nome === '' && product.quantidade === 0 && product.peso === 0 && product.volume ===  0) {
            closeModal();
            getConteiners();

        } else {
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

    }

    return (

        <div className="modal-overflow">
            <div className="modal-body">

                

                <form onSubmit={(e) => handleSubmit(e)}>
                <label>Nome</label>
                    <input type="text" name="nome" value={product.nome } onChange={(e) => handleChange(e)} />
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

export default FormProductModal;