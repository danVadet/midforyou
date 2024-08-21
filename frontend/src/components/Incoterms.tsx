
import styles from './Incoterms.module.css'

const Incoterms = () => {

    return (
        <>

        <h1>Incoterms</h1>
        <div className={`${styles.container}`}>

        <select>
                <option>Selecionar o  incoterm...</option>
            </select>

            </div>
        </>
    )
}

export default Incoterms;