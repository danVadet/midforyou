import { IServices } from '../models/IServices';
import styles from './About.module.css'
import { AboutServices } from './AboutServices';

export interface IAboutProps {

    services: IServices[]
}

export const About = (props: IAboutProps) => {

    return (

        <>
            < AboutServices services={props.services} />
        </>
    );
}