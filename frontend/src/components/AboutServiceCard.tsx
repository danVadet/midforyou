import styles from './AboutServiceCard.module.css';

export interface IAboutServiceCardProps {

    imagePosition: string;
    imageUrl: string;
    title: string;
    description: string;
}

export const AboutServiceCard = (props: IAboutServiceCardProps) => {

    return (
        <div className={`${styles.about_service_card_component}`}>
            {
                props.imagePosition === 'left' &&
                <div className={`${styles.about_service_card_wrapper_left}`}>
                    <div className={`${styles.image}`}>
                        <img src={props.imageUrl} alt={props.title} />
                    </div>
                    <div className={`${styles.informations_container}`}>
                        <h1 className={`${styles.title}`}>{props.title}</h1>
                        <div className={`${styles.description_container}`}>
                            <span className={`${styles.description}`}>{props.description}</span>
                        </div>
                    </div>
                </div>
            }

            {
                props.imagePosition === 'right' &&
                <div className={`${styles.about_service_card_wrapper_right}`}>
                    <div className={`${styles.informations_container}`}>
                        <h1 className={`${styles.title}`}>{props.title}</h1>
                        <div  className={`${styles.description_container}`}>
                            <span className={`${styles.description}`}>{props.description}</span>
                        </div>
                    </div>
                    <div  className={`${styles.image}`}>
                        <img src={props.imageUrl} alt={props.title} />
                    </div>
                </div>
            }

        </div>
    )

}