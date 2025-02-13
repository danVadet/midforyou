import styles from './AboutServices.module.css'
import AboutServiceCard from './AboutServiceCard';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { IServices } from '../models/IServices';

interface IAboutServicesProps {
  
  services: IServices[]

}

const AboutServices = (props: IAboutServicesProps ) => {

  return (
    <>
      <div className={`${styles.about_services_component}`}>

        {props.services.map((service, index) => (
                <AboutServiceCard
                key={index}
                imageUrl={service.image}
                imagePosition={service.positionImage}
                title={service.title}
                description={service.description} />

        ))}
  
        </div>
    </>
  );

}

export default AboutServices;