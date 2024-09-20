import { useEffect, useState } from 'react';
import './Tax.css'
import axios from 'axios';
import { ITaxModel } from '../models/ITaxModel';
import ITaxKeys from '../models/ITaxKeys';
import FormatCurrencySymbol from '../Library/FormatCurrencySymbol';
import FormatCurrencyName from '../Library/FormatCurrencyName';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'
import TaxModal from './TaxModal';



ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Tax = () => {

    const [openTaxModal, setOpenTaxModal] = useState(false);
    const [taxes, setTaxes] = useState<ITaxModel[]>([]);
    let  [currentTax, setCurrentTax] = useState<ITaxModel>();
   
    const getTaxes = async () => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL`);

        const quotes = response.data;
        const taxesArray: ITaxModel[] = [];
     
        Object.keys(quotes).map((key) => {
            taxesArray.push({ name: key as ITaxKeys, symbol: `${quotes[key].code}-${quotes[key].codein}`, value: quotes[key].bid, variation: quotes[key].pctChange });
        });
        setTaxes(taxesArray);
    }
    const getTax = async  (symbol: string) => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/${symbol}`);
        const quote = response.data;
    
        
     
        Object.keys(quote).map((key) => {
            currentTax = { name: key as ITaxKeys, symbol: `${quote[key].code}-${quote[key].codein}`, value: quote[key].bid, variation: quote[key].pctChange };
        });
        console.log(currentTax);
        setCurrentTax(currentTax);

        setOpenTaxModal(true);

         
    }

    useEffect(() => {

        getTaxes();
    
    
    })

    return (
        <>
     

      
            <div className="tax-collection-component">
               
                    
                <div className="tax-wrapper">
         
                    {taxes.map((tax, index) => (
                               <div key={index} className="tax-unit-component">
                                <a className='clickTax' onClick={() => getTax(tax.symbol)}>


                                </a>
                                <div className="currency-container">
                                    <div className="currency">
                                        {FormatCurrencySymbol({ key: tax.name })}
                                    </div>
                                </div>
                                <div className="text">
                                    <p className="name">{FormatCurrencyName({ key: tax.name })} </p>


                                    <div className="value-container">
                                        <p className="value">{tax.value}</p>
                                        <p className={`variation ${tax.variation >= 0 ? 'success' : 'danger'}`}>{tax.variation}</p>
                                    </div>
                                    <button onClick={() => getTax(tax.symbol)}>Tax</button>

                                    {openTaxModal && <TaxModal closeModal={() => setOpenTaxModal(false)} currentTax={currentTax}  />}
                                    
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