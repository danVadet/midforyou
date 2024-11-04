import ITaxKeys from "./ITaxKeys";

export interface ITaxModel {
    name: ITaxKeys;
    bid: number;
    ask: number;
    variation: number;
    high: number;
    low: number;
    currencyCode: string;
    date: string;
}