
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dialog from './Dialog';


const Conteiner = () => {

    const [conteiners, setConteiners] = useState([]);

    const [productId, setProductId] = useState(0);


    const [dialog, setDialog]  = useState({
        message: '',
        openDialog: false
    });

    const [formData, setFormData] = useState({
        quantidade: "",
        nome: "",
        peso: "",
        volume: ""
    })
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

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value })

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:5077/createProduct`, {
            quantidade: parseFloat(formData.quantidade),
            nome: formData.nome,
            peso: parseFloat(formData.peso),
            volume: parseFloat(formData.volume)
        });
        console.log(response.data);
        getConteiners();
    }

    const handleDelete = async (id: number) => {
        const response = await axios.delete(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        getConteiners();   
    }
    const handleEdit = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        setProductId(id);
    }
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:5077/products/${productId}`, {
            quantidade: parseFloat(formData.quantidade),
            nome: formData.nome,
            peso: parseFloat(formData.peso),
            volume: parseFloat(formData.volume)
        });
        console.log(response.data);
        setProductId(productId);
    }
    
    return (
        <>
            <h1>Conteiner</h1>
            <div className={`${styles.container}`}>
                <form className={`${styles.formContainer}`} onSubmit={(e) => handleSubmit(e)}>
                    <label>Produto</label>
                    <input type="text" name="nome" placeholder='Digite o nome' value={formData.nome} onChange={(e) => handleChange(e)} />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade"  value={formData.quantidade} onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input type="number" name="peso" placeholder='Digite o peso' value={formData.peso} onChange={(e) => handleChange(e)} />
                    <label>Volume</label>
                    <input type="number" name="volume" placeholder='Digite o volume' value={formData.volume} onChange={(e) => handleChange(e)} />
                    <button>Adicionar o produto</button>
                </form>

                <form className={`${styles.formContainer}`} onSubmit={(e) => handleUpdate(e)}>
                    <label>Produto</label>
                    <input type="text" name="nome" placeholder='Digite o nome' value={formData.nome} onChange={(e) => handleChange(e)} />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade"  value={formData.quantidade} onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input type="number" name="peso" placeholder='Digite o peso' value={formData.peso} onChange={(e) => handleChange(e)} />
                    <label>Volume</label>
                    <input type="number" name="volume" placeholder='Digite o volume' value={formData.volume} onChange={(e) => handleChange(e)} />
                    <button>Atualizar o produto</button>
                </form>

                </div>

                <table className={`${styles.listContainer}`}>
                    
                <thead>
                        <th>Código</th>
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
                                    <td>{conteiner['id']}</td>
                                    <td>{conteiner['nome']}</td>
                                    <td>{conteiner['peso']}</td>
                                    <td>{conteiner['volume']}</td>
                                    <td>{conteiner['quantidade']}</td>
                                    <td>{conteiner['pesoTotal']}</td>
                                    <td>{conteiner['volumeTotal']}</td>
                                    <td>
                                        <button onClick={() => handleEdit(conteiner['id'])}>Editar</button>
                                        <button onClick={() => handleDelete(conteiner['id'])}>Excluir</button>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </>
    );

}

export default Conteiner;