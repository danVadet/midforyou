import { useEffect, useState } from 'react';
import './Tax.css'
import axios from 'axios';
import { ITaxModel } from '../models/ITaxModel';
import ITaxKeys from '../models/ITaxKeys';
import FormatCurrencySymbol from '../Library/FormatCurrencySymbol';
import FormatCurrencyName from '../Library/FormatCurrencyName';
import TaxModal from './TaxModal';


const Tax = () => {

    const [openTaxModal, setOpenTaxModal] = useState(false);
    const [taxes, setTaxes] = useState<ITaxModel[]>([]);
    let [currentTax, setCurrentTax] = useState<ITaxModel>();

    const getTaxes = async () => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL`);

        const quotes = response.data;
        const taxesArray: ITaxModel[] = [];

        Object.keys(quotes).map((key) => {
            taxesArray.push({ name: key as ITaxKeys, currencyCode: `${quotes[key].code}-BRL`, value: quotes[key].bid, variation: quotes[key].pctChange, day: quotes[key].create_date});
        });
        setTaxes(taxesArray);
    }
    const getTax = async (currencyCode: string) => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/${currencyCode}`);
        const quote = response.data;
        
        Object.keys(quote).map((key) => {
            currentTax = { name: key as ITaxKeys, currencyCode: `${quote[key].code}-BRL`, value: quote[key].bid, variation: quote[key].pctChange, day:  quote[key].create_date  };
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
                             <a className="s"onClick={() => getTax(tax.currencyCode)}>
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
                          


                       </div>

                                    </a>
                                    {openTaxModal && <TaxModal closeModal={() => setOpenTaxModal(false)} currentTax={currentTax} />}

                            
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Tax;