import { Conteiner } from '../components/Conteiner';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { Incoterms } from '../components/Incoterms';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Map } from '../components/Map';
import { useRef } from 'react';
import { Incoterm } from '../models/Incoterm';
import { IServices } from '../models/IServices';
import { IconIcoterm } from '../models/IconIcoterm';

interface IMainProps {
  home: string;
  about: string;
  container: string;
  brazilPorts: string;
  contact: string;
  linkLang: string;
  bannerInfo1: string;
  bannerInfo2: string;
  aboutInfo1: string;
  aboutInfo2: string;
  aboutInfo3: string;
  aboutInfo4: string;
  services: IServices []
  sellerLabel: string;
  buyerLabel: string;
  riskTransferLabel: string;
  iconIcoterms: IconIcoterm []
  incoterms: Incoterm []
  freight: string;
  modal: string;
  moreDetails: string;
  loadCalculator: string;
  enterName: string;
  nameRequiredContainer: string;
  enterQuantity: string;
  quantityRequiredContainer: string;
  enterLength: string;
  lengthRequiredContainer: string;
  enterWidth: string;
  widthRequiredContainer: string;
  enterHeight: string;
  heightRequiredContainer: string;
  enterPeso: string;
  pesoRequiredContainer: string;
  buttonAdd: string;
  searchProduct: string;
  productNotAdded: string;
  productQuantity: string;
  productUniPeso: string;
  productUniVolume: string;
  productTotalPeso: string;
  productTotalVolume: string;
  pesoTotal: string;
  volumeTotal: string;
  selectContainer: string;
  pesoCapicity: string;
  cubCapacicity: string;
  totalCargoPeso: string;
  totalCargoVolume: string;
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


export const  Main = (props: IMainProps) => {

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
      <Navbar  home={props.home} about={props.about} container={props.container} contact={props.contact} brazilPorts={props.brazilPorts}
       homeRef={homeRef} aboutRef={aboutRef}  mapRef={mapRef} conteinersRef={conteinersRef} incotermsRef={incotermsRef} contactRef={contactRef}
       scrollToSection={scrollToSection}
       
       />

        <Home bannerInfo1={props.bannerInfo1} bannerInfo2={props.bannerInfo2} lang={props.linkLang}  homeRef={homeRef} />

        <About aboutInfo1={props.aboutInfo1} aboutInfo2={props.aboutInfo2} aboutInfo3={props.aboutInfo3} aboutInfo4={props.aboutInfo4} services={props.services} aboutRef={aboutRef} />


        <Incoterms 

        sellerLabel={props.sellerLabel}
        buyerLabel={props.buyerLabel}
        riskTransferLabel={props.riskTransferLabel}
     
           
      incotermsRef={incotermsRef}
      freight={props.freight}
      modal={props.modal}
      moreDetails={props.moreDetails}
     
     iconIcoterms={props.iconIcoterms}
     incoterms={props.incoterms}
     
     />      
    
   

     <Conteiner 
        loadCalculator={props.loadCalculator}
        enterName={props.enterName}
        nameRequiredContainer={props.nameRequiredContainer}
        enterQuantity={props.enterQuantity}
        quantityRequiredContainer={props.quantityRequiredContainer}
        enterLength={props.enterLength}
        lengthRequiredContainer={props.lengthRequiredContainer}
        enterWidth={props.enterWidth}
        widthRequiredContainer={props.widthRequiredContainer}
        enterHeight={props.enterHeight}
        enterPeso={props.enterPeso}
        pesoRequiredContainer={props.pesoRequiredContainer}
        heightRequiredContainer={props.heightRequiredContainer}
        buttonAdd={props.buttonAdd}
        searchProduct={props.searchProduct}
        productNotAdded={props.productNotAdded}
        productUniPeso={props.productUniPeso}
        productUniVolume={props.productUniVolume}
        productQuantity={props.productQuantity}
        productTotalPeso={props.productTotalPeso}
        productTotalVolume={props.productTotalVolume}
        pesoTotal={props.pesoTotal}
        volumeTotal={props.volumeTotal}
        selectContainer={props.selectContainer}
        pesoCapicity={props.pesoCapicity}
        cubCapacicity={props.cubCapacicity}
        totalCargoPeso={props.totalCargoPeso}
        totalCargoVolume={props.totalCargoVolume}

        conteinersRef={conteinersRef} />          
          
          <Map mapRef={mapRef}/>
                 <Contact
                     imageLegend={props.imageLegend}
                     contactTitle={props.contactTitle}
                     enterFullName={props.enterFullName}
                     fullNameRequiredContact={props.fullNameRequiredContact}
                     enterPhone={props.enterPhone}
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