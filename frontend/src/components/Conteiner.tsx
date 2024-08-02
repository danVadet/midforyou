
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ModalFormProduct from './ModalFormProduct';
import DeleteProductModal from './DeleteProductModal';
import { Product } from '../models/Product';
import { Container } from '../models/Container';


const Conteiner = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [sumPesoTotal, setSumPesoTotal] = useState(0);
    const [sumVolumeTotal, setSumVolumeTotal] = useState(0);
    const [openModalFormProduct, setOpenModalFormProduct] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [product, setProduct] = useState<Product>();
    
    const [container, setContainer] = useState<Container>();

    async function handleDeleteProduct(id: number) {
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
    const getConteiner = async () => {
        const response = await axios.get(`http://localhost:5077/containers/capacity`);
        console.log(response.data);
        setContainer(response.data);

    }

    const getProducts = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/products`);
            setProducts(response.data);
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
        getProducts();
        getSumPesoTotal();
        getSumVolumeTotal();
        getConteiner();
    }, []);

    return (
        <>
            <h1>Conteiner</h1>

            <div className={`${styles.container}`}>
                {openModalFormProduct && <ModalFormProduct closeModal={() => setOpenModalFormProduct(false)} getConteiners={getProducts} />}
                <button onClick={() => handleAddNewProduct()}>Adicionar novo produto</button>
            </div>
            <div className={`${styles.info_container}`}>
                <h2>{`Equipamento: ${container?.typeContainer}`}</h2>
                <h2>{`Carga máxima: ${container?.capacidadePeso}`}</h2>
                <h2>{`Capacidade cública: ${container?.capacidadeVolume}`}</h2>
          
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
                    {products.length === 0 ? (<td>Carregando...</td>) : (
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.nome}</td>
                                <td>{product.peso}</td>
                                <td>{product.volume}</td>
                                <td>{product.quantidade}</td>
                                <td>{product.pesoTotal}</td>
                                <td>{product.volumeTotal}</td>
                            <td>
                            
                            {openModalFormProduct && <ModalFormProduct
                                        closeModal={() => setOpenModalFormProduct(false)}   getConteiners={getProducts} productData={product} />}
                                        <button onClick={() => handleEditProduct(product.id)}>Editar</button>

                                {openDeleteModal && <DeleteProductModal 
                                        closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getConteiners={getProducts} productCurrent={product}  />}
                                        <button onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
                                </td>
                            </tr>
                        )))}
                </tbody>
            </table>

            <div>
            <h3>{`Peso total de  todos os produtos: ${sumPesoTotal}`}</h3>
            </div>

            <div>
                <h3>{`Volume total de  todos os produtos: ${sumVolumeTotal}`}</h3>
            </div>
        </>
    );

}

export default Conteiner;