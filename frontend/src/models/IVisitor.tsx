import { ICity } from "./ICity";
import { IState } from "./IState";

export interface IVisitor  {
    id: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    companyCNPJ: string;
    ramoAtividade: string;
    city: string;
    state: string;
    message: string;

}