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

const AboutServices = ({card_1_title, card_1_description, card_2_title, card_2_description,  card_3_title, card_3_description, card_4_title, card_4_description} : IAboutServicesProps) => {

    return (
        <>
            <div className={`${styles.about_services_component}`}>
                <AboutServiceCard
                    imageUrl={`./assets/Acessoria comercial internacional.jpg`}
                    imagePosition='left'
                    title={card_1_title}
                    description={card_1_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Análise Aduaneira.jpg`}
                    imagePosition='right'
                    title={card_2_title}
                    description={card_2_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Importação e Exportação.jpg`}
                    imagePosition='left'
                    title={card_3_title}
                    description={card_3_description} />
                <AboutServiceCard
                    imageUrl={`./assets/Laboratório de Qualidade.jpg`}
                    imagePosition='right'
                    title={card_4_title}
                    description={card_4_description} />
            </div>
        </>
    );

}

export default AboutServices;