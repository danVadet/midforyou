import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import About from '../components/About';
import Incoterms from '../components/Incoterms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Map from '../components/Map';
import { useRef } from 'react';

interface IMainProps {
  bannerInfo1: string;
  bannerInfo2: string;
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
       homeRef={homeRef} aboutRef={aboutRef}  mapRef={mapRef} conteinersRef={conteinersRef} incotermsRef={incotermsRef} contactRef={contactRef}
       scrollToSection={scrollToSection}
       
       />

        <Home  homeRef={homeRef} />

        <About aboutRef={aboutRef} />
                  
        <Incoterms incotermsRef={incotermsRef} />

        <Conteiner conteinersRef={conteinersRef} />          
          
        <Map mapRef={mapRef}/>
               <Contact
                
                        contactRef={contactRef}
                        />

        
       <Footer></Footer>
    </>
  );
}

export default Main;
