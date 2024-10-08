import ITaxKeys from "./ITaxKeys";

export interface ITaxModel {
    name: ITaxKeys;
    value: number;
    variation: number;
    currencyCode: string;
    date: string;
}