
import styles from './ProgressBar.module.css';

export interface IProgressBarProps {
    progressPercent: number;

}

export const ProgressBar = (props: IProgressBarProps) => {
     return (
        <>
        <div className={`${styles.progressBar}`}>
                                        <div style={{ width: `${props.progressPercent}%`, backgroundColor: `${props.progressPercent >= 80 && props.progressPercent < 100 ? 'rgb( 255, 139, 0)' : 'rgb( 49, 161, 113)'}`, borderRadius: '20px',}}> {props.progressPercent}% </div>
                                    </div>
        </>
     )
}