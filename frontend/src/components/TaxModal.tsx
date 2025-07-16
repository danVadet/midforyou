import axios from "axios";
import { useEffect, useState } from "react";
import { ITax } from "../models/ITax";
import { useParams } from "react-router-dom";
import { ITaxKeys } from "../models/ITaxKeys";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler } from 'chart.js'
import styles from "./TaxModal.module.css";
import { FormatCurrencyName } from "../Librarys/FormatCurrencyName";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

export interface ITaxModalProps {

    closeModal(): void;
}

export const TaxModal = (props: ITaxModalProps) => {

    const [quotation, setQuotation] = useState<number[]>([]);
    const [diasCotados, setDiasCotados] = useState<Date[]>([]);
    const [days, setDays] = useState(1);
    let { code } = useParams();
    let [currentTax, setCurrentTax] = useState<ITax>();

    const today = new Date();

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

        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${code}`);
        const data = response.data;

        if (days === 7) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${code}/${days}`);
            const data = response.data;


            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(today.getDate() - i);
                dates.push(oneWeekAgo);
            }

            setQuotation(array.reverse());
            setDiasCotados(dates.reverse());

        } else if (days === 30) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${code}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {

                const oneMonthAgo = new Date();
                oneMonthAgo.setDate(today.getDate() - i);
                dates.push(oneMonthAgo);

            }
            setQuotation(array.reverse());
            setDiasCotados(dates.reverse());


        } else if (days === 90) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${code}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const threeMonthsAgo = new Date();
                threeMonthsAgo.setDate(today.getDate() - i);
                dates.push(threeMonthsAgo);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates.reverse());

        } else if (days === 180) {
            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${code}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });
            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setDate(today.getDate() - i);
                dates.push(sixMonthsAgo);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates.reverse());

        } else if (days === 365) {

            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${code}/${days}`);
            const data = response.data;

            const array: number[] = [];

            Object.keys(data).map((key) => {
                array.push(data[key].bid);
            });

            const dates: Date[] = [];

            for (let i = 0; i < days; i++) {
                const oneYearAgo = new Date();
                oneYearAgo.setDate(today.getDate() - i);
                dates.push(oneYearAgo);
            }
            setQuotation(array.reverse());
            setDiasCotados(dates.reverse());


        } else {
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
                const timestamp = new Date(data[key].timestamp * 1000);
                dates.push(timestamp);
            });
            setDiasCotados(dates.reverse());
        }

        Object.keys(data).map((key) => {
            currentTax = { name: key as ITaxKeys, currencyCode: `${data[key].code}-BRL`, bid: data[key].bid, ask: data[key].ask, variation: data[key].pctChange, high: data[key].high, low: data[key].low, date: data[key].timestamp };

        });
        setCurrentTax(currentTax);
    }

    return (
        <div className={`${styles.modal}`}>
            <div className={`${styles.modalBody}`}>
                <button className={`${styles.closeButton}`} onClick={() => props.closeModal()}>X</button>


                <div className={`${styles.taxInfo}`}>
                    <p className={`${styles.taxInfo_title}`} >{currentTax?.name && FormatCurrencyName({ key: currentTax?.name })}</p>
                    <div className={`${styles.taxInfo_titles}`}>
                        <p>COMPRA</p>
                        <p>VENDA</p>
                        <p>MÁXIMO</p>
                        <p>MÍNIMO</p>
                        <p>VARIAÇÃO</p>

                    </div>
                    <div className={`${styles.taxInfo_values}`}>
                        <p>R${parseFloat(`${currentTax?.bid}`).toFixed(3)}</p>
                        <p>R${parseFloat(`${currentTax?.ask}`).toFixed(3)}</p>
                        <p>R${parseFloat(`${currentTax?.high}`).toFixed(3)}</p>
                        <p>R${parseFloat(`${currentTax?.low}`).toFixed(3)}</p>
                        {currentTax?.variation && currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> {parseFloat(`${currentTax?.variation}`).toFixed(2)}%</p> : <p className={`${styles.variation} ${styles.danger}`}> {parseFloat(`${currentTax?.variation}`).toFixed(2)}%</p>}
                    </div>


                </div>

                <div className={`${styles.filterPeriod}`}>
                    <h3>FILTRAR PERÍODO</h3>
                    <button onClick={() => setDays(1)} className={`${days === 1 ? styles.selectedPeriod : styles.selectPeriod}`}> 1 dia</button>
                    <button onClick={() => setDays(7)} className={`${days === 7 ? styles.selectedPeriod : styles.selectPeriod}`}>  1 semana</button>
                    <button onClick={() => setDays(30)} className={`${days === 30 ? styles.selectedPeriod : styles.selectPeriod}`}>  1 mês</button>
                    <button onClick={() => setDays(90)} className={`${days === 90 ? styles.selectedPeriod : styles.selectPeriod}`}>  3 meses </button>
                    <button onClick={() => setDays(180)} className={`${days === 180 ? styles.selectedPeriod : styles.selectPeriod}`}>6 meses</button>
                    <button onClick={() => setDays(365)} className={`${days === 365 ? styles.selectedPeriod : styles.selectPeriod}`}>  1 ano </button>
                </div>


                <div className={`${styles.graphicLine}`}>

                    <Line data={{
                        labels: diasCotados.map(coin => {
                            let time = coin.getHours() >= 12 ? `${coin.getHours()}:${(coin.getMinutes() < 10 ? '0' : '') + coin.getMinutes()}` : `${coin.getHours()}: ${(coin.getMinutes() < 10 ? '0' : '') + coin.getMinutes()}`;
                            return days === 1 ? time : ` ${coin.toLocaleDateString()}`;
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
                            responsive: true,
                            maintainAspectRatio: false,
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
                                            return `R$  ${parseFloat(`${quotation[context[0].dataIndex]}`).toFixed(3)}`;
                                        },
                                        label: (context) => {
                                            return context.label;
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