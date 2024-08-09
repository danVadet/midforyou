
import styles from './AboutServices.module.css'
import AboutServiceCard from './AboutServiceCard';
import ACI from '../assets/Acessoria comercial internacional.jpg'
import AA from '../assets/Análise Aduaneira.jpg'
import IE from '../assets/Importação e Exportação.jpg'
import LQ from '../assets/Laboratório de Qualidade.jpg'

const AboutServices = () => {

    return (
        <>
            <div className={`${styles.about_services_component}`}>
                <AboutServiceCard
                    imageUrl={ACI}
                    imagePosition='left'
                    title='Acessoria comercial internacional'
                    description='Prospecção de fornecedores, envio e recebimento de amostras para verificação de qualidade, negociação internacional, fiscalização de produção das mercadorias e o acompanhamento da carga dos produtos no contêiner. Tudo isso é feito visando a garantir a satisfação dos clientes e a qualidade dos produtos comercializados de forma internacional.' />
                <AboutServiceCard
                    imageUrl={AA}
                    imagePosition='right'
                    title='Análise aduaneira'
                    description='Análise de mercado e viabilidade da operação, avaliação do tratamento administrativo e tributário conforme NCM/SH, e prestação de suporte para a certificação junto aos órgãos anuentes, como INMETRO, ANVISA, MAPA, entre outros. Esses processos são essenciais para assegurar que a operação seja realizada de forma adequada e legal, minimizando riscos e maximizando os resultados financeiros.' />
                <AboutServiceCard
                    imageUrl={IE}
                    imagePosition='left'
                    title='Importação e Exportação'
                    description='Análise documental, gestão de nacionalização de mercadorias estrangeiras, desenvolvimento de marca própria (OEM) e de embalagens, previsão de custos para importação/exportação, fechamento de câmbio e seguro internacional, acompanhamento do desembaraço aduaneiro e gestão logística nacional e internacional. Todos esses serviços visam garantir que as operações de importação e exportação sejam realizadas de forma eficiente e lucrativa, com um mínimo de riscos e custos possíveis.' />
                <AboutServiceCard
                    imageUrl={LQ}
                    imagePosition='right'
                    title='Laboratório de Qualidade'
                    description='Análise de amostras, conferência metrológica dos produtos, desenhos 2D e 3D, engenharia reversa e controle de qualidade. Esses serviços são essenciais para avaliar as características dos produtos, identificar possíveis falhas, realizar melhorias e garantir que os padrões de qualidade estejam em conformidade com as normas e regulamentações vigentes.' />
            </div>
        </>
    );

}

export default AboutServices;