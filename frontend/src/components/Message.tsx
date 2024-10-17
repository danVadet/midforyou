
import { useEffect, useState } from 'react'
import styles from './Message.module.css'


interface MessageProps {
    message: string
    type: string
}

const Message = (props: MessageProps) => {

    const [visible,  setVisible] = useState(false);

    useEffect(() => {

        if(!props.message) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const  timeout =  setTimeout(() => {
          setVisible(false);
    }, 3000)

        return () => clearTimeout(timeout);
    }, [props.message])

    return (
      <>
      {visible && (
            <div className={`${styles.message} ${styles[props.type]}`}>{props.message}</div>
      )}
      </>

    )
}

export default Message;