
import axios from 'axios';
import styles from './Incoterms.module.css'
import { Incoterm } from '../models/Incoterm';
import { useEffect, useState } from 'react';

const Incoterms = () => {
    const [options, setOptions] = useState<Incoterm[]>([]);
    const [selectedIncoterm, setSelectedIncoterm] = useState<Incoterm>({
        id: 0,
        nome: "",
        acronym: "",
        costStage: 0,
        riskStage: 0,
        safetyStage: 0,
        freightDetails: "",
        riskDetails: "",
        moreDetails: ""
   
});

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const getOptions = async () => {

        try {
                const response = await axios.get(`http://localhost:5077/incoterms`);
                setOptions(response.data);
                console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeSelectIncoterm = async  (id: number) => {
        const response = await axios.get(`http://localhost:5077/incoterms/${id}`);
        console.log(response.data);
        setSelectedIncoterm(response.data);
        setDropdownOpen(false);

    }
    useEffect(()  => {
      getOptions();

      
       
      

}, []);


    return (
        <>

        <h1>Incoterms</h1>
        <div className={`${styles.container}`}>

        <select  onClick={() => setDropdownOpen(!dropdownOpen)}>
                <option>{selectedIncoterm.acronym || "Selecionar"}</option>
                {dropdownOpen && options.map((option, index) => (
                   <option value={option.id} key={index} onChange={() => handleChangeSelectIncoterm(option.id)}>{option.acronym}</option>
                ))}
            </select>
            <div>
            <h2>{`${selectedIncoterm.acronym} - ${selectedIncoterm.nome}`}</h2>
            <p>{`${selectedIncoterm.freightDetails}`}</p>
            <p>{`${selectedIncoterm.riskDetails}`}</p>
            <p>{`${selectedIncoterm.moreDetails}`}</p>

            </div>
          

            </div>
        </>
    )
}

export default Incoterms;