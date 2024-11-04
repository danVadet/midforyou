import FormatCurrencyName from "../Library/FormatCurrencyName";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);


interface ITaxModalProps {
    currentTax?: ITaxModel
    closeModal(): void;
}
const TaxModal = (props: ITaxModalProps) => {;

    const [quotation, setQuotation] = useState<number[]>([]);
    const [diasCotados, setDiasCotados] = useState<Date[]>([]);
    const [days, setDays] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [days])

    const getData = async () => {

        if (days === 7) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${props.currentTax?.currencyCode}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const date = new Date();

                date.setDate(date.getDate() - i);
                dates.push(date);
            }

            setQuotation(array.reverse());
            setDiasCotados(dates);

        } else if (days === 30) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${props.currentTax?.currencyCode}/${days}`);
            const data = response.data;
            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const date = new Date();

                date.setDate(date.getDate() - i);
                dates.push(date);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates);


        } else if (days === 90) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${props.currentTax?.currencyCode}/${days}`);
            const data = response.data;
            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const date = new Date();

                date.setDate(date.getDate() - i);
                dates.push(date);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates);

        } else if (days === 180) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${props.currentTax?.currencyCode}/${days}`);
            const data = response.data;
            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });
            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const date = new Date();

                date.setDate(date.getDate() - i);
                dates.push(date);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates);

        } else if (days === 365) {

            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${props.currentTax?.currencyCode}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const date = new Date();

                date.setDate(date.getDate() - i);
                dates.push(date);

            }
            setQuotation(array.reverse());
            setDiasCotados(dates);

        } else {

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            const response = await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${year}${month}${day}`);
            const data = response.data;
            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });
            setQuotation(array.reverse());

            const dates: Date[] = [];
            Object.keys(data).map((key) => {
                const date = new Date(data[key].timestamp * 1000
);
                dates.push(date);
            });
            setDiasCotados(dates.reverse());
            setDays(1);
        }

        setTimeout(() => {
            setLoading(true);
        }, 3000);

    }

    return (
        <div className={`${styles.modal}`}>

            {!loading ? (<><svg className={styles.spinner} viewBox="0 0 50 50"><circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg></>) : (<>

                <div className={`${styles.modalBody}`}>
                    <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                            <g fill="#00afef" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
                        </svg>
                    </a>

                    <div className={`${styles.taxInfo}`}>
                        <p className={`${styles.taxInfo_title}`} > {props.currentTax?.name && FormatCurrencyName({ key: props.currentTax?.name })}  </p>
                        <div className={`${styles.taxInfo_titles}`}>
                            <p>COMPRA</p>
                            <p>VENDA</p>
                            <p>MÁXIMO</p>
                            <p>MÍNIMO</p>
                            <p>VARIAÇÃO</p>

                        </div>
                        <div className={`${styles.taxInfo_values}`}>
                        <p><span>R$</span>{props.currentTax?.bid}</p>
                        <p><span>R$</span>{props.currentTax?.ask}</p>
                        <p><span>R$</span>{props.currentTax?.high}</p>
                        <p><span>R$</span>{props.currentTax?.low}</p>
                        {props.currentTax?.variation && props.currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{props.currentTax?.variation}%</p> : <p className={`${styles.variation} ${styles.danger}`}> {props.currentTax?.variation}%</p>}
                        </div>
                        
                  
                    </div>

                    <div className={`${styles.filterPeriod}`}>
                        <h5>FILTRAR PERÍODO</h5>
                        <button onClick={() => setDays(1)} className={`${styles.selectPeriod}`}>  Hoje</button>
                        <button onClick={() => setDays(7)} className={`${styles.selectPeriod}`}>  1 semana</button>
                        <button onClick={() => setDays(30)} className={`${styles.selectPeriod}`}>  1 mês</button>
                        <button onClick={() => setDays(90)} className={`${styles.selectPeriod}`}>  3 meses </button>
                        <button onClick={() => setDays(180)} className={`${styles.selectPeriod}`}>6 meses</button>
                        <button onClick={() => setDays(365)} className={`${styles.selectPeriod}`}>  1 ano </button>
                    </div>
                        
                       <div className={`${styles.graphic}`}>
                       <Line data={{
                            labels: diasCotados.map(coin => {
                                let time = coin.getHours() >= 12 ? `${coin.getHours()}:${(coin.getMinutes() < 10 ? '0' : '') + coin.getMinutes()}` : `${coin.getHours()}: ${(coin.getMinutes() < 10 ? '0' : '') + coin.getMinutes()}`;
                                return days === 1 ? time : `${coin.toLocaleDateString()}`;
                            }),

                            datasets: [{
                                data: quotation.map(coin => {
                                    return coin;
                                }),
                                borderColor: 'rgb(0, 140, 196)',
                                fill: true,
                                backgroundColor: 'rgba(0, 140, 196, 0.3)',
                                pointHoverBackgroundColor: 'rgb(0, 140, 196)',
                                hoverBorderWidth:3,
                     
                            }]
                        }}
                      


                            options={{
                                interaction: {
                                    intersect: false,
                                },
                                scales: {
                                    x: {
                                        grid: {
                                            display: false,
                                        },
       
                                    }

                                },
                                
                                
                                elements: {
                                    point: {
                                        radius: 1
                                        
                                    }
                                },
                                
                              
                                plugins: {
                                    tooltip: {
                                            backgroundColor: 'rgb(255,255,255)',
                                            padding: 10,
                                            bodyColor: '#000',
                                            borderColor: 'rgb(0, 140, 196)',
                                            borderWidth: 1,
                                            displayColors: false,
                                            titleColor: 'rgb(0, 140, 196)',
                                            titleAlign: 'center',
                                            titleFont: {
                                              size: 12,
                                            },
                                            
                                            xAlign: 'left',
                                            callbacks: {
                                                title: (context) => {                                
                                                    return `R$ ${quotation[context[0].dataIndex]}`;
                                                },
                                                label: (context) => {            
                                                  return `${context.label}`;;
                                                },
                                              },
                                        },
        
                                        
                                      
                                    
                                }
                            }} />
                       </div>

                </div>

            </>)
            }

        </div>
    );
}

export default TaxModal;