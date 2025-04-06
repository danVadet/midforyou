import styles from './EditProductModal.module.css'
import { FormEvent, useState } from "react";
import { IProduct } from "../models/IProduct";
import axios from 'axios';

interface IEditProductModalProps {
    currentProduct?: IProduct
    selectedContainerId: number;
    closeModal(): void
    getProducts(): void
    getSumTotalWeight(): void;
    getSumTotalVolume(): void;
    getContainer(id: number): void;
    setShowEditMessage(): void;
}

export const EditProductModal = (props: IEditProductModalProps) => {
   const [product, setProduct] = useState<IProduct>({
      id: props.currentProduct?.id || 0,
      name: props.currentProduct?.name || "",
      length: props.currentProduct?.length || 0,
      width: props.currentProduct?.width || 0,
      height: props.currentProduct?.height || 0,
      weight: props.currentProduct?.weight || 0,
      volume: props.currentProduct?.volume || 0,
      quantity: props.currentProduct?.quantity || 0,
      weightTotal: props.currentProduct?.weightTotal || 0,
      volumeTotal: props.currentProduct?.volumeTotal || 0,
  })
  const onChange = (e: FormEvent) => {
      const target = e.target as HTMLInputElement;
      setProduct({ ...product, [target.name]: target.value })
  }

  const updateProduct = async (e: FormEvent) => {
      e.preventDefault();

      const response = await axios.put(`http://localhost:5262/products/${props.currentProduct?.id}`, {
          name: product.name,
          length: product.length,
          width: product.width,
          height: product.height,
          weight: product.weight,
          quantity: product.quantity

      });
      console.log(response.data);  

      props.closeModal();
      props.getProducts();
      props.getSumTotalWeight();
      props.getSumTotalVolume();
      props.getContainer(props.selectedContainerId);
      props.setShowEditMessage();
  }

  return (
      <>
          <div className={`${styles.modal}`}>
              <div className={`${styles.modalContainer}`}>
                  <form onSubmit={(e) => updateProduct(e)} className={`${styles.formContainer}`}>
                     <div>
                     <input type="text" name="name" value={product.name || ""} placeholder="Digite o nome..." onChange={(e) => onChange(e)} />
                     </div>

                      <div>
                      <input type="number" name="length" value={product.length || ""} placeholder="Digite o comprimento..." onChange={(e) => onChange(e)} />
                      </div>
                      <div>
                      <input type="number" name="width" value={product.width || ""} placeholder="Digite a lagura..." onChange={(e) => onChange(e)} />
                      </div>
                      <div>
                        <input type="number" name="height" value={product.height || ""} placeholder="Digite a altura..." onChange={(e) => onChange(e)} />
                      </div>
                      <div>
                      <input type="number" name="weight" value={product.weight || ""} placeholder="Digite o peso..." onChange={(e) => onChange(e)} />
                      </div>
                      <div>
                      <input type="number" name="quantity" value={product.quantity || ""} placeholder="Digite a quantidade..." onChange={(e) => onChange(e)} />


                      </div>
                      <button>Atualizar</button>
                      <button onClick={props.closeModal}>Cancelar</button>

                  </form>

              </div>

          </div>
      </>
  )
}