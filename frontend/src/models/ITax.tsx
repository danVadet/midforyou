import { ITaxKeys } from "./ITaxKeys";

export interface ITax {
  name: ITaxKeys;
  currencyCode: string;
  bid: number;
  ask: number; 
  variation: number;
  high: number; 
  low: number;
  date: number;
}
