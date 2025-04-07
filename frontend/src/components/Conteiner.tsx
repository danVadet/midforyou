import styles from './Conteiner.module.css'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { DeleteProductModal } from './DeleteProductModal';
import { IProduct } from '../models/IProduct';
import { IContainer } from '../models/IContainer';
import { Message } from './Message';
import { EditProductModal } from './EditProductModal';
import { ProgressBar } from './ProgressBar';

//const url_backend = 'http://localhost:5262'
const url_backend = 'https://mid4u-gsakgyhbexfeezgf.centralus-01.azurewebsites.net:5262'

interface IValues {
    name: string;
    length: string;
    width: string;
    height: string;
    weight: string;
    quantity: string;
}

interface IErrors extends Partial<IValues> { }


export const Conteiner = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [containers, setContainers] = useState<IContainer[]>([]);
    const [sumTotalWeight, setSumTotalWeight] = useState(0);
    const [sumTotalVolume, setSumTotalVolume] = useState(0);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [product, setProduct] = useState<IProduct>({
        id: 0,
        name: "",
        length: 0,
        width: 0,
        height: 0,
        weight: 0,
        volume: 0,
        quantity: 0,
        weightTotal: 0,
        volumeTotal: 0,
    });

    const [submitMessage, setSubmitMessage] = useState(false);
    const [editMessage, setEditMessage] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);

    const [searchProduct, setSearchProduct] = useState<string>("");
    const [unsavedProduct, setUnsavedProduct] = useState(false);

    const [errors, setErrors] = useState<IErrors>({});

    const [loading, setLoading] = useState(false);




    const [currentProduct, setCurrentProduct] = useState<IProduct>();
    const [selectedContainer, setSelectedContainer] = useState<IContainer>({
        id: 0,
        image: '',
        name: '',
        capacityWeight: 0,
        capacityVolume: 0,
        products: []
    });

    const [pctWeight, setPctWeight] = useState<number>(0);
    const [pctVolume, setPctVolume] = useState<number>(0);

    const onClickDeleteProduct = async (id: number) => {
        const response = await axios.get(`http://localhost:5262/products/${id}`);
        console.log(response.data);
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

    const onChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        setProduct({ ...product, [target.name]: target.value })
    }

    const validate = (product: IProduct) => {
        const errors: { name?: string; length?: string; width?: string; height?: string; weight?: string; quantity?: string } = {};

        if (!product.name) {
            errors.name = 'Nome obrigatório';
        }

        if (!product.length) {
            errors.length = 'Comprimento obrigatório';
        }

        if (!product.width) {
            errors.width = 'Lagura obrigatória';
        }

        if (!product.height) {
            errors.height = 'Altura obrigatória';
        }

        if (!product.weight) {
            errors.weight = 'Peso obrigatório';
        }

        if (!product.quantity) {
            errors.quantity = 'Quantidade obrigatória'
        }

        return errors;
    }
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
    }

    const onChangeSelectContainer = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const response = await axios.get(`${url_backend}/containers/capacity/${value}`);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSelectedContainer(response.data.container);
            setPctWeight(response.data.pctWeight);
            setPctVolume(response.data.pctVolume);
        }, 2000)



    }
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const errors = validate(product);
        if (errors && Object.keys(errors).length > 0) {
            return setErrors(errors);
        } else {

            const response = await axios.post('${url_backend}/products/addProduct', {
                name: product.name,
                length: product.length,
                width: product.width,
                height: product.height,
                weight: product.weight,
                quantity: product.quantity,

            });
            console.log(response.data);

            setProduct({ id: 0, name: "", length: 0, width: 0, height: 0, weight: 0, quantity: 0, volume: 0, volumeTotal: 0, weightTotal: 0 });
            getProducts();
            getSumTotalWeight();
            getSumTotalVolume();
            getContainer(selectedContainer.id);

            setSubmitMessage(true);
            setTimeout(async () => {
                setSubmitMessage(false);
            }, 1000);

        }
    }
    const onClickEditProduct = async (id: number) => {
        const response = await axios.get(`${url_backend}/products/${id}`);
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

    const getProducts = async () => {

        try {

            if (searchProduct) {
                const response = await axios.get(`${url_backend}/products?search=${searchProduct}`);
                setProducts(response.data);
                console.log(response.data);
            } else {
                const response = await axios.get(`${url_backend}/products`);
                setProducts(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteAllProducts = async () => {
        try {
            const response = await axios.delete(`${url_backend}/products`);
            console.log(response.data);
            window.onbeforeunload = () => true;
            setUnsavedProduct(true);
        } catch (error) {
            console.log(error);
        }
    }
    const getSumTotalWeight = async () => {

        try {
            const response = await axios.get(`${url_backend}/sumTotalWeight`);
            console.log(response.data);
            setSumTotalWeight(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getContainers = async () => {
        try {
            const response = await axios.get(`${url_backend}/containers`);
            console.log(response.data);
            setContainers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSumTotalVolume = async () => {

        try {
            const response = await axios.get(`${url_backend}/sumTotalVolume`);
            setSumTotalVolume(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getContainer = async (id: number) => {

        try {
            const response = await axios.get(`${url_backend}/containers/capacity/${id}`);
            setSelectedContainer(response.data.container);
            setPctWeight(response.data.pctWeight);
            setPctVolume(response.data.pctVolume);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        if (!unsavedProduct) {
            deleteAllProducts();
        } else {
            getProducts();
            getSumTotalWeight();
            getSumTotalVolume();
            getContainers();
        }
    }, [searchProduct, unsavedProduct]);

    return (
        <>
            <div className={`${styles.container}`}>
                <h1>Calculadora de Carga</h1>

                <form onSubmit={(e) => onSubmit(e)} className={`${styles.formContainer}`}>
                    <input type="text" name="name" value={product.name || ""} placeholder="Digite o nome..." onChange={(e) => onChange(e)} />
                    {product.name ? "" : errors.name && <p className={styles.nameError}>{`${errors.name}`}</p>}
                    <input type="number" name="length" value={product.length || ""} placeholder="Digite o comprimento..." onChange={(e) => onChange(e)} />
                    {product.length ? "" : errors.length && <p className={styles.lengthError}>{`${errors.length}`}</p>}
                    <input type="number" name="width" value={product.width || ""} placeholder="Digite a lagura..." onChange={(e) => onChange(e)} />
                    {product.width ? "" : errors.width && <p className={styles.widthError}>{`${errors.width}`}</p>}
                    <input type="number" name="height" value={product.height || ""} placeholder="Digite a altura..." onChange={(e) => onChange(e)} />
                    {product.height ? "" : errors.height && <p className={styles.heightError}>{`${errors.height}`}</p>}
                    <input type="number" name="weight" value={product.weight || ""} placeholder="Digite o peso..." onChange={(e) => onChange(e)} />
                    {product.weight ? "" : errors.weight && <p className={styles.weightError}>{`${errors.weight}`}</p>}
                    <input type="number" name="quantity" value={product.quantity || ""} placeholder="Digite a quantidade..." onChange={(e) => onChange(e)} />
                    {product.quantity ? "" : errors.quantity && <p className={styles.quantityError}>{`${errors.quantity}`}</p>}

                    <button>Adicionar novo produto</button>
                </form>

                <div className={`${styles.search}`}>
                    <input type="text" name="search" value={searchProduct} placeholder="Pesquisa o produto adicionado..." onChange={(e) => onChangeSearch(e)} />
                    <i className={`${styles.iconSearch}`}>
                            <svg fill="rgb(0, 175, 239)" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" stroke="rgb(0, 175, 239)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 24.57l-5.647-5.648a8.895 8.895 0 0 0 1.522-4.984C22.875 9.01 18.867 5 13.938 5 9.01 5 5 9.01 5 13.938c0 4.929 4.01 8.938 8.938 8.938a8.887 8.887 0 0 0 4.984-1.522L24.568 27 27 24.57zm-13.062-4.445a6.194 6.194 0 0 1-6.188-6.188 6.195 6.195 0 0 1 6.188-6.188 6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188z"></path></g></svg>
                    </i>
                </div>

                {submitMessage && <Message type='sucess' message='Produto adicionado com sucesso' />}
                {editMessage && <Message type='sucess' message='Produto atualizado com sucesso' />}
                {deleteMessage && <Message type='sucess' message='Produto excluído com sucesso' />}

                <ul className={`${styles.products}`}>
                    {products.length === 0 ? (<tr><td>Produto não adicionado</td></tr>) : (
                        products.map((product, index) => (
                            <li className={`${styles.product_item}`} key={index}>
                                <div><label>Nome </label>  <p>{product.name} </p> </div>
                                <div><label>Comprimento</label> <p>{product.length} m</p> </div>
                                <div><label>Lagura</label> <p>{product.width} m</p> </div>
                                <div><label>Altura</label> <p>{product.height} m</p> </div>
                                <div><label>Peso</label>  <p>{product.weight} kg</p> </div>
                                <div><label>Quantidade</label>  <p>{product.quantity}</p> </div>
                                <div><label>Peso total</label><p>{product.weightTotal} kg</p></div>
                                <div><label>Volume total</label><p>{product.volumeTotal} m³</p></div>

                                {openEditModal && <EditProductModal
                                    closeModal={() => setOpenEditModal(false)} getProducts={getProducts} getSumTotalWeight={getSumTotalWeight} getSumTotalVolume={getSumTotalVolume} currentProduct={currentProduct} getContainer={() => getContainer(selectedContainer.id)} selectedContainerId={selectedContainer.id} setShowEditMessage={showEditMessage} />}
                                <button className={`${styles.buttonEdit}`} onClick={() => onClickEditProduct(product.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256">
                                        <g fill="rgb(255, 255, 255)" >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M43.125,2c-1.24609,0 -2.48828,0.48828 -3.4375,1.4375l-0.8125,0.8125l6.875,6.875c-0.00391,0.00391 0.8125,-0.8125 0.8125,-0.8125c1.90234,-1.90234 1.89844,-4.97656 0,-6.875c-0.95312,-0.94922 -2.19141,-1.4375 -3.4375,-1.4375zM37.34375,6.03125c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-32.4375,32.46875c-0.12891,0.11719 -0.22656,0.26953 -0.28125,0.4375l-2,7.5c-0.08984,0.34375 0.01172,0.70703 0.26172,0.95703c0.25,0.25 0.61328,0.35156 0.95703,0.26172l7.5,-2c0.16797,-0.05469 0.32031,-0.15234 0.4375,-0.28125l32.46875,-32.4375c0.39844,-0.38672 0.40234,-1.02344 0.01563,-1.42187c-0.38672,-0.39844 -1.02344,-0.40234 -1.42187,-0.01562l-32.28125,32.28125l-4.0625,-4.0625l32.28125,-32.28125c0.30078,-0.28906 0.39063,-0.73828 0.22266,-1.12109c-0.16797,-0.38281 -0.55469,-0.62109 -0.97266,-0.59766c-0.03125,0 -0.0625,0 -0.09375,0z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </button>

                                {openDeleteModal && <DeleteProductModal
                                    closeModal={() => setOpenDeleteModal(false)} message='Deseja excluir esse produto' getProducts={getProducts} productCurrent={currentProduct} getSumTotalVolume={getSumTotalVolume} getSumTotalWeight={getSumTotalWeight} getContainer={() => getContainer(selectedContainer.id)} selectedContainerId={selectedContainer.id} setShowDeleteMessage={showDeleteMessage} />}
                                <button className={`${styles.buttonDelete}`} onClick={() => onClickDeleteProduct(product.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                        <g fill="rgb(255, 255, 255)" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                            <g transform="scale(2.56,2.56)">
                                                <path d="M46,13c-1.64497,0 -3,1.35503 -3,3v2h-10.73437c-1.7547,0 -3.38611,0.92281 -4.28906,2.42773l-1.54297,2.57227h-3.43359c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4h1.07422l3.57422,46.45898c0.23929,3.11679 2.85609,5.54102 5.98242,5.54102h32.73828c3.12633,0 5.74313,-2.42423 5.98242,-5.54102l3.57422,-46.45898h1.07422c2.19733,0 4,-1.80267 4,-4c0,-2.19733 -1.80267,-4 -4,-4h-3.43359l-1.54297,-2.57227c-0.90296,-1.50492 -2.53436,-2.42773 -4.28906,-2.42773h-10.73437v-2c0,-1.64497 -1.35503,-3 -3,-3zM46,15h8c0.56503,0 1,0.43497 1,1v2h-10v-2c0,-0.56503 0.43497,-1 1,-1zM32.26563,20h11.56641c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.57617c1.0553,0 2.02922,0.55195 2.57227,1.45703l1.52734,2.54297h-3.33398c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h5h3.5c1.11667,0 2,0.88333 2,2c0,1.11667 -0.88333,2 -2,2h-54c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2h4h34.5c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794h-33.33398l1.52734,-2.54297c0.54305,-0.90508 1.51697,-1.45703 2.57227,-1.45703zM64.5,24c-0.18032,-0.00255 -0.34804,0.09219 -0.43894,0.24794c-0.0909,0.15575 -0.0909,0.34838 0,0.50413c0.0909,0.15575 0.25863,0.25049 0.43894,0.24794h2c0.18032,0.00255 0.34804,-0.09219 0.43894,-0.24794c0.0909,-0.15575 0.0909,-0.34838 0,-0.50413c-0.0909,-0.15575 -0.25863,-0.25049 -0.43894,-0.24794zM26.07813,31h47.84375l-3.56445,46.30664c-0.16071,2.09321 -1.88861,3.69336 -3.98828,3.69336h-32.73828c-2.09967,0 -3.82757,-1.60015 -3.98828,-3.69336zM38,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM50,35c-1.65109,0 -3,1.34891 -3,3v35c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-3.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v3.5c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v25.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-25.5c0,-1.65109 -1.34891,-3 -3,-3zM62,35c-1.65109,0 -3,1.34891 -3,3v1.5c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-1.5c0,-1.11091 0.88909,-2 2,-2c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-25.5c0.00255,-0.18032 -0.09219,-0.34804 -0.24794,-0.43894c-0.15575,-0.0909 -0.34838,-0.0909 -0.50413,0c-0.15575,0.0909 -0.25049,0.25863 -0.24794,0.43894v25.5c0,1.65109 1.34891,3 3,3c1.65109,0 3,-1.34891 3,-3v-35c0,-1.65109 -1.34891,-3 -3,-3zM38,36c1.11091,0 2,0.88909 2,2v35c0,1.11091 -0.88909,2 -2,2c-1.11091,0 -2,-0.88909 -2,-2v-35c0,-1.11091 0.88909,-2 2,-2zM59.49219,41.99219c-0.13261,0.00207 -0.25896,0.05673 -0.35127,0.15197c-0.0923,0.09523 -0.14299,0.22324 -0.14092,0.35584v2c-0.00255,0.18032 0.09219,0.34804 0.24794,0.43894c0.15575,0.0909 0.34838,0.0909 0.50413,0c0.15575,-0.0909 0.25049,-0.25863 0.24794,-0.43894v-2c0.00212,-0.13532 -0.0507,-0.26572 -0.1464,-0.36141c-0.0957,-0.0957 -0.22609,-0.14852 -0.36141,-0.1464z"></path></g></g>
                                    </svg>
                                </button>


                            </li>
                        )))}

                </ul>

                <div>
                    <h3>{`Peso total de  todos os produtos: ${sumTotalWeight} kg`}</h3>
                </div>

                <div>
                    <h3>{`Volume total de  todos os produtos: ${sumTotalVolume} m³`}</h3>
                </div>

                <div className={`${styles.containerInfo}`}>

                    <div className={`${styles.selectedContainer}`}>
                        <select onChange={(e) => onChangeSelectContainer(e)}>
                            <option hidden>Selecionar o tipo de container</option>
                            {containers.map((container, index) => (
                                <option key={index} value={container.id}>{container.name}</option>

                            ))}
                        </select>

                        {!loading ? <div> <img className={`${styles.imageContainer}`} src={selectedContainer.image ? `${selectedContainer.image}` : `./assets/containerPlaceholder.png`} alt="" /> </div> : 
                          <div className={`${styles.imageLoader}`}>
                            <img className={`${styles.imageContainer}`} src={`./assets/containerPlaceholder.png`} alt="" />
                            <div className={`${styles.loader}`}>
                            <span className={`${styles.spinner}`}></span>
                            </div>
                        </div>}


                    </div>

                    <div>

                        {pctWeight <= 100 && pctVolume <= 100 ?
                            <>

                                <div className={`${styles.containerCargoTotalWeight}`}>
                                    <div className={`${styles.labelCargoTotalWeight}`}>
                                        <img src={`./assets/weight.png`} alt="" />
                                        <h2>Peso total da carga</h2>
                                    </div>
                                    <ProgressBar progressPercent={pctWeight} />


                                    <div className={`${styles.labelCapacityWeight}`}>
                                        <div>
                                            <h2>{sumTotalWeight} kg</h2>
                                        </div>
                                        <span>max<h4>{selectedContainer.capacityWeight} kg</h4></span>

                                    </div>
                                </div>

                                <div className={`${styles.containerCargoTotalVolume}`}>
                                    <div className={`${styles.labelCargoTotalVolume}`}>
                                        <img src={`./assets/package.png`} alt="" />
                                        <h2>Volume total da carga</h2>
                                    </div>

                                      <ProgressBar progressPercent={pctVolume} />
                                    <div className={`${styles.labelCapacityVolume}`}>
                                        <h2>{sumTotalVolume} m³</h2>
                                        <span>max<h4>{selectedContainer.capacityVolume} m³</h4></span>
                                    </div>
                                </div>
                            </> : <Message type='error' message='Esse container não cabe' />}
                    </div>

                </div>
            </div>
        </>
    );
}