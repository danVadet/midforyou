import { PortType } from "./Enums/PortType";
import { IState } from "./IState";

export interface IPortMarker {
    id: number;
    label: string;
    image: string;
    color: string;
    address: string;
    portType: PortType;
    lat: number;
    lng: number;
    stateId: number;
    state: IState;


}