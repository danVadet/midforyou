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
    city: ICity;
    state: IState;
    subject: string;
    message: string;

}