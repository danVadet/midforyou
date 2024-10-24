import styles from './AboutServices.module.css'
import AboutServiceCard from './AboutServiceCard';

interface IAboutServicesProps {
    
    card_1_title: string;
    card_1_description: string;
    card_2_title: string;
    card_2_description: string;
    card_3_title: string;
    card_3_description: string;
    card_4_title: string;
    card_4_description: string;
}

const AboutServices = (props: IAboutServicesProps) => {

    return (
        <>
            <div className={`${styles.about_services_component}`}>
                <AboutServiceCard
                    imageUrl={`./assets/Acessoria comercial internacional.jpg`}
                    imagePosition='left'
                    title={props.card_1_title}
                    description={props.card_1_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Análise Aduaneira.jpg`}
                    imagePosition='right'
                    title={props.card_2_title}
                    description={props.card_2_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Importação e Exportação.jpg`}
                    imagePosition='left'
                    title={props.card_3_title}
                    description={props.card_3_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Laboratório de Qualidade.jpg`}
                    imagePosition='right'
                    title={props.card_4_title}
                    description={props.card_4_description} />
            </div>
        </>
    );

}

export default AboutServices;