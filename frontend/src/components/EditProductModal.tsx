import styles from './EditProductModal.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "../models/IProduct";
import axios from 'axios';
import { MeasureUnit } from '../models/Enums/MeasureUnit';
import { WeightUnit } from '../models/Enums/WeightUnit';
import { IContainer } from '../models/IContainer';

export interface IEditProductModalProps {
  currentProduct?: IProduct;
  selectedUnit: string;
  selectedContainer: IContainer;
  selectedContainerId: number;
  measureUnits: MeasureUnit[];
  weightUnits: WeightUnit[];
  closeModal(): void
  getProducts(): void;
  getSumTotalWeight(): void;
  getSumTotalVolume(): void;
  getSumTotalQuantity(): void;
  getContainer(id: number): void;
  setShowEditMessage(): void;
  getMeasureUnits(selectedUnit: string): void;

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
    measureUnit: props.currentProduct?.measureUnit || "",
    weightUnit: props.currentProduct?.weightUnit || "",
    container: props.selectedContainer,
    containerId: props.selectedContainer.id

  })
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value })
  }
  const updateProduct = async (e: FormEvent) => {
    e.preventDefault();

    const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/products/${props.currentProduct?.id}`, {
      name: product.name,
      length: product.length,
      width: product.width,
      height: product.height,
      weight: product.weight,
      quantity: product.quantity,
      measureUnit: product.measureUnit,
      weightUnit: product.weightUnit,
      container: props.selectedContainer,
      containerId: props.selectedContainer.id
    });
    console.log(response.data)

    props.closeModal();
    props.getMeasureUnits(props.selectedUnit);
    props.getProducts();
    props.getSumTotalQuantity();
    props.getSumTotalWeight();
    props.getSumTotalVolume();
    props.getContainer(props.selectedContainerId);
    props.setShowEditMessage();
  }

  return (
    <>
      <div className={`${styles.modal}`}>
        <div className={`${styles.modalContainer}`}>
          <span className={`${styles.modalClose}`} onClick={() => props.closeModal()}> &times;</span>
          <form onSubmit={(e) => updateProduct(e)} className={`${styles.formContainer}`}>

            <div className={`${styles.formGroup}`}>
              <label>Nome</label>
              <input type="text" name="name" value={product.name || ""} placeholder="Digite o nome..." onChange={(e) => onChange(e)} />
            </div>

            <div className={`${styles.formGroup}`}>
              <label>Unidade de medida</label>
              <select name="measureUnit" value={product.measureUnit} onChange={(e) => onChange(e)}>
                {props.measureUnits.map((measureUnit, index) => (
                  <option key={index} value={measureUnit.value}>{measureUnit.value} ({measureUnit.label})</option>

                ))}
              </select>
            </div>

            <div className={`${styles.formGroup}`}>
              <label>Comprimento</label>
              <div className={`${styles.input_measurement_unit}`}>
                <input type="number" name="length" value={product.length || ""} onChange={(e) => onChange(e)} />
                <span className={`${styles.label_measurement_unit}`}> {product.measureUnit} </span>
              </div>


            </div>
            <div className={`${styles.formGroup}`}>
              <label>Lagura</label>
              <div className={`${styles.input_measurement_unit}`}>
                <input type="number" name="width" value={product.width || ""} onChange={(e) => onChange(e)} />
                <span className={`${styles.label_measurement_unit}`}> {product.measureUnit} </span>
              </div>
            </div>
            <div className={`${styles.formGroup}`}>
              <label>Altura</label>
              <div className={`${styles.input_measurement_unit}`}>
                <input type="number" name="height" value={product.height || ""} onChange={(e) => onChange(e)} />
                <span className={`${styles.label_measurement_unit}`}> {product.measureUnit} </span>
              </div>
            </div>

            <div className={`${styles.formGroup}`}>
              <label>Unidade de peso</label>
              <select name="weightUnit" value={product.weightUnit} onChange={(e) => onChange(e)}>
                {props.weightUnits.map((weightUnit, index) => (
                  <option key={index} value={weightUnit.value}>{weightUnit.value} ({weightUnit.label})</option>

                ))}
              </select>
            </div>
            <div className={`${styles.formGroup}`}>
              <label>Peso</label>

              <div className={`${styles.input_weight_unit}`}>
                <input type="number" name="weight" value={product.weight || ""} onChange={(e) => onChange(e)} />
                <span className={`${styles.label_weight_unit}`}> {product.weightUnit} </span>
              </div>
            </div>
            <div className={`${styles.formGroup}`}>
              <label>Quantidade</label>
              <input type="number" name="quantity" value={product.quantity || ""} onChange={(e) => onChange(e)} />
            </div>

             <div className={`${styles.modalActions}`}>
              <button>Atualizar</button>
              <button onClick={props.closeModal}>Cancelar</button>

             </div>

          </form>

        </div>

      </div>
    </>
  )
}