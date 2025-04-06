
import { useEffect, useState } from 'react'
import styles from './Message.module.css'


interface   IMessageProps {
    message: string
    type: string


}


export const Message = (props: IMessageProps) => {


    return (
      <>
    
      <div className={'${styles.message} ${styles[props.type]}'}>{props.message}</div>
      </>

    )
}