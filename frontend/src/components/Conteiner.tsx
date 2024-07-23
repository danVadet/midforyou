
import styles from './Conteiner.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dialog from './Dialog';


const Conteiner = () => {

    const [conteiners, setConteiners] = useState([]);
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
            const response = await axios.get(`http://localhost:8080/produtos`);
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

        const response = await axios.post(`http://localhost:8080/produto`, {
            nome: formData.nome,
            peso: parseInt(formData.peso),
            volume: parseInt(formData.volume)
        });
        console.log(response.data);
        getConteiners();
    }

    const handleDelete = async (id: number) => {
            setDialog({
                message: "Deseja excluir esse produto ?",
                openDialog: true
            })
           
    
    }
    const confirmDialog = async  (confirm: boolean) => {
        if(confirm) {
            const response = await axios.delete(`http://localhost:8080/produtos/${id}`);
            console.log(response.data);
            getConteiners();   

            } else {
                setDialog({
                    message: "",
                    openDialog: false
                })
            }
        

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

            </div>
          {dialog.openDialog && <Dialog message={dialog.message} confirmDialog={confirmDialog} />}
            
            </>

    );

}

export default Conteiner;