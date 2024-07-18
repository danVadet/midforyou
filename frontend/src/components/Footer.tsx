
import { Link } from 'react-router-dom'
import logo from '../logo/logo.png'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={`${styles.container}`}>
            <div className={`${styles.left}`}>
            <h1>Ainda ficou com alguma dúvida? Entre em contato com a gente!</h1>
            </div>
            <div className={`${styles.right}`}>
            <div className={`${styles.info}`}>
            <div className={`${styles.adress}`}>
            CNPJ: 10.501.613/0001-66
            R. João Alves Da Silva, 200
            B. Jardim Oasis | Cajazeiras-PB
            CEP: 58.900-000 | Brasil
                
                </div>
                
                
                </div>
                
            </div>
        </footer>
       
    )
}

export default Footer;