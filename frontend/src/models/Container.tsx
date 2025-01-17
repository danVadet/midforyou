import { Product } from "./Product";

export interface Container  {
    
    id: number;
    name: string;
    image: string;
    capacidadePeso: number;
    capacidadeVolume: number;
    products: Product[];
    
}