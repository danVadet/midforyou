
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ModalFormProduct from './ModalFormProduct';
import DeleteProductModal from './DeleteProductModal';
import { Product } from '../models/Product';


const Conteiner = () => {

    const [conteiners, setConteiners] = useState<Product[]>([]);
    const [sumPesoTotal, setSumPesoTotal] = useState(0);
    const [sumVolumeTotal, setSumVolumeTotal] = useState(0);
    const [openModalFormProduct, setOpenModalFormProduct] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [product, setProduct] = useState<Product>();
    

    const handleDeleteProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);  
        setProduct(response.data);   

        setOpenDeleteModal(true);
    }
    const handleAddNewProduct = () => {
        setOpenModalFormProduct(true);
        setProduct({} as Product);

    }
    const handleEditProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);  
        setProduct(response.data); 

        setOpenModalFormProduct(true);
    }

    const getConteiners = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/products`);
            setConteiners(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSumPesoTotal = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/sumPesoTotal`);
            setSumPesoTotal(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSumVolumeTotal = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/sumVolumeTotal`);
            setSumVolumeTotal(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getConteiners();
        getSumPesoTotal();
        getSumVolumeTotal();
    }, []);

    return (
        <>
            <h1>Conteiner</h1>

            <div className={`${styles.container}`}>
                {openModalFormProduct && <ModalFormProduct closeModal={() => setOpenModalFormProduct(false)} getConteiners={getConteiners} />}
                <button onClick={() => handleAddNewProduct()}>Adicionar novo produto</button>
            </div>

            <table className={`${styles.listContainer}`}>
                <thead>
                    <th>Nome</th>
                    <th>Peso</th>
                    <th>Volume</th>
                    <th>Quantidade</th>
                    <th>Peso Total</th>
                    <th>Volume Total</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {conteiners.length === 0 ? (<td>Carregando...</td>) : (
                        conteiners.map((conteiner, index) => (
                            <tr key={index}>
                                <td>{conteiner.nome}</td>
                                <td>{conteiner.peso}</td>
                                <td>{conteiner.volume}</td>
                                <td>{conteiner.quantidade}</td>
                                <td>{conteiner.pesoTotal}</td>
                                <td>{conteiner.volumeTotal}</td>
                            <td>
                            
                            {openModalFormProduct && <ModalFormProduct
                                        closeModal={() => setOpenModalFormProduct(false)}   getConteiners={getConteiners} productData={product} />}
                                        <button onClick={() => handleEditProduct(conteiner.id)}>Editar</button>

                                {openDeleteModal && <DeleteProductModal 
                                        closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getConteiners={getConteiners} productCurrent={product}  />}
                                        <button onClick={() => handleDeleteProduct(conteiner.id)}>Excluir</button>
                                </td>
                            </tr>
                        )))}
                </tbody>
            </table>

            <div>
            <h3>{`Peso total de  todos os produtos ${sumPesoTotal}`}</h3>
            </div>

            <div>
                <h3>{`Volume total de  todos os produtos ${sumVolumeTotal}`}</h3>
            </div>
        </>
    );

}

export default Conteiner;