import ITaxKeys from "./ITaxKeys";

export interface TaxModel {
    name: ITaxKeys;
    value: number;
    variation: number;
}