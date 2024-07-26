
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dialog from './Dialog';


const Conteiner = () => {

    const [conteiners, setConteiners] = useState([]);
    const [totalPeso, setTotalPeso] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);

    const [dialog, setDialog]  = useState({
        message: '',
        openDialog: false
    });

    const [formData, setFormData] = useState({
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
    const getTotalPeso = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/products/totalPeso`);
            setTotalPeso(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        getConteiners();
    }
    const getTotalVolume = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/products/totalVolume`);
            setTotalVolume(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        getConteiners();
    }


    useEffect(() => {
        getConteiners();
        getTotalPeso();
        getTotalVolume();
    }, []);

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value })

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:5077/createProduct`, {
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
  

    return (
        <>
            <h1>Conteiner</h1>
            <div className={`${styles.container}`}>
                <form className={`${styles.formContainer}`} onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="nome" placeholder='Digite o nome' value={formData.nome} onChange={(e) => handleChange(e)} />
                    <input type="number" name="peso" placeholder='Digite o peso' value={formData.peso} onChange={(e) => handleChange(e)} />
                    <input type="number" name="volume" placeholder='Digite o volume' value={formData.volume} onChange={(e) => handleChange(e)} />
                    <button>Adicionar o produto</button>
                </form>

                <table className={`${styles.listContainer}`}>
                    <tbody>
                        {conteiners.length == 0 ? (<td>Carregando...</td>) : (
                            conteiners.map((conteiner, index) => (
                                <tr key={index}>
                                    <td>{conteiner['id']}</td>
                                    <td>{conteiner['nome']}</td>
                                    <td>{conteiner['peso']}</td>
                                    <td>{conteiner['volume']}</td>
                                    <td><button onClick={() => handleDelete(conteiner['id'])}>Excluir</button></td>
                                </tr>
                            )))}
                    </tbody>
                </table>
                <div className={`${styles.totalContainer}`}>
                    <h3>Peso Total: {totalPeso}</h3>
                    <h3>Volume Total: {totalVolume}</h3>
                </div>

            </div>
            
            </>

    );

}

export default Conteiner;