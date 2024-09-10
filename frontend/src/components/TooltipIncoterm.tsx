import styles from './TooltipIncoterm.module.css'

interface ITooltipIncotermProps {
    text: string
    children?: JSX.Element;
    disabled: boolean;
    key: number;
} 
  
  const TooltipIncoterm = ({ text, disabled, children, key}: ITooltipIncotermProps) => {
    return (
        <div key={key}>
            <div className={`${styles.container}`}>
        <div className={`${styles.tooltip + `${disabled ? "disabled" : ""}`}`}>{text}</div>
        {children}
      </div>

        </div>
      
    );
  };
  
  export default TooltipIncoterm;