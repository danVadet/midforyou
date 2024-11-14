import styles from './TooltipIncoterm.module.css'

interface ITooltipIncotermProps {
    text: string
    children?: JSX.Element;
    disabled: boolean;
  } 
  
  const TooltipIncoterm = ( props: ITooltipIncotermProps) => {
    return (
        <div>
            <div className={`${styles.container}`}>
        <div className={`${styles.tooltip + `${props.disabled ? "disabled" : ""}`}`}>{props.text}</div>
        {props.children}
      </div>

        </div>
      
    );
  };
  
  export default TooltipIncoterm;