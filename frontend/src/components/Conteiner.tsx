import styles from './Conteiner.module.css'
import  { useEffect, useState } from 'react'
import axios from 'axios';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';
import { Product } from '../models/Product';
import { Container } from '../models/Container';

interface IContainerProps {

    loadCalculator: string;
    enterName: string;
    nameRequiredContainer: string;
    enterQuantity: string;
    quantityRequiredContainer: string;
    enterPeso: string;
    pesoRequiredContainer: string;
    enterVolume: string;
    volumeRequiredContainer: string;
    buttonAdd: string;
    searchProduct: string;
    productNotAdded: string;
    productQuantity: string;
    productUniPeso: string;
    productUniVolume: string;
    productTotalPeso: string;
    productTotalVolume: string; 
    pesoTotal: string;
    volumeTotal:string;
    selectContainer: string;
    pesoCapicity: string;
    cubCapacicity: string;
}

interface IValues {
    nome: string;
    quantidade: string;
    peso: string;
    volume: string;
  }

interface IErrors extends Partial<IValues> {}

const Conteiner = (props: IContainerProps) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [containers, setContainers] = useState<Container[]>([]);
    const [sumPesoTotal, setSumPesoTotal] = useState(0);
    const [sumVolumeTotal, setSumVolumeTotal] = useState(0);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [product, setProduct] = useState<Product>({
        id: 0,
        nome: "",
        quantidade: 0,
        peso: 0,
        volume: 0,
        pesoTotal: 0,
        volumeTotal: 0,
    });
   
    const [errors, setErrors] = useState<IErrors>({});
    const [search, setSearch] = useState('');
    const [productCurrent, setProductCurrent] = useState<Product>();
    const [container, setContainer] = useState<Container>({
        id: 0,
        name: "",
        image: "",
        capacidadePeso: 0,
        capacidadeVolume: 0,

    });
    const [selectedContainer, setSelectedConatiner] = useState<Container>({
        id: 0,
        name: "",
        image: "",
        capacidadePeso: 0,
        capacidadeVolume: 0,
    });

    const handleDeleteProduct = async (id: number) => {

        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        setProductCurrent(response.data);
        setOpenDeleteModal(true);
    }

    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }
    const handleChangeSelectContainer = async (e: React.ChangeEvent<HTMLSelectElement>) => {

        try {
            const value = e.target.value;
            const response = await axios.get(`http://localhost:5077/containers/${value}`);
            console.log(response.data);
            setSelectedConatiner(response.data);

            if (selectedContainer != null) {
                const response = await axios.get(`http://localhost:5077/containers/capacity/${value}`);
                console.log(response.data);
                setContainer(response.data);
            }
           

        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }
    const validate = (product: Product) => {
        const errors: { nome?: string; quantidade?: string; peso?: string; volume?: string; } = {};
    
        if (!product.nome) {
          errors.nome = `${props.nameRequiredContainer}`;
        }
    
        if(!product.quantidade) {
           errors.quantidade = `${props.quantityRequiredContainer}`;;
        }
    
        if (!product.peso) {
          errors.peso = `${props.pesoRequiredContainer}`;
        }
    
        if(!product.volume) {
            errors.volume = `${props.volumeRequiredContainer}`;;
        }

        return errors;
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const errors = validate(product);
        if (errors && Object.keys(errors).length > 0) {
          return setErrors(errors);
          
          } else {
     
            const response = await axios.post(`http://localhost:5077/products/addProduct`, {
                nome: product.nome,
                quantidade: product.quantidade,
                peso: product.peso,
                volume: product.volume,
            });
            console.log(response.data);
            setProduct({id: 0, nome: "", quantidade: 0, peso: 0, volume: 0, pesoTotal: 0, volumeTotal: 0})
            setErrors({});
            getProducts();
            getSumPesoTotal();
            getSumVolumeTotal();
        }        
    }
    const handleEditProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        setProductCurrent(response.data);
        setOpenEditModal(true);
    }

    const getProducts = async () => {
        try {
            if (search) {
                const response = await axios.get(`http://localhost:5077/products?search=${search}`);
                setProducts(response.data);
                console.log(response.data);

            } else {
                const response = await axios.get(`http://localhost:5077/products`);
                setProducts(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getSumPesoTotal = async () => {

        try {
            const response = await axios.get(`http://localhost:5077/sumPesoTotal`);
            console.log(response.data);
            setSumPesoTotal(response.data);
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
    const getContainers = async () => {
        try {
            const response = await axios.get(`http://localhost:5077/containers`);
            console.log(response.data);
            setContainers(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    const deleteAllProdutos = async () => {
        const response = await axios.delete(`http://localhost:5077/products`);
        console.log(response.data);
    }
    const closeModal = () => {
        setOpenEditModal(false);
    }

    useEffect(() => {

        getProducts();
        getSumPesoTotal();
        getSumVolumeTotal();
        getContainers();

        window.addEventListener('unload', deleteAllProdutos);

        return () => {

            window.removeEventListener('unload', deleteAllProdutos);
        }

    }, [search]);

    return (
        <>
            <div className={`${styles.container}`}>
                <h1>{props.loadCalculator}</h1>

                <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>
                    <input type="text" name="nome" value={product.nome || "" } className={ product.nome ? "" : `${errors.nome && `${styles.invalid}`}`} placeholder={`${props.enterName}`} onChange={(e) => handleChange(e)} />
                     {product.nome ?  "" :   errors.nome && <p className={styles.nameError}>{`${errors.nome}`}</p> }
                     {product.nome ?  "" :   errors.nome &&  < svg className={styles.iconError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="rgb(240, 19, 11)"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16.414,15c0,0 3.139,3.139 3.293,3.293c0.391,0.391 0.391,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0c-0.154,-0.153 -3.293,-3.293 -3.293,-3.293c0,0 -3.139,3.139 -3.293,3.293c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.153,-0.154 3.293,-3.293 3.293,-3.293c0,0 -3.139,-3.139 -3.293,-3.293c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,0c0.154,0.153 3.293,3.293 3.293,3.293c0,0 3.139,-3.139 3.293,-3.293c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.391 0.391,1.024 0,1.414c-0.153,0.154 -3.293,3.293 -3.293,3.293z"></path></g></g>
</svg>}

                    <input type="number" name="quantidade" value={product.quantidade || ""} className={ product.quantidade ? "" : `${errors.quantidade && `${styles.invalid}`}`}  placeholder={`${props.enterQuantity}`} onChange={(e) => handleChange(e)} />
                    {product.quantidade ?  "" :   errors.quantidade && <p className={styles.quantityError}>{`${errors.quantidade}`}</p> }
                    {product.quantidade ?  "" :   errors.quantidade &&  < svg className={styles.iconError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="rgb(240, 19, 11)"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16.414,15c0,0 3.139,3.139 3.293,3.293c0.391,0.391 0.391,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0c-0.154,-0.153 -3.293,-3.293 -3.293,-3.293c0,0 -3.139,3.139 -3.293,3.293c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.153,-0.154 3.293,-3.293 3.293,-3.293c0,0 -3.139,-3.139 -3.293,-3.293c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,0c0.154,0.153 3.293,3.293 3.293,3.293c0,0 3.139,-3.139 3.293,-3.293c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.391 0.391,1.024 0,1.414c-0.153,0.154 -3.293,3.293 -3.293,3.293z"></path></g></g>
</svg>}

                    <input type="number" name="peso" value={product.peso || ""} className={ product.peso ? "" :  `${errors.peso && `${styles.invalid}`}`}  placeholder={`${props.enterPeso}`} onChange={(e) => handleChange(e)} />
                    {product.peso ?  "" :   errors.peso && <p className={styles.pesoError}>{`${errors.peso}`}</p> }
                    {product.peso ?  "" :   errors.peso &&  < svg className={styles.iconError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="rgb(240, 19, 11)"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16.414,15c0,0 3.139,3.139 3.293,3.293c0.391,0.391 0.391,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0c-0.154,-0.153 -3.293,-3.293 -3.293,-3.293c0,0 -3.139,3.139 -3.293,3.293c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.153,-0.154 3.293,-3.293 3.293,-3.293c0,0 -3.139,-3.139 -3.293,-3.293c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,0c0.154,0.153 3.293,3.293 3.293,3.293c0,0 3.139,-3.139 3.293,-3.293c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.391 0.391,1.024 0,1.414c-0.153,0.154 -3.293,3.293 -3.293,3.293z"></path></g></g>
</svg>}

                    <input type="number" name="volume" value={product.volume || ""} className={ product.volume ? "" :  `${errors.volume && `${styles.invalid}`}`}  placeholder={`${props.enterVolume}`} onChange={(e) => handleChange(e)} />
                    {product.volume ?  "" :   errors.volume && <p className={styles.volumeError}>{`${errors.volume}`}</p> }
                    {product.volume ?  "" :   errors.peso &&  < svg className={styles.iconError} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="rgb(240, 19, 11)"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16.414,15c0,0 3.139,3.139 3.293,3.293c0.391,0.391 0.391,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0c-0.154,-0.153 -3.293,-3.293 -3.293,-3.293c0,0 -3.139,3.139 -3.293,3.293c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.153,-0.154 3.293,-3.293 3.293,-3.293c0,0 -3.139,-3.139 -3.293,-3.293c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,0c0.154,0.153 3.293,3.293 3.293,3.293c0,0 3.139,-3.139 3.293,-3.293c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.391 0.391,1.024 0,1.414c-0.153,0.154 -3.293,3.293 -3.293,3.293z"></path></g></g>
</svg>}

                    <button>{props.buttonAdd}</button>
                </form>
                <div className={`${styles.calculadoraContent}`}>

                    <div className={`${styles.left}`}>

                        <div className={`${styles.searchContent}`}>
                            <input type="text" value={search} onChange={(e) => handleChangeSearch(e)}  placeholder={`${props.searchProduct}`} />
                        </div>

                        <div className={`${styles.listProducts}`}>
                            {products.length === 0 ? (<div>{props.productNotAdded}</div>) : (
                                products.map((product, index) => (
                                    <div className={`${styles.content}`} key={index}>
                                        <div>{product.nome}</div>
                                        <div className={`${styles.infoProduct}`}>
                                            <div>{`${props.productUniPeso}: ${product.peso} kg`}</div>
                                            <div>{`${props.productUniVolume}: ${product.volume} m³`}</div>
                                        </div>
                                        <div>{`${props.productQuantity}: ${product.quantidade}`}</div>
                                        <div className={`${styles.infoTotalProduct}`}>
                                            <div>{`${props.productTotalPeso}: ${product.pesoTotal} kg`}</div>
                                            <div>{`${props.productTotalVolume}: ${product.volumeTotal} m³`}</div>
                                        </div>
                                        <div>

                                            {openEditModal && <EditProductModal 
                                                 closeModal={() => closeModal() } getProducts={getProducts} getSumPesoTotal={getSumPesoTotal} getSumVolumeTotal={getSumVolumeTotal} currentProduct={productCurrent} />}
                                            <button className={`${styles.buttonEdit}`} onClick={() => handleEditProduct(product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256">
                                                    <g fill="rgb(255, 255, 255)" >
                                                        <g transform="scale(5.12,5.12)">
                                                            <path d="M43.125,2c-1.24609,0 -2.48828,0.48828 -3.4375,1.4375l-0.8125,0.8125l6.875,6.875c-0.00391,0.00391 0.8125,-0.8125 0.8125,-0.8125c1.90234,-1.90234 1.89844,-4.97656 0,-6.875c-0.95312,-0.94922 -2.19141,-1.4375 -3.4375,-1.4375zM37.34375,6.03125c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-32.4375,32.46875c-0.12891,0.11719 -0.22656,0.26953 -0.28125,0.4375l-2,7.5c-0.08984,0.34375 0.01172,0.70703 0.26172,0.95703c0.25,0.25 0.61328,0.35156 0.95703,0.26172l7.5,-2c0.16797,-0.05469 0.32031,-0.15234 0.4375,-0.28125l32.46875,-32.4375c0.39844,-0.38672 0.40234,-1.02344 0.01563,-1.42187c-0.38672,-0.39844 -1.02344,-0.40234 -1.42187,-0.01562l-32.28125,32.28125l-4.0625,-4.0625l32.28125,-32.28125c0.30078,-0.28906 0.39063,-0.73828 0.22266,-1.12109c-0.16797,-0.38281 -0.55469,-0.62109 -0.97266,-0.59766c-0.03125,0 -0.0625,0 -0.09375,0z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                            {openDeleteModal && <DeleteProductModal
                                                closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getProducts={getProducts} getSumPesoTotal={getSumPesoTotal} getSumVolumeTotal={getSumVolumeTotal} productCurrent={productCurrent} />}
                                            <button className={`${styles.buttonDelete}`} onClick={() => handleDeleteProduct(product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                                    <g fill="rgb(255, 255, 255)">
                                                        <g transform="scale(2.56,2.56)">
                                                            <path d="M46,13c-1.64497,0 -3,1.35503 -3,3v2h-10.73437c-1.7547,0 -3.38611,0.92281 -4.28906,2.42773l-1.54297,2.57227h-3.43359c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4h1.07422l3.57422,46.45898c0.23929,3.11679 2.85609,5.54102 5.98242,5.54102h32.73828c3.12633,0 5.74313,-2.42423 5.98242,-5.54102l3.57422,-46.45898h1.07422c2.19733,0 4,-1.80267 4,-4c0,-2.19733 -1.80267,-4 -4,-4h-3.43359l-1.54297,-2.57227c-0.90296,-1.50492 -2.53436,-2.42773 -4.28906,-2.42773h-10.73437v-2c0,-1.64497 -1.35503,-3 -3,-3zM46,15h8c0.56503,0 1,0.43497 1,1v2h-10v-2c0,-0.56503 0.43497,-1 1,-1zM32.26563,20h11.56641c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.57617c1.0553,0 2.02922,0.55195 2.57227,1.45703l1.52734,2.54297h-3.33398c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h5h3.5c1.11667,0 2,0.88333 2,2c0,1.11667 -0.88333,2 -2,2h-54c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2h4h34.5c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794h-33.33398l1.52734,-2.54297c0.54305,-0.90508 1.51697,-1.45703 2.57227,-1.45703zM64.5,24c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h2c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794zM26.07813,31h47.84375l-3.56445,46.30664c-0.16071,2.09321 -1.88861,3.69336 -3.98828,3.69336h-32.73828c-2.09967,0 -3.82757,-1.60015 -3.98828,-3.69336zM38,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM50,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-3.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v3.5c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v25.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-25.5c0,-1.65109 -1.34891,-3 -3,-3zM62,35c-1.65109,0 -3,1.34891 -3,3v1.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-1.5c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-25.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v25.5c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM38,36c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2zM59.49219,41.99219c-0.13261,0.00207 -0.25896,0.05673 -0.35127,0.15197c-0.0923,0.09523 -0.14299,0.22324 -0.14092,0.35584v2c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-2c0.00212,-0.13532 -0.0507,-0.26572 -0.1464,-0.36141c-0.0957,-0.0957 -0.22609,-0.14852 -0.36141,-0.1464z"></path></g></g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )))}
                        </div>
                        <div className={`${styles.totalContainer}`}>
                            <h3>{`${props.pesoTotal}: ${sumPesoTotal} kg`}</h3>
                            <h3>{`${props.volumeTotal}: ${sumVolumeTotal} m³`}</h3>
                        </div>
                    </div>

                    {products.length !== 0 && <>    <div className={`${styles.right}`}>
                        <div className={`${styles.info_container}`}>
                            <select onChange={(e) => handleChangeSelectContainer(e)}>
                                <option  hidden>{props.selectContainer}</option>
                                {containers.map((container, index) => (
                                    <option value={container.id} key={index}>{container.name}</option>
                                ))}
                            </select>
                            <h2>{`${selectedContainer.name}`}</h2>
                            <h2>{`${props.pesoCapicity}: ${selectedContainer.capacidadePeso} kg`}</h2>
                            <h2>{`${props.cubCapacicity}: ${selectedContainer.capacidadeVolume} m³`}</h2>

                            <img src={selectedContainer.image ? `${selectedContainer.image}` : `./assets/containerPlaceholder.png`} alt="" />
                            {product.pesoTotal <= container.capacidadePeso && product.volumeTotal <= container.capacidadeVolume ?
                                <> </> :  <div className={styles.containerMessage}> <h2>Esse contêiner não cabe</h2> </div>}
                        </div>
                    </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default Conteiner;