import { useEffect, useState } from 'react';
import'./Tax.css'
import axios from 'axios';
import { TaxModel } from '../models/TaxModel';
import ITaxKeys from '../models/ITaxKeys';



const  Tax = () => {

    const [taxs, setTaxs] = useState<TaxModel[]>([]);

    const getTaxs = async () => {
        try {
            const response =  await axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL`);
            console.log(response.data);
            setTaxs(response.data);
        } catch (error) {
            console.log(error);
        }

     }

    
    useEffect(()  => {

        getTaxs();
        
     
        
   })

    return (
        <>
        <div className="tax-collection-component">
            <div className="tax-wrapper">
                {Object.values(taxs).map((key, tax) => (
                          
                     <div key={tax} className="tax-unit-component">
                     <div className="currency-container">
                         <p className="currency"> {tax}</p>
                         </div>
                     <div className="text">
                         <p className="name">{tax} </p>
                         <div className="value-container">
                             <p className="value">{tax}</p>
                             <p className={`variation ${tax >= 0 ? 'sucess' : 'danger'}`}>{tax}</p>
                      </div>
                 </div>
                 </div>
                )

                
                )}
               
               
                </div>
        </div>
       
           
            </>
    )
}

export default Tax;