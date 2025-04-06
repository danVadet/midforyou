import { useEffect, useState } from 'react';
import styles from './Tax.module.css'
import { ITax } from '../models/ITax';
import axios from 'axios';
import { ITaxKeys } from '../models/ITaxKeys';
import { FormatCurrencySymbol } from '../Librarys/FormatCurrencySymbol';
import { FormatCurrencyName } from '../Librarys/FormatCurrencyName';

const  Tax = () => {

    const [taxes, setTaxes] = useState<ITax[]>([]);
    let [currentTax, setCurrentTax] = useState<ITax>();

    const getTaxes = async () => {
        const response = await axios.get('http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL');

        const quotes = response.data;
        const taxesArray: ITax[] = [];

        Object.keys(quotes).map((key) => {
            taxesArray.push({ name: key as ITaxKeys, currencyCode: `${quotes[key].code}-BRL`, bid: quotes[key].bid, ask: quotes[key].ask, variation: quotes[key].pctChange, high: quotes[key].high, low: quotes[key].low, date: quotes[key].timestamp });
        });
        
        setTaxes(taxesArray);
    }

    useEffect(() => {
        setInterval(() => {
            getTaxes();
        }, 1000);
    
    }, []);


    return (
        <>
        <div className={`${styles.tax_collectionComponent}`}>
            <div  className={`${styles.taxWrapper}`}>
            {taxes.map((tax, index) => (

<div key={index} className={`${styles.tax_unitComponent}`}>

        <div className={`${styles.currencyContainer}`}>
        <span className={`${styles.currency}`}> {FormatCurrencySymbol({ key: tax.name })}</span>
        </div>
        <div className={`${styles.text}`}>
            <p className={`${styles.name}`}>{FormatCurrencyName({ key: tax.name })} </p>

            <div className={`${styles.valueContainer}`} >
                <p className={`${styles.value}`}>R$ {parseFloat(`${tax.bid}`).toFixed(2)}</p>
                {tax.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}>+{parseFloat(`${tax.variation}`).toFixed(2)}%</p> : <p className={`${styles.variation} ${styles.danger}`}>{parseFloat(`${tax.variation}`).toFixed(2)}%</p>}
            </div>
        </div>

</div>
))}
               
            </div>
            </div>
            </>

            
    )


}

export default Tax;