import styles from './TooltipIncoterm.module.css'

interface ITooltipIncotermProps {
    text: string
    children?: JSX.Element;
    disabled: boolean;
  } 
  
  const TooltipIncoterm = ({ text, disabled, children}: ITooltipIncotermProps) => {
    return (
        <div>
            <div className={`${styles.container}`}>
        <div className={`${styles.tooltip + `${disabled ? "disabled" : ""}`}`}>{text}</div>
        {children}
      </div>

        </div>
      
    );
  };
  
  export default TooltipIncoterm;