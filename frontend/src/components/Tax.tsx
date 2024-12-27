import { useEffect, useState } from 'react';
import styles from './Tax.module.css'
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
    const [loading, setLoading] = useState(true);

    const getTaxes = async () => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,GBP-BRL,ARS-BRL`);

        const quotes = response.data;
        const taxesArray: ITaxModel[] = [];

        Object.keys(quotes).map((key) => {
            taxesArray.push({ name: key as ITaxKeys, currencyCode: `${quotes[key].code}-BRL`, bid: quotes[key].bid, ask: quotes[key].ask, variation: quotes[key].pctChange, high: quotes[key].high, low: quotes[key].low, date: quotes[key].timestamp });
        });
        setTimeout(() => {
            setTaxes(taxesArray);
        }, 1000);
    }
    const getTax = async (currencyCode: string) => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/${currencyCode}`);
        const quote = response.data;

        Object.keys(quote).map((key) => {
            currentTax = { name: key as ITaxKeys, currencyCode: `${quote[key].code}-BRL`, bid: quote[key].bid, ask: quote[key].ask, variation: quote[key].pctChange, high: quote[key].high, low: quote[key].low, date: quote[key].timestamp };
        });
        console.log(currentTax);
        setCurrentTax(currentTax);
        setOpenTaxModal(true);
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(false);
            getTaxes();
        }, 1000);
    
    }, []);

    return (
        <>
            <div className={`${styles.tax_collectionComponent}`}>
                
                <div className={`${styles.taxWrapper}`}>
                    {taxes.map((tax, index) => (

                        <div key={index} className={`${styles.tax_unitComponent}`}>
                            <a href={`${tax.currencyCode}`} className={`${styles.s}`} onClick={() => window.onbeforeunload = null }>
                                <div className={`${styles.currencyContainer}`}>

                                    <div className={`${styles.currency}`}>
                                        {FormatCurrencySymbol({ key: tax.name })}
                                    </div>
                                </div>
                                <div className={`${styles.text}`}>
                                    <p className={`${styles.name}`}>{FormatCurrencyName({ key: tax.name })} </p>

                                    <div className={`${styles.valueContainer}`} >
                                        <p className={`${styles.value}`}>R$ {tax.bid}</p>
                                        {tax.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}>+{tax.variation}%</p> : <p className={`${styles.variation} ${styles.danger}`}>{tax.variation}%</p>}
                                    </div>
                                </div>

                            </a>
                            {openTaxModal && <TaxModal closeModal={() => setOpenTaxModal(false)} currentTax={currentTax}  />}


                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Tax;