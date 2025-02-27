import styles from './Conteiner.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { EditProductModal } from './EditProductModal';
import  { DeleteProductModal } from './DeleteProductModal';
import { Product } from '../models/Product';
import { Container } from '../models/Container';
import { Message } from './Message';


interface IContainerProps {
    conteinersRef: React.RefObject<HTMLDivElement>,
    loadCalculator: string;
    enterName: string;
    nameRequiredContainer: string;
    enterQuantity: string;
    quantityRequiredContainer: string;
    enterLength: string;
    lengthRequiredContainer: string;
    enterWidth: string;
    widthRequiredContainer: string;
    enterHeight: string;
    heightRequiredContainer: string;
    enterPeso: string;
    pesoRequiredContainer: string;
    buttonAdd: string;
    searchProduct: string;
    productNotAdded: string;
    productQuantity: string;
    productUniPeso: string;
    productUniVolume: string;
    productTotalPeso: string;
    productTotalVolume: string;
    pesoTotal: string;
    volumeTotal: string;
    selectContainer: string;
    pesoCapicity: string;
    cubCapacicity: string;
    totalCargoPeso: string;
    totalCargoVolume: string;
}

interface IValues {
    nome: string;
    quantidade: string;
    length: string,
    width: string,
    height: string;
    peso: string;
}

interface IErrors extends Partial<IValues> { }

export const Conteiner = (props: IContainerProps) => {

    const [submitMessage, setSubmitMessage] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [containers, setContainers] = useState<Container[]>([]);
    const [sumPesoTotal, setSumPesoTotal] = useState(0);
    const [sumVolumeTotal, setSumVolumeTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const [openEditModal, setOpenEditModal] = useState(false);
    const [editMessage, setEditMessage] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);    

    const [product, setProduct] = useState<Product>({
        id: 0,
        nome: "",
        quantidade: 0,
        length: 0,
        width: 0,
        height: 0,
        peso: 0,
        volume: 0,
        pesoTotal: 0,
        volumeTotal: 0,
    });

    const [errors, setErrors] = useState<IErrors>({});
    const [searchProduct, setSearchProduct] = useState('');
    const [unsavedProduct, setUnsavedProduct] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product>({
        id: 0,
        nome: "",
        quantidade: 0,
        length: 0,
        width: 0,
        height: 0,
        peso: 0,
        volume: 0,
        pesoTotal: 0,
        volumeTotal: 0,
    });
    const [container, setContainer] = useState<Container>({
        id: 0,
        name: "",
        image: "",
        capacidadePeso: 0,
        capacidadeVolume: 0,
        products: []

    });

    const [pctVolume, setPctVolume] = useState(0)
    const [progressVolume, setProgressVolume] = useState(0)

    const [pctPeso, setPctPeso] = useState(0)
    const [progressPeso, setProgressPeso] = useState(0)


    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }
    
  
    const handleChangeSelectContainer = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        try {
            const response = await axios.get(`http://localhost:5077/containers/${value}`);
            setContainer(response.data);

            if (value != null) {

                const responseVolume = await axios.get(`http://localhost:5077/containers/capacity/${value}`);

                setPctVolume(responseVolume.data);
                setProgressVolume(val => {
                    const newVal = val + 10
                    return newVal > 100 ? 100 : parseInt(responseVolume.data);
                })

                const responsePeso = await axios.get(`http://localhost:5077/containers/capacityPeso/${value}`);

                setPctPeso(responsePeso.data);
                setProgressPeso(val => {
                    const newVal = val + 10
                    return newVal > 100 ? 100 : parseInt(responsePeso.data);
                })

            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchProduct(value);
    }
    const validate = (product: Product) => {
        const errors: { nome?: string; quantidade?: string;  length?: string; width?: string; height?: string;   peso?: string; } = {};

        if (!product.nome) {
            errors.nome = `${props.nameRequiredContainer}`;
        }

        if (!product.quantidade) {
            errors.quantidade = `${props.quantityRequiredContainer}`
        }

        if(!product.length) {
            errors.length = `${props.lengthRequiredContainer}`
        }

       if(!product.width) {
        errors.width = `${props.widthRequiredContainer}`

        }

        if (!product.height) {
            errors.height = `${props.heightRequiredContainer}`
        }

        if (!product.peso) {
            errors.peso = `${props.pesoRequiredContainer}`;
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
                length: product.length,
                width: product.width,
                height: product.height,
                peso: product.peso,
                volume: product.volume,
            });

            if(container.id > 0) {
                const responseVolume = await axios.get(`http://localhost:5077/containers/capacity/${container.id}`);

                setPctVolume(responseVolume.data);
                setProgressVolume(val => {
                    const newVal = val + 10
                    return newVal > 100 ? 100 : parseInt(responseVolume.data);
                })
    
                const responsePeso = await axios.get(`http://localhost:5077/containers/capacityPeso/${container.id}`);
    
                setPctPeso(responsePeso.data);
                setProgressPeso(val => {
                    const newVal = val + 10
                    return newVal > 100 ? 100 : parseInt(responsePeso.data);
                })
            }
        
            setProduct({ id: 0, nome: "", quantidade: 0, length: 0, width: 0, height: 0, peso: 0, volume: 0, pesoTotal: 0, volumeTotal: 0 })
            setErrors({});
            getProducts();
            getTotalQuantity();
            getSumPesoTotal();
            getSumVolumeTotal();

            setSubmitMessage(true);
            setTimeout(async () => {
                setSubmitMessage(false);
            }, 1000);
        }
    }
    const handleEditProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        console.log(response.data);
        setCurrentProduct(response.data);
      
        if (!openEditModal) {
            setOpenEditModal(true);
        } else {
            showEditMessage();
        }

    }
    const showEditMessage = () => {
        setEditMessage(true);
        setTimeout(async () => {
            setEditMessage(false);
        }, 1000);
    }
    const handleDeleteProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5077/products/${id}`);
        setCurrentProduct(response.data);

        if (!openDeleteModal) {
            setOpenDeleteModal(true);
        } else {
            showDeleteMessage();

        }
    }
    const showDeleteMessage = () => {
        setDeleteMessage(true);
        setTimeout(async () => {
            setDeleteMessage(false);
        }, 1000);
    }
    const getProducts = async () => {

        try {
            if (searchProduct) {
                const response = await axios.get(`http://localhost:5077/products?search=${searchProduct}`);
                setProducts(response.data);
            } else {
                const response = await axios.get(`http://localhost:5077/products`);
                setProducts(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getTotalQuantity = async () => {
        try {
            const response = await axios.get(`http://localhost:5077/totalQuantity`);
            setTotalQuantity(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSumPesoTotal = async () => {
        try {
            const response = await axios.get(`http://localhost:5077/sumPesoTotal`);
            setSumPesoTotal(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSumVolumeTotal = async () => {
        try {
            const response = await axios.get(`http://localhost:5077/sumVolumeTotal`);
            setSumVolumeTotal(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getContainers = async () => {
        try {
            const response = await axios.get(`http://localhost:5077/containers`);
            setContainers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteAllProducts = async () => {
        const response = await axios.delete(`http://localhost:5077/products`);
        window.onbeforeunload = () => true;
        setUnsavedProduct(true);
    }

    useEffect(() => {

        if (!unsavedProduct) {
            deleteAllProducts();
        } else {
            getProducts();
            getTotalQuantity();
            getSumPesoTotal();
            getSumVolumeTotal();
            getContainers();
        }

    }, [searchProduct, unsavedProduct]);

    return (
        <section ref={props.conteinersRef}>
            <div className={`${styles.conteinerComponent}`}>
                <div className={`${styles.container}`}>
                    <h1>{props.loadCalculator}</h1>

                    <form onSubmit={(e) => handleSubmit(e)} className={`${styles.formContainer}`}>
                        <input type="text" name="nome" value={product.nome || ""} className={product.nome ? "" : `${errors.nome && `${styles.invalid}`}`} placeholder={`${props.enterName}`} onChange={(e) => handleChange(e)} />
                        {product.nome ? "" : errors.nome && <p className={styles.nameError}>{`${errors.nome}`}</p>}

                        <input type="number" name="length" value={product.length || ""} className={product.length ? "" : `${errors.quantidade && `${styles.invalid}`}`} placeholder={`${props.enterLength}`} onChange={(e) => handleChange(e)} />
                        {product.length ? "" : errors.length && <p className={styles.quantityError}>{`${errors.length}`}</p>}
                         
                        <input type="number" name="width" value={product.width || ""} className={product.width ? "" : `${errors.quantidade && `${styles.invalid}`}`} placeholder={`${props.enterWidth}`} onChange={(e) => handleChange(e)} />
                        {product.width ? "" : errors.width && <p className={styles.quantityError}>{`${errors.width}`}</p>}

                        <input type="number" name="height" value={product.height || ""} className={product.height ? "" : `${errors.quantidade && `${styles.invalid}`}`}  placeholder={`${props.enterHeight}`} onChange={(e) => handleChange(e)} />
                        {product.height ? "" : errors.height && <p className={styles.quantityError}>{`${errors.height}`}</p>}

                       
                        <input type="number" name="peso" value={product.peso || ""} className={product.peso ? "" : `${errors.peso && `${styles.invalid}`}`}  placeholder={`${props.enterPeso}`} onChange={(e) => handleChange(e)} />
                        {product.peso ? "" : errors.peso && <p className={styles.pesoError}>{`${errors.peso}`}</p>}

                        <input type="number" name="quantidade" value={product.quantidade || ""} className={product.quantidade ? "" : `${errors.quantidade && `${styles.invalid}`}`}  placeholder={`${props.enterQuantity}`} onChange={(e) => handleChange(e)} />
                        {product.quantidade ? "" : errors.quantidade && <p className={styles.quantityError}>{`${errors.quantidade}`}</p>}

                        <button>{props.buttonAdd}</button>
                    </form>

                    <div className={`${styles.calculadoraContent}`}>
                        <div className={`${styles.left}`}>
                            <div className={`${styles.searchContent}`}>
                                <input type="text" value={searchProduct} onChange={(e) => handleChangeSearch(e)} placeholder={`${props.searchProduct}`} />
                            </div>
                            {submitMessage && <Message type='sucess' message='Produto adicionado com sucesso' />}
                            {editMessage && <Message type='sucess' message='Produto atualizado com sucesso' />}
                            {deleteMessage && <Message type='sucess' message='Produto excluído com sucesso' />}

                            <div className={`${styles.listProducts}`}>

                                {products.length === 0 ? (<div>{`${props.productNotAdded}`}</div>) : (
                                    products.map((product, index) => {

                                        return (
                                            <div className={`${styles.content}`} key={index}>
                                                <div>{product.nome}</div>
                                                <div> <strong>Comprimento</strong><p>{product.length} m</p></div>
                                                    <div><strong> Lagura</strong> <p> {product.width} m </p></div>
                                                    <div><strong>Altura</strong><p> {product.height} m</p></div>
                                                    <div><strong>{props.productUniPeso}</strong> <p>{product.peso} kg</p></div>
                                                    <div><strong>{props.productQuantity}</strong><p>{product.quantidade}</p></div>
                                                    <div><strong>{props.productTotalPeso}</strong><p>{product.pesoTotal} kg</p></div>
                                                    <div><strong>{props.productUniVolume}</strong><p>{product.volume} m³</p></div>
                                                    <div><strong>{props.productTotalVolume}</strong><p>{product.volumeTotal} m³</p></div>
                                               
                                                {openEditModal && <EditProductModal
                                                    closeModal={() => setOpenEditModal(false)} getProducts={getProducts}  getTotalQuantity={getTotalQuantity} getSumPesoTotal={getSumPesoTotal} getSumVolumeTotal={getSumVolumeTotal} currentProduct={currentProduct} setShowEditMessage={showEditMessage} setPctPeso={setPctPeso} setProgressPeso={setProgressPeso} setPctVolume={setPctVolume} setProgressVolume={setProgressVolume} containerType={container} />}
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
                                                    closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getProducts={getProducts} getTotalQuantity={getTotalQuantity} getSumPesoTotal={getSumPesoTotal} getSumVolumeTotal={getSumVolumeTotal} productCurrent={currentProduct} setShowDeleteMessage={showDeleteMessage} setPctPeso={setPctPeso} setProgressPeso={setProgressPeso} setPctVolume={setPctVolume} setProgressVolume={setProgressVolume} containerType={container} />}
                                                <button className={`${styles.buttonDelete}`} onClick={() => handleDeleteProduct(product.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                                        <g fill="rgb(255, 255, 255)">
                                                            <g transform="scale(2.56,2.56)">
                                                                <path d="M46,13c-1.64497,0 -3,1.35503 -3,3v2h-10.73437c-1.7547,0 -3.38611,0.92281 -4.28906,2.42773l-1.54297,2.57227h-3.43359c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4h1.07422l3.57422,46.45898c0.23929,3.11679 2.85609,5.54102 5.98242,5.54102h32.73828c3.12633,0 5.74313,-2.42423 5.98242,-5.54102l3.57422,-46.45898h1.07422c2.19733,0 4,-1.80267 4,-4c0,-2.19733 -1.80267,-4 -4,-4h-3.43359l-1.54297,-2.57227c-0.90296,-1.50492 -2.53436,-2.42773 -4.28906,-2.42773h-10.73437v-2c0,-1.64497 -1.35503,-3 -3,-3zM46,15h8c0.56503,0 1,0.43497 1,1v2h-10v-2c0,-0.56503 0.43497,-1 1,-1zM32.26563,20h11.56641c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.57617c1.0553,0 2.02922,0.55195 2.57227,1.45703l1.52734,2.54297h-3.33398c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h5h3.5c1.11667,0 2,0.88333 2,2c0,1.11667 -0.88333,2 -2,2h-54c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2h4h34.5c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794h-33.33398l1.52734,-2.54297c0.54305,-0.90508 1.51697,-1.45703 2.57227,-1.45703zM64.5,24c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h2c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794zM26.07813,31h47.84375l-3.56445,46.30664c-0.16071,2.09321 -1.88861,3.69336 -3.98828,3.69336h-32.73828c-2.09967,0 -3.82757,-1.60015 -3.98828,-3.69336zM38,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM50,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-3.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v3.5c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v25.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-25.5c0,-1.65109 -1.34891,-3 -3,-3zM62,35c-1.65109,0 -3,1.34891 -3,3v1.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-1.5c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-25.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v25.5c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM38,36c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2zM59.49219,41.99219c-0.13261,0.00207 -0.25896,0.05673 -0.35127,0.15197c-0.0923,0.09523 -0.14299,0.22324 -0.14092,0.35584v2c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-2c0.00212,-0.13532 -0.0507,-0.26572 -0.1464,-0.36141c-0.0957,-0.0957 -0.22609,-0.14852 -0.36141,-0.1464z"></path></g></g>
                                                    </svg>
                                                </button>
                                            </div>
                                        );

                                    }))}
                            </div>

                            <div className={`${styles.totalContainer}`}>
                                <h3>{`Quantidade total de cada produto: ${totalQuantity}`}</h3>
                            </div>

                            <div className={`${styles.totalContainer}`}>
                                <h3>{`${props.pesoTotal}: ${sumPesoTotal} kg`}</h3>

                            </div>
                            <div className={`${styles.totalContainer}`}>
                                <h3>{`${props.volumeTotal}: ${sumVolumeTotal} m³`}</h3>

                            </div>
                        </div>

                        {<> <div className={`${styles.right}`}>
                            <div className={`${styles.info_container}`}>
                                <select onChange={(e) => handleChangeSelectContainer(e)}>
                                    <option hidden>{props.selectContainer}</option>
                                    {containers.map((container, index) => (
                                        <option value={container.id} key={index}>{container.name}</option>
                                    ))}
                                </select>

                                <h3>{container.name}</h3>
                                <h3>{`${props.pesoCapicity}: ${container.capacidadePeso} kg`}</h3>
                                <h3>{`${props.cubCapacicity}: ${container.capacidadeVolume} m³`}</h3>
                                <img className={`${styles.containerImage}`} src={container.image ? `${container.image}` : `./assets/containerPlaceholder.png`} alt="" />
                               
                                {pctPeso <= 100 && pctVolume <= 100 ?
                                    <>

                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '5px' }}>
                                                <img src={`./assets/weight.png`} alt="" width={35} height={35} />
                                                <h3>{props.totalCargoPeso}</h3>
                                            </div>
                                            <div style={{ width: '400px', border: '2px solid', borderRadius: '10px' }}>
                                                <div style={{ height: "15px", background: `${progressPeso >= 80 ? 'rgb(252,140,4)' : 'rgb(49, 161, 113)'}`, borderRadius: '10px', width: `${progressPeso}%`, transition: 'width 0.3s ease-in-out' }}></div>
                                            </div>
                                            <p>{pctPeso}%</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '5px' }}>
                                                <img src={`./assets/package.png`} width={35} height={35} alt="" />
                                                <h3>{props.totalCargoVolume}</h3>
                                            </div>

                                            <div style={{ width: '400px', border: '2px solid', borderRadius: '10px' }}>
                                                <div style={{ height: "15px", background: `${progressVolume >= 80 ? 'rgb(252,140,4)' : 'rgb(49, 161, 113)'}`, borderRadius: '10px', width: `${progressVolume}%`, transition: 'width 0.3s ease-in-out' }}></div>
                                            </div>
                                            <p>{pctVolume}%</p>
                                        </div>
                                    </> : < Message type='error' message='A carga máxima não cabe' />}
                            </div>
                        </div>
                        </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}