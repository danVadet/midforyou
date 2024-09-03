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

                const quotes = response.data;
          
          
                Object.keys(quotes).forEach( (key) => {
                  taxs.push({ name: key as ITaxKeys, value: quotes[key].bid, variation: quotes[key].pctChange });
                });

                setTaxs(taxs)
                console.log(taxs);
    ;
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
                {taxs.map((tax: TaxModel) => (
                     <div className="tax-unit-component">
                     <div className="currency-container">
                         <p className="currency">$</p>
                         </div>
                     <div className="text">
                         <p className="name">{tax.name} </p>
                         <div className="value-container">
                             <p className="value">{tax.value}</p>
                             <p className={`variation ${tax.variation >= 0 ? 'sucess' : 'danger'}`}>{tax.variation}</p>
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