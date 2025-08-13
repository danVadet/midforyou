import styles from './ProgressBar.module.css';

export interface IProgressBarProps {
    value: number;
}

export const ProgressBar = (props: IProgressBarProps) => {

    const clampedValue = Math.min(props.value, 100);


    return (
        <>
            <div className={`${styles.progressBar}`}>
                <div style={{ width: `${clampedValue}%`, backgroundColor: `${clampedValue < 100 ? clampedValue >= 80 ? 'rgb( 255, 139, 0)' : 'rgb( 49, 161, 113)' : 'rgb(245, 16, 0)'}`, borderRadius: '20px', }}> {props.value}% </div>
            </div>
        </>
    )
}