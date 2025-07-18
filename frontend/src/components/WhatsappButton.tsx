
import styles from "./WhatsappButton.module.css";


export const WhatsappButton = () => {

  const message = 'Olá! Gostaria de mais informações.';
  const url = `https://wa.me/${process.env.REACT_APP_WHATSAPP_PHONE_URL}?text=${encodeURIComponent(message)}`;

    return (
        <a 
          href={url}
      target="_blank"
      rel="noopener noreferrer"
        
             className={`${styles.container}`}>
            <img src={`../assets/whatsapp.svg`} alt="" />
        
        </a>
    )
}