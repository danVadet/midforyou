
import styles from './Dialog.module.css'


type propsType = {
    message: string,
    confirmDialog: (confirm: boolean) => void

}

const Dialog: React.FC<propsType> = ({ message, confirmDialog }) => {
    return (
        <>
            <div className={`${styles.dialog}`}>
                <div className={`${styles.dialogContainer}`}>
                    <h2>{message}</h2>
                    <div className={`${styles.dialogButtonContainer}`}>
                        <button onClick={() => confirmDialog(true)}>Sim</button>
                        <button onClick={() => confirmDialog(false)}>Não</button>
                    </div>

                </div>

            </div>
        </>
    );

}

export default Dialog