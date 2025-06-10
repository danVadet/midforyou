import styles from './TooltipIncoterm.module.css'

interface ITooltipIncotermProps {
    text: string
    children?: JSX.Element;
    disabled: boolean;
  } 

 export const TooltipIncoterm = ( props: ITooltipIncotermProps) => {
    return (
        <div>
            <div className={`${styles.tooltipContainer}`}>
        <div className={`${styles.tooltip + `${props.disabled ? "disabled" : ""}`}`}>{props.text}</div>
        {props.children}
      </div>

        </div>

    );
};