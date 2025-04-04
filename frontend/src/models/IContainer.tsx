import { IProduct } from "./IProduct";

export interface IContainer  {
    
    id: number;
    name: string;
    image: string;
    capacityWeight: number;
    capacityVolume: number;
    products: IProduct []
}