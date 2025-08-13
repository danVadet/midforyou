import { useContext, useEffect, useState } from 'react';
import { useNav } from '../Hooks/useNav';
import { LanguageContext } from '../contexts/LanguageContext';
import multiLang from "../multiLang.json";
import styles from './CBMCalculator.module.css'
import axios from 'axios';
import { IContainer } from '../models/IContainer';

export const Containers = () => {

    const { language } = useContext(LanguageContext);
    const cbmCalculatorRef = useNav(`${(language === "pt" && multiLang.pt.navItem.cbmCalculator) || (language === "en" && multiLang.en.navItem.cbmCalculator) || (language === "es" && multiLang.es.navItem.cbmCalculator)}`)
    const [openCalculatorModal, setOpenCalculatorModal] = useState(false);
    const [containers, setContainers] = useState<IContainer[]>([]);
    

    const getContainers = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/containers`);
            setContainers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onClickCalculator = async (id: number) => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/containers/${id}`);
        console.log(response.data);

        if(!openCalculatorModal){
            setOpenCalculatorModal(true);

        }


    } 


    
    useEffect(() => {
        getContainers();

    }, [])
    return (
        <>
        <section ref={cbmCalculatorRef} id={`${(language === "pt" && multiLang.pt.navItem.cbmCalculator.toLowerCase()) || (language === "en" && multiLang.en.navItem.cbmCalculator.toLowerCase()) || (language === "es" && multiLang.es.navItem.cbmCalculator.toLowerCase())}Section`}>


            <ul className={`${styles.containers}`}>
            {containers.map((container, index) => (
                <div key={index}>
                <li><img src={`${process.env.REACT_APP_API_BASE_URL}/${container.image}`}/></li>

                <div className={`${styles.containerInfo}`}>
                 <li>{container.name}</li>
                 <li>Capacidade de peso: {container.capacityWeightKg} kg</li>
                 <li>Capacidade cúbica: {container.capacityVolumeM3} m³ / {container.capacityVolumeFt3}ft³  </li>

                 <li><button className={`${styles.buttonCalculator}`} onClick={() => onClickCalculator(container.id)}>Calculadora CBM</button></li>
                 </div>

                </div> 
            ))}
              

            </ul>
        </section>
        
        </>
    )
}