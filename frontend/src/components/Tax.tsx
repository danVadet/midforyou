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


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Tax = () => {


    const [taxes, setTaxes] = useState<ITaxModel[]>([]);
   
    const getTaxes = async () => {
        const response = await axios.get("http://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL");

        const quotes = response.data;
        const taxesArray: ITaxModel[] = [];
     
        Object.keys(quotes).map((key) => {
            taxesArray.push({ name: key as ITaxKeys, value: quotes[key].bid, variation: quotes[key].pctChange });
        });
        setTaxes(taxesArray);
    }
    const getTax = async  () => {
        const response = await axios.get("http://economia.awesomeapi.com.br/last/USD-BRL");
        console.log(response.data);
    }

    useEffect(() => {

        getTaxes();
        getTax();
    
    })

    return (
        <>
     

      
            <div className="tax-collection-component">
               
                    
                <div className="tax-wrapper">
         
                    {taxes.map((tax, index) => (
                               <div key={index} className="tax-unit-component">
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
                            </div>
                    )

                    )}
                  

                </div>
            </div>


        </>
    )
}

export default Tax;