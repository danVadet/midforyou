import styles from "./WaveText.module.css"

export interface IWaveText {
    text: string
}

export const WaveText = (props: IWaveText) => {

    return (
           <>
    
            {props.text.split("").map((char, index) => (
                <span key={index} className={`${styles.wave_char}`} style={{animationDelay: `${index * 0.05}s`}}>{char}</span>
            ))}

        </>
    )
}