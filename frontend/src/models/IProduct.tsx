import { MeasureUnit } from "./Enums/MeasureUnit";
import { WeightUnit } from "./Enums/WeightUnit";
import { IContainer } from "./IContainer";

export interface IProduct  {
    id: number;
    name: string;
    length: number;
    width: number;
    height: number;
    weight:  number;
    volume: number;
    quantity: number;
    weightTotal: number;
    volumeTotal:  number;
    measureUnit: string;
    weightUnit:  string;
    container: IContainer;
    containerId: number;
}