import FormatCurrencyName from "../Library/FormatCurrencyName";
import { ITaxModel } from "../models/ITaxModel"
import styles from './TaxModal.module.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js'
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);


interface ITaxModalProps {
    currentTax?:  ITaxModel
    closeModal(): void;
}
const TaxModal =  (props : ITaxModalProps) => {
    const [arrayBids, setArrayBids] = useState<number[]>([]);
    const [arrayDates, setArrayDates] = useState<Date[]>([]);
    const [arrayBidsOneWeek, setArrayBidsOneWeek] = useState<number[]>([]);
    const [arrayDatesOneWeek, setArrayDatesOneWeek] = useState<Date[]>([]);
    const [arrayBidsOneMouth, setArrayBidsOneMouth] = useState<number[]>([]);
    const [arrayDatesOneMouth, setArrayDatesOneMouth] = useState<string[]>([]);
    const [arrayBidsThreeMouth, setArrayBidsThreeMouth] = useState<number[]>([]);
    const [arrayDatesThreeMouth, setArrayDatesThreeMouth] = useState<string[]>([]);
    const [arrayBidsSixMouth, setArrayBidsSixMouth] = useState<number[]>([]);
    const [arrayDatesSixMouth, setArrayDatesSixMouth] = useState<string[]>([]);
    const [arrayBidsOneYear, setArrayBidsOneYear] = useState<number[]>([]);
    const [arrayDatesOneYear, setArrayDatesOneYear] = useState<string[]>([]);
   
    useEffect (() => {
        getHistoricData();

    }, []);

    const getHistoricData = async () => {

        // DIA DE HOJE

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
  
    
            const response =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${year}${month}${day}`);
            const quote = response.data;

            const valueBidArray: number [] = [];
            Object.keys(quote).map((key) => {
                valueBidArray.push(quote[key].bid);
            });

          setArrayBids(valueBidArray);

          const dates: Date [] = []; 
            
    
          Object.keys(quote).map((key) => {
            const date = new Date (quote[key].timestamp * 1000);
            dates.push(date);
        });

            setArrayDates(dates);



        
            const days = new Date( date.getFullYear(), date.getMonth(), 7).getDate();
            

    
       
       const responseOneWeek =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/${days}`);
       const quoteOneWeek = responseOneWeek.data;
       const valueBidArrayOneWeek: number [] = []; 
    
       
       Object.keys(quoteOneWeek).map((key) => {
           valueBidArrayOneWeek.push(quoteOneWeek[key].bid);
       });

       setArrayBidsOneWeek(valueBidArrayOneWeek);
       const datesOneWeek: Date [] = [];
       Object.keys(quoteOneWeek).map((key) => {
        const date = new Date (quoteOneWeek[key].timestamp * 1000); 


        datesOneWeek.push(date);
           
          
        
     

        });
           
      setArrayDatesOneWeek(datesOneWeek);

      /*


        //  1 MÊS ATRÁS
      const responseOneMouth =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/30`);
      const quoteOneMouth = responseOneMouth.data;
      const valueBidArrayOneMouth: number [] = []; 
   
      
      Object.keys(quoteOneMouth).map((key) => {
          valueBidArrayOneMouth.push(quoteOneMouth[key].bid);
      });

      setArrayBidsOneMouth(valueBidArrayOneMouth);
      const datesOneMouth: string [] = [];
      Object.keys(quoteOneMouth).map((key) => {
     
           for(let i = 0; i  < 30; i++) {
            if(!datesOneMouth.includes(`${i + 1}/${date.getMonth() + 1}/${date.getFullYear()}`)) {
                datesOneMouth.push(`${i + 1}/${date.getMonth() + 1}/${date.getFullYear()}`);
        }

    }
    

       });

       setArrayDatesOneMouth(datesOneMouth);


       const responseThreeMouth =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/90`);
       const quoteThreeMouth = responseThreeMouth.data;
       const valueBidArrayThreeMouth: number [] = []; 
    
       
       Object.keys(quoteThreeMouth).map((key) => {
           valueBidArrayThreeMouth.push(quoteThreeMouth[key].bid);
       });
 
       setArrayBidsThreeMouth(valueBidArrayThreeMouth);
       const datesThreeMouth: string [] = [];
       Object.keys(quoteThreeMouth).map((key) => {
      
        for(let j = 0; j  < date.getMonth() + 1; j++) {
            if(!datesThreeMouth.includes(`${date.getDate()}/${j + 1}/${date.getFullYear()}`)) {
                datesThreeMouth.push(`${date.getDate()}/${j + 1}/${date.getFullYear()}`);
        }
 
     }
     
 
        });
 
        setArrayDatesThreeMouth(datesThreeMouth);

        const responseSixMouth =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/180`);
        const quoteSixMouth = responseSixMouth.data;
        const valueBidArraySixMouth: number [] = []; 
     
        
        Object.keys(quoteSixMouth).map((key) => {
            valueBidArraySixMouth.push(quoteSixMouth[key].bid);
        });
  
        setArrayBidsSixMouth(valueBidArraySixMouth);
        const datesSixMouth: string [] = [];
        Object.keys(quoteSixMouth).map((key) => {
       
             for(let j = 0; j  < date.getMonth() + 1; j++) {
              if(!datesSixMouth.includes(`${date.getDate()}/${j + 1}/${date.getFullYear()}`)) {
                  datesSixMouth.push(`${date.getDate()}/${j + 1}/${date.getFullYear()}`);
          }
  
      }
      
  
         });
  
         setArrayDatesSixMouth(datesSixMouth);




      const responseOneYear =  await axios.get(`http://economia.awesomeapi.com.br/${props.currentTax?.currencyCode}/365`);
      const quoteOneYear = responseOneYear.data;
      const valueBidArrayOneYear: number [] = []; 
   
      
      Object.keys(quoteOneYear).map((key) => {
          valueBidArrayOneYear.push(quoteOneYear[key].bid);
      });

      setArrayBidsOneYear(valueBidArrayOneYear);
      const datesOneYear: string [] = [];
      Object.keys(quoteOneYear).map((key) => {
     
        for(let j = 0; j < date.getMonth() + 1; j ++) {
            if(!datesOneYear.includes(`${date.getDate()}/${j + 1}/${date.getFullYear()}`)) {
                datesOneYear.push(`${date.getDate()}/${j + 1}/${date.getFullYear()}`);
                console.log(datesOneYear);
        

         
  }
    

       }
    });

    setArrayDatesOneYear(datesOneYear);
     */

    }
        
    


    return (

    
         <div className={`${styles.modal}`}>
        <div className={`${styles.modalBody}`}>
        <a className={`${styles.closeButton}`} onClick={() => props.closeModal()}>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#00afef" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(16,16)"><path d="M7.5,1c-3.58594,0 -6.5,2.91406 -6.5,6.5c0,3.58594 2.91406,6.5 6.5,6.5c3.58594,0 6.5,-2.91406 6.5,-6.5c0,-3.58594 -2.91406,-6.5 -6.5,-6.5zM10.20703,9.5l-0.70703,0.70703l-2,-2l-2,2l-0.70703,-0.70703l2,-2l-2,-2l0.70703,-0.70703l2,2l2,-2l0.70703,0.70703l-2,2z"></path></g></g>
</svg>
             </a>

            
        <div className={`${styles.taxInfo}`}>
            
        <p> {props.currentTax?.name && FormatCurrencyName({ key: props.currentTax?.name })}  </p>
        {props.currentTax?.variation && props.currentTax?.variation >= 0 ? <p className={`${styles.variation} ${styles.success}`}> +{props.currentTax?.variation}%</p> :  <p className={`${styles.variation} ${styles.danger}`}> {props.currentTax?.variation}%</p>}
        
        <Line data={{
            labels: arrayDates.map(coin => {

            let time = coin.getHours() >= 12  ? `${coin.getHours()}:${coin.getMinutes()} PM` : `${coin.getHours()}:${coin.getMinutes()} AM`;
            return time;

            }),
            datasets: [{
                data: arrayBids.map(coin => {
                    return coin;
                }),
                borderColor: 'rgb(0, 175, 239)',
            }
                
            ]
        }}
        
        options={{
            elements: {
                point: {
                    radius: 1
                }
            }
        }}/>

<Line data={{
            labels: arrayDatesOneWeek.map(coin => {

                
        return `${coin.toLocaleDateString()}`;
            }),

            datasets: [{
                data: arrayBidsOneWeek.map(coin => {
                    return coin;
                }),
                borderColor: 'rgb(0, 175, 239)',
            }
                
            ]
        }}
        
        options={{
            elements: {
                point: {
                    radius: 1
                }
            }
        }}/>
        
        <Line data={{
            labels: arrayDatesOneMouth.map(coin => {
                return coin;
            }),

            datasets: [{
                data: arrayBidsOneMouth.map(coin => {
                    return coin;
                }),
                borderColor: 'rgb(0, 175, 239)',
            }
                
            ]
        }}
        
        options={{
            elements: {
                point: {
                    radius: 1
                }
            }
        }}/>

  
        


</div>

</div>
        
            
        </div>
        

    );
}

export default TaxModal;
