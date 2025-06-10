import { PortType } from "./enums/PortType";
import { IPortState } from "./IPortState";

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
    state: IPortState;


}