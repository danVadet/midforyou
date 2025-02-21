import { useEffect, useState } from 'react'
import styles from './Message.module.css'


interface MessageProps {
    message: string
    type: string
}

export const Message = (props: MessageProps) => {

    const [visible,  setVisible] = useState(false);

    useEffect(() => {

        if(!props.message) {
            setVisible(false);
            return;
        }
        setVisible(true);
    }, [props.message])

    return (
      <>
      {visible && (
            <div className={`${styles.message} ${styles[props.type]}`}>{props.message}</div>
      )}
      </>

    )
}