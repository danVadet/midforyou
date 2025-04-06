
import styles from "./AboutServices.module.css"
import { AboutServiceCard } from "./AboutServiceCard";
import { IServices } from "../models/IServices";
import { useState } from "react";


export interface IAboutServicesProps {

    services: IServices []

}

export const AboutServices = (props: IAboutServicesProps) => {


    return (

        <>
            <div className={'${styles.about_services_component}'}>

                {props.services.map((service, index) => (
                     <AboutServiceCard
                     key={service.id}
                     imageUrl={service.imageUrl}
                     imagePosition={service.imagePosition}
                     title={service.title}
                     description={service.description} />

                ))}
                </div>

        </>

    );

}
