import { IProduct } from "./IProduct";

export interface IContainer  {
    
    id: number;
    name: string;
    image: string;
    capacityWeightKg: number;
    capacityWeightLb: number;
    capacityVolumeM3: number;
    capacityVolumeFt3: number;

    products: IProduct []
}