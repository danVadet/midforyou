
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';
import Map from '../components/Map';
import Incoterms from '../components/Incoterms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Incoterm } from '../models/Incoterm';
import { IconIcoterm } from '../models/IconIcoterm';
import Banner from '../components/Banner';

interface IMainProps {
  home:  string;
  about: string;
  container: string;
  contact: string;
  bannerInfo1: string;
  bannerInfo2: string;
  aboutInfo1: string;
  aboutInfo2: string;
  aboutInfo3: string;
  aboutInfo4: string;
  card_1_title: string;
  card_1_description: string;
  card_2_title: string;
  card_2_description: string;
  card_3_title: string;
  card_3_description: string;
  card_4_title: string;
  card_4_description: string;
  loadCalculator: string;
  enterName: string;
  nameRequiredContainer: string;
  enterQuantity: string;
  quantityRequiredContainer: string;
  enterPeso: string;
  pesoRequiredContainer: string;
  enterVolume: string;
  volumeRequiredContainer: string;
  buttonAdd: string;
  searchProduct: string;
  productNotAdded: string;
  productQuantity: string;
  productUniPeso: string;
  productUniVolume: string;
  productTotalPeso: string;
  productTotalVolume: string;
  pesoTotal: string;
  volumeTotal:string;
  selectContainer: string;
  pesoCapicity: string;
  cubCapacicity: string;
  incoterms: Incoterm[];
  iconsIcoterm: IconIcoterm[]
  costLabel: string;
  riskLabel: string;
  insuranceLabel: string;
  freight: string;
  modal: string;
  moreDetails: string;
  seller: string;
  buyer: string;
  contactTitle: string;
  imageLegend: string;
  enterFullName: string;
  fullNameRequiredContact: string;
  enterPhone: string;
  phoneRequiredContact: string;
  enterEmail: string;
  emailRequiredContact: string;
  enterCompanyName: string;
  companyNameRequiredContact: string;
  enterRamoAtividade: string;
  ramoAtividadeRequiredContact: string;
  enterLocal: string;
  localRequiredContact: string;
  enterMessage: string;
  messageRequiredContact: string
  buttonSend: string;
  buttonSending: string;
}


const  Main = (props: IMainProps) => {
  return (
    <div>
      <Navbar home={props.home} about={props.about} container={props.container} contact={props.contact}></Navbar>
      <Tax></Tax>
       <Banner bannerInfo1={props.bannerInfo1} bannerInfo2={props.bannerInfo2} ></Banner>
       <section className={`${styles.about}`} id="about">
                    <About aboutInfo1={props.aboutInfo1} aboutInfo2={props.aboutInfo2} aboutInfo3={props.aboutInfo3} aboutInfo4={props.aboutInfo4}  />
                    <AboutServices card_1_title={props.card_1_title} 
                                   card_1_description={props.card_1_description} 
                                   card_2_title={props.card_2_title} 
                                   card_2_description={props.card_2_description}
                                   card_3_title={props.card_3_title}
                                   card_3_description={props.card_3_description}
                                   card_4_title={props.card_4_title}
                                   card_4_description={props.card_4_description}
                                    />
                </section>


                <section className={`${styles.conteiners}`} id="conteiners">
                <Conteiner loadCalculator={props.loadCalculator}
                           enterName={props.enterName}
                           enterQuantity={props.enterQuantity}
                           enterPeso={props.enterPeso}
                           enterVolume={props.enterVolume}
                           nameRequiredContainer={props.nameRequiredContainer} 
                           quantityRequiredContainer={props.quantityRequiredContainer}
                           pesoRequiredContainer={props.pesoRequiredContainer}
                           volumeRequiredContainer={props.volumeRequiredContainer}
                           buttonAdd={props.buttonAdd}
                           searchProduct={props.searchProduct}
                           productNotAdded={props.productNotAdded}
                           productQuantity={props.productQuantity}
                           productUniPeso={props.productUniPeso}
                           productUniVolume={props.productUniVolume}
                           productTotalPeso={props.productTotalPeso}
                           productTotalVolume={props.productTotalVolume}
                           pesoTotal={props.pesoTotal}
                           volumeTotal={props.volumeTotal}
                           selectContainer={props.selectContainer}
                           pesoCapicity={props.pesoCapicity}
                           cubCapacicity={props.cubCapacicity}/>
                </section>
                 
       <section className={`${styles.contact}`} id="incoterms">
               <Incoterms incoterms={props.incoterms} 
                          iconsIcoterm={props.iconsIcoterm}
                          costLabel={props.costLabel} 
                          riskLabel={props.riskLabel} 
                          insuranceLabel={props.insuranceLabel}
                          seller={props.seller}
                          buyer={props.buyer}
                          freight={props.freight}
                          modal={props.modal}
                          moreDetails={props.moreDetails}
                          />
                </section>
                <Map></Map>
            
       <section className={`${styles.contact}`} id="contact">
               <Contact 
                        contactTitle={props.contactTitle} 
                        imageLegend={props.imageLegend}
                        enterFullName={props.enterFullName} 
                        fullNameRequiredContact={props.fullNameRequiredContact}
                        enterPhone ={props.enterPhone} 
                        phoneRequiredContact={props.phoneRequiredContact}
                        enterEmail={props.enterEmail}
                        emailRequiredContact={props.emailRequiredContact}
                        enterCompanyName={props.enterCompanyName}
                        companyNameRequiredContact={props.companyNameRequiredContact}
                        enterRamoAtividade={props.enterRamoAtividade}
                        ramoAtividadeRequiredContact={props.ramoAtividadeRequiredContact}
                        enterLocal={props.enterLocal}
                        localRequiredContact={props.localRequiredContact}
                        enterMessage={props.enterMessage}
                        messageRequiredContact={props.messageRequiredContact}
                        buttonSend={props.buttonSend}
                        buttonSending={props.buttonSending}/>
                </section>

       <Footer></Footer>
    </div>
  );
}

export default Main;
