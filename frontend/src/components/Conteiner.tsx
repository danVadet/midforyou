
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormProductModal from './FormProductModal';
import DeleteProductModal from './DeleteProductModal';
import { Product } from '../models/Product';


const Conteiner = () => {

    const [conteiners, setConteiners] = useState<Product[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [edit,  setEdit] =  useState(false);

    const handleDelete = async (id: number) => {
        setOpenDeleteModal(true)
        const response = await axios.delete(`http://localhost:5077/products/${id}`);
        console.log(response.data);    
    }
    const handleEdit = async (id: number) => {
        setOpenModal(true)
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        setEdit(true);
        console.log(response.data);    
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
    useEffect(() => {
        getConteiners();
    }, []);

    return (
        <>
            <h1>Conteiner</h1>

            <div className={`${styles.container}`}>
                {openModal && <FormProductModal closeModal={() => setOpenModal(false)} getConteiners={getConteiners} />}
                <button onClick={() => setOpenModal(true)}>Adicionar novo produto</button>
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
                            
                            {openModal && <FormProductModal
                                        closeModal={() => setOpenModal(false)}   getConteiners={getConteiners}  />}
                                        <button onClick={() => handleEdit(conteiner.id)}>Editar</button>

                                {openDeleteModal && <DeleteProductModal 
                                        closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getConteiners={getConteiners}  />}
                                        <button onClick={() => handleDelete(conteiner.id)}>Excluir</button>
                                </td>
                            </tr>
                        )))}
                </tbody>
            </table>

            <div className={`${styles.pesoAllProdutos}`}>
                Peso total de todos os produtos 300
            </div>

            <div className={`${styles.pesoAllVolume}`}>
                Volume total de todos os produtos
            </div>
        </>
    );

}

export default Conteiner;