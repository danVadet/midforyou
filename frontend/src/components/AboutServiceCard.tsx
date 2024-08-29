
import styles from './AboutServiceCard.module.css'

interface IProps {
    imagePosition: string;
    description: string;
    title: string;
    imageUrl: string;
}

const AboutServiceCard: React.FC<IProps> = (props) => {

    return (
        <>
            <div className={`${styles.about_service_card_component}`}>

                {
                    props.imagePosition === 'left' &&
                    <div className={`${styles.about_service_card_wrapper_left}`}>
                        <div className={`${styles.image}`} >
                            <img src={props.imageUrl} alt={props.title} />
                        </div>
                        <div className={`${styles.informations_container}`}>
                            <h1 className={`${styles.title}`}>{props.title}</h1>
                            <div className={`${styles.description_container}`}>
                                <p className={`${styles.description}`} >{props.description}</p>
                            </div>
                        </div>
                    </div>
                }

                {
                    props.imagePosition === 'right' &&
                    <div className={`${styles.about_service_card_wrapper_right}`}>
                        <div className={`${styles.informations_container}`}>
                            <h1 className={`${styles.title}`}>{props.title}</h1>
                            <div className={`${styles.description_container}`}>
                            <p className={`${styles.description}`} >{props.description}</p>
                            </div>
                        </div>
                        <div className={`${styles.image}`} >
                            <img src={props.imageUrl} alt={props.title} />
                        </div>
                    </div>
                }

            </div>
        </>
    );



}

export default AboutServiceCard;