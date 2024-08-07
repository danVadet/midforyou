
import { useEffect, useState } from 'react'
import styles from './Message.module.css'


interface MessageProps {
    message: string
    type: string


}


const Message = ({ message, type }: MessageProps) => {

    const [visible,  setVisible] = useState(false);

    useEffect(() => {

        if(!message) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const  timeout =  setTimeout(() => {
          setVisible(false);
    }, 3000)

        return () => clearTimeout(timeout);
    }, [message])

    return (
      <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{message}</div>
      )}
      </>

    )
}

export default Message;