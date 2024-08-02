
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
    const [product, setProduct] = useState<Product>({
        id: 0,
        nome: "",
        quantidade: 0,
        peso: 0,
        volume: 0,
        pesoTotal: 0,
        volumeTotal: 0,
    })

    const [container, setContainer] = useState<Container>();

    async function handleDeleteProduct(id: number) {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        setProduct(response.data);

        setOpenDeleteModal(true);
    }

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post(`http://localhost:5077/products/addProduct`, {
            nome: product.nome,
            quantidade: product.quantidade,
            peso: product.peso,
            volume: product.volume,
        });
        console.log(response.data);

        getProducts();

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
        <div className={`${styles.container}`}>

            <h1>Calculadora CBM</h1>

                <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={product.nome} onChange={(e) => handleChange(e)} />
                    <label>Quantidade</label>
                    <input type="number" name="quantidade" value={product.quantidade} onChange={(e) => handleChange(e)} />
                    <label>Peso</label>
                    <input type="number" name="peso" value={product.peso} onChange={(e) => handleChange(e)} />
                    <label>Volume</label>
                    <input type="number" placeholder="Volume" name="volume" value={product.volume} onChange={(e) => handleChange(e)} />
                    <button>Adicionar novo produto</button>
                </form>
            <div className={`${styles.info_container}`}>
                <h2>{`Equipamento: ${container?.typeContainer}`}</h2>
                <h2>{`Carga máxima: ${container?.capacidadePeso} kg`}</h2>
                <h2>{`Capacidade cública: ${container?.capacidadeVolume} m³`}</h2>

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

                                    <button className={`${styles.buttonEdit}`} onClick={() => handleEditProduct(product.id)}>Editar</button>
                                    {openDeleteModal && <DeleteProductModal
                                        closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getConteiners={getProducts} productCurrent={product} />}
                                    <button className={`${styles.buttonDelete}`}  onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
                                </td>
                            </tr>
                        )))}
                </tbody>
                <div>
                <h3>{`Peso total de  todos os produtos: ${sumPesoTotal}`}</h3>
            </div>

            <div>
                <h3>{`Volume total de  todos os produtos: ${sumVolumeTotal}`}</h3>
            </div>
            </table>

            </div>
        </>
    );

}

export default Conteiner;