import FormatCurrencyName from "../Library/FormatCurrencyName";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler } from 'chart.js'
import { useParams } from "react-router-dom";
import FormatCurrencyCode from "../Library/FormatCurrencyCode";
import ITaxKeys from "../models/ITaxKeys";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

interface ITaxModalProps {
    currentTax?: ITaxModel
    closeModal(): void;
}
const TaxModal = (props: ITaxModalProps) => {

    const [quotation, setQuotation] = useState<number[]>([]);
    const [diasCotados, setDiasCotados] = useState<Date[]>([]);
    const [days, setDays] = useState(1);
    let { code } = useParams();
    const [loading, setLoading] = useState(true);
    let [currentTax, setCurrentTax] = useState<ITaxModel>();



   
    useEffect(() => {
        getData();
    
    }, [days])

    const hoverCrossHair = {
        id: 'crosshair',
        afterDraw: (chart: ChartJS) => {
            if (chart.tooltip?.getActiveElements()?.length) {
                const activePoint = chart.tooltip.getActiveElements()[0];
                const { ctx } = chart;
                const { x, y } = activePoint.element;
                const yAxis = chart.scales.y;
                const xAxis = chart.scales.x;

                // Draw vertical line
                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.setLineDash([6, 6]);
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.stroke();
                ctx.restore();
            }
        }

    }

    const getData = async () => {
        const response = await axios.get(`http://economia.awesomeapi.com.br/last/${code}`);
        const data = response.data;

        Object.keys(data).map((key) => {
            currentTax = { name: key as ITaxKeys, currencyCode: `${data[key].code}-BRL`, bid: data[key].bid, ask: data[key].ask, variation: data[key].pctChange, high: data[key].high, low: data[key].low, date: data[key].timestamp };
            });
        
            setCurrentTax(currentTax);

        if (days === 7) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${code}/${days}`);
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
            setDiasCotados(dates.reverse());

        } else if (days === 30) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${code}/${days}`);
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
            setDiasCotados(dates.reverse());


        } else if (days === 90) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${code}/${days}`);
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
            setDiasCotados(dates.reverse());

        } else if (days === 180) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${code}/${days}`);
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
            setDiasCotados(dates.reverse());



        } else if (days === 365) {

            const response = await axios.get(`https://economia.awesomeapi.com.br/daily/${code}/${days}`);
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
            setDiasCotados(dates.reverse());

        } else  {
             const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            const response = await axios.get(`http://economia.awesomeapi.com.br/${code}/${year}${month}${day}`);
            const data = response.data;
            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });
            setQuotation(array.reverse());

            const dates: Date[] = [];
            Object.keys(data).map((key) => {
                const date = new Date(data[key].timestamp * 1000);
                dates.push(date);
            });
            setDiasCotados(dates.reverse());
        }
        
    }

    return (
        <div className={`${styles.modal}`}>
        
                <div className={`${styles.modalBody}`}>
                    <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                            <g fill="#00afef" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
                        </svg>
                    </a>

                    <div className={`${styles.taxInfo}`}>
                    <p className={`${styles.taxInfo_title}`} >{code && FormatCurrencyCode({code})}   </p>
                        <div className={`${styles.taxInfo_titles}`}>
                            <p>COMPRA</p>
                            <p>VENDA</p>
                            <p>MÁXIMO</p>
                            <p>MÍNIMO</p>
                            <p>VARIAÇÃO</p>

                        </div>
                        <div className={`${styles.taxInfo_values}`}>
                            <p><span>R$</span>{currentTax?.bid}</p>
                            <p><span>R$</span>{currentTax?.ask}</p>
                            <p><span>R$</span>{currentTax?.high}</p>
                            <p><span>R$</span>{currentTax?.low}</p>
                            {currentTax?.variation && currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{currentTax?.variation}%</p> : <p className={`${styles.variation} ${styles.danger}`}> {currentTax?.variation}%</p>}
                        </div>


                    </div>

                    <div className={`${styles.filterPeriod}`}>
                        <h5>FILTRAR PERÍODO</h5>
                        <button onClick={() => setDays(0)} className={`${styles.selectPeriod}`}>  Hoje</button>
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
                                pointHoverBorderWidth: 3,
                                pointRadius: 0
                            }]
                        }}

                            plugins={[hoverCrossHair]}
                            options={{
                                interaction: {
                                    intersect: false,
                                },
                            
                                scales: {
                                
                                    x: {
                                        grid: {
                                            display: false,
                                        },
                                    
                                        ticks: {
                                          labelOffset: 4,
                                          maxTicksLimit: 8,
                                          
                                        }
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
    
                                        

                                        callbacks: {
                                            title: (context) => {
                                                return `R$ ${quotation[context[0].dataIndex]}`;
                                            },
                                            label: (context) => {
                                                return `${context.label}`;
                                            },
                                        },
                                    },

                                }
                            }} />
                    </div>

                </div>
            

        </div>
    );
}

export default TaxModal;