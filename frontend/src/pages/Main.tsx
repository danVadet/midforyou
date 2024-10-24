
import Conteiner from '../components/Conteiner';
import Contact from '../components/Contact';
import Tax from '../components/Tax';
import styles from './Main.module.css'
import About from '../components/About';
import AboutServices from '../components/AboutServices';
import Map from '../components/Map';
import Brand from '../components/Brand';
import Incoterms from '../components/Incoterms';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface IMainProps {
  home:  string;
  about: string;
  container: string;
  contact: string;
  brandInfo1: string;
  brandInfo2: string;
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
  contactTitle: string;
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  ramoAtividade: string;
  local: string;
  message: string;
  buttonSend: string;
}


const  Main = (props: IMainProps) => {
  return (
    <div>
      <Navbar home={props.home} about={props.about} container={props.container} contact={props.contact}></Navbar>
      <Tax></Tax>
       <Brand brandInfo1={props.brandInfo1} brandInfo2={props.brandInfo2} ></Brand>
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
               <Incoterms/>
                </section>
                <Map></Map>
            
       <section className={`${styles.contact}`} id="contact">
               <Contact 
                        contactTitle={props.contactTitle} 
                        fullName={props.fullName} 
                        phone={props.phone} 
                        email={props.email} 
                        companyName={props.companyName}
                        ramoAtividade={props.ramoAtividade}
                        local={props.local}
                        message={props.message}
                        buttonSend={props.buttonSend}/>
                </section>

       <Footer></Footer>
    </div>
  );
}

export default Main;
