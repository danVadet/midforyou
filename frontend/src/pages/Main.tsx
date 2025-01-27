
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import About from '../components/About';
import Incoterms from '../components/Incoterms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Incoterm } from '../models/Incoterm';
import { IconIcoterm } from '../models/IconIcoterm';
import Home from '../components/Home';
import Map from '../components/Map';
import { useRef } from 'react';

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
  agreedPlace: string;
  loadPort: string;
  destinationPort: string;
  destinationPlace: string;
  destination: string;
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
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const conteinersRef = useRef<HTMLDivElement>(null);
  const incotermsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      })
  }
  };

  


  return (
    <>
      <Navbar 
       home={props.home} about={props.about} container={props.container} contact={props.contact}
       homeRef={homeRef} aboutRef={aboutRef}  mapRef={mapRef} conteinersRef={conteinersRef} incotermsRef={incotermsRef} contactRef={contactRef}
       scrollToSection={scrollToSection}
       
       />

        <Home  bannerInfo1={props.bannerInfo1} bannerInfo2={props.bannerInfo2}

          homeRef={homeRef}
        />

        <About aboutInfo1={props.aboutInfo1} aboutInfo2={props.aboutInfo2} aboutInfo3={props.aboutInfo3} aboutInfo4={props.aboutInfo4}
                    card_1_title={props.card_1_title} 
                    card_1_description={props.card_1_description} 
                    card_2_title={props.card_2_title} 
                    card_2_description={props.card_2_description}
                    card_3_title={props.card_3_title}
                    card_3_description={props.card_3_description}
                    card_4_title={props.card_4_title}
                    card_4_description={props.card_4_description}

                    aboutRef={aboutRef}
                    
                    />
                  
               <Incoterms incoterms={props.incoterms} 
                          iconsIcoterm={props.iconsIcoterm}
                          costLabel={props.costLabel} 
                          riskLabel={props.riskLabel} 
                          insuranceLabel={props.insuranceLabel}
                          seller={props.seller}
                          agreedPlace={props.agreedPlace}
                          loadPort={props.loadPort}
                          destinationPlace={props.destinationPlace}
                          destinationPort={props.destinationPort}
                          destination={props.destination}
                          freight={props.freight}
                          modal={props.modal}
                          moreDetails={props.moreDetails}

                          incotermsRef={incotermsRef}
                          
                          />

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
                           cubCapacicity={props.cubCapacicity}
                           
                           conteinersRef={conteinersRef}
                           
                           />          
                  
            <Map mapRef={mapRef}></Map>  
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
                        buttonSending={props.buttonSending}
                        contactRef={contactRef}
                        />

        
       <Footer></Footer>
    </>
  );
}

export default Main;
