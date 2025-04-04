import { useCountUp } from "../Hooks/useCountUp";
import { SHIP_SVG } from "./SHIP_SVG";

interface ICounterAirPortProps {
    targetNumber: number,
}

export const CounterWaterPort = (props: ICounterAirPortProps)  =>{
    const  [count, countRef ] = useCountUp(props.targetNumber);
  
    return  (
        <>
            <svg width="40" height="40"  viewBox="0 0 50 50" ><path d={`${SHIP_SVG}`} fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1"/></svg>

            <div ref={countRef}>
                 <h3> { count <= 1 ? `${count} porto aquático` : `${count} portos aquáticos`  } </h3> 
            </div>
        </>
    );
  }