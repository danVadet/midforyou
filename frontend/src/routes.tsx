import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './pages/Main';
import  multiLang  from './multiLang.json';
import Tax from './components/Tax';

const RoutesProvider = () => {


    return (
      <>
  
       <Router>
       <Routes>
            <Route path='/en' element={ <Main 
            home={`${multiLang.en.home}`}
            about= {`${multiLang.en.about}`}
            container= {`${multiLang.en.container}`}
            contact= {`${multiLang.en.contact}`}
            brandInfo1= {`${multiLang.en.brandInfo1}`}
            brandInfo2= {`${multiLang.en.brandInfo2}`}
            aboutInfo1= {`${multiLang.en.aboutInfo1}`}
            aboutInfo2= {`${multiLang.en.aboutInfo2}`}
            aboutInfo3={`${multiLang.en.aboutInfo3}`}
            aboutInfo4= {`${multiLang.en.aboutInfo4}`}
            card_1_title= {`${multiLang.en.card_1_title}`}
            card_1_description= {`${multiLang.en.card_1_description}`}
            card_2_title= {`${multiLang.en.card_2_title}`}
            card_2_description= {`${multiLang.en.card_2_description}`}
            card_3_title= {`${multiLang.en.card_3_title}`}
           card_3_description={`${multiLang.en.card_3_description}`}
           card_4_title= {`${multiLang.en.card_4_title}`}
           card_4_description= {`${multiLang.en.card_4_description}`}
           loadCalculator={`${multiLang.en.loadCalculator}`}
           enterName={`${multiLang.en.enterName}`}
           nameRequiredContainer={`${multiLang.en.nameRequiredContainer}`}
           enterQuantity={`${multiLang.en.enterQuantity}`}
           quantityRequiredContainer={`${multiLang.en.quantityRequiredContainer}`}
           enterPeso={`${multiLang.en.enterPeso}`}
           pesoRequiredContainer={`${multiLang.en.pesoRequiredContainer}`}
           enterVolume={`${multiLang.en.enterVolume}`}
           volumeRequiredContainer={`${multiLang.en.volumeRequiredContainer}`}
           buttonAdd={`${multiLang.en.buttonAdd}`}
           searchProduct={`${multiLang.en.searchProduct}`}
           productNotAdded={`${multiLang.en.productNotAdded}`}
           productQuantity={`${multiLang.en.productQuantity}`}
           productUniPeso={`${multiLang.en.productUniPeso}`}
           productUniVolume={`${multiLang.en.productUniVolume}`}
           productTotalPeso={`${multiLang.en.productTotalPeso}`}
           productTotalVolume={`${multiLang.en.productTotalPeso}`}
           pesoTotal={`${multiLang.en.pesoTotal}`}
           volumeTotal={`${multiLang.en.volumeTotal}`}
           selectContainer={`${multiLang.en.selectContainer}`}
           pesoCapicity={`${multiLang.en.pesoCapacity}`}
           cubCapacicity={`${multiLang.en.cubCapacity}`}
          contactTitle={`${multiLang.en.contactTitle}`}
          fullName={`${multiLang.en.fullName}`}
          phone={`${multiLang.en.phone}`}
          email={`${multiLang.en.email}`}
          companyName={`${multiLang.en.companyName}`}
          ramoAtividade={`${multiLang.en.ramoAtividade}`}
          local={`${multiLang.en.local}`}
          message={`${multiLang.en.message}`}
          buttonSend={`${multiLang.en.buttonSend}`} />}  />
            <Route path='/es' element={ <Main 
            home={`${multiLang.es.home}`}
            about= {`${multiLang.es.about}`}
            container= {`${multiLang.es.container}`}
            contact= {`${multiLang.es.contact}`}
            brandInfo1= {`${multiLang.es.brandInfo1}`}
            brandInfo2= {`${multiLang.es.brandInfo2}`}
            aboutInfo1= {`${multiLang.es.aboutInfo1}`}
            aboutInfo2= {`${multiLang.es.aboutInfo2}`}
            aboutInfo3={`${multiLang.es.aboutInfo3}`}
            aboutInfo4= {`${multiLang.es.aboutInfo4}`}
            card_1_title= {`${multiLang.es.card_1_title}`}
            card_1_description= {`${multiLang.es.card_1_description}`}
            card_2_title= {`${multiLang.es.card_2_title}`}
            card_2_description= {`${multiLang.es.card_2_description}`}
            card_3_title= {`${multiLang.es.card_3_title}`}
           card_3_description={`${multiLang.es.card_3_description}`}
           card_4_title= {`${multiLang.es.card_4_title}`}
           card_4_description= {`${multiLang.es.card_4_description}`}
           loadCalculator={`${multiLang.es.loadCalculator}`}
           enterName={`${multiLang.es.enterName}`}
           nameRequiredContainer={`${multiLang.es.nameRequiredContainer}`}
           enterQuantity={`${multiLang.es.enterQuantity}`}
           quantityRequiredContainer={`${multiLang.es.quantityRequiredContainer}`}
           enterPeso={`${multiLang.es.enterPeso}`}
           pesoRequiredContainer={`${multiLang.es.pesoRequiredContainer}`}
           enterVolume={`${multiLang.es.enterVolume}`}
           volumeRequiredContainer={`${multiLang.es.volumeRequiredContainer}`}
           buttonAdd={`${multiLang.es.buttonAdd}`}
           searchProduct={`${multiLang.es.searchProduct}`}
           productNotAdded={`${multiLang.es.productNotAdded}`}
           productQuantity={`${multiLang.es.productQuantity}`}
           productUniPeso={`${multiLang.es.productUniPeso}`}
           productUniVolume={`${multiLang.es.productUniVolume}`}
           productTotalPeso={`${multiLang.es.productTotalPeso}`}
           productTotalVolume={`${multiLang.es.productTotalVolume}`}
           pesoTotal={`${multiLang.es.pesoTotal}`}
           volumeTotal={`${multiLang.es.volumeTotal}`}
           selectContainer={`${multiLang.es.selectContainer}`}
           pesoCapicity={`${multiLang.es.pesoCapacity}`}
           cubCapacicity={`${multiLang.es.cubCapacity}`}
          contactTitle={`${multiLang.es.contactTitle}`}
          fullName={`${multiLang.es.fullName}`}
          phone={`${multiLang.es.phone}`}
          email={`${multiLang.es.email}`}
          companyName={`${multiLang.es.companyName}`}
          ramoAtividade={`${multiLang.es.ramoAtividade}`}
          local={`${multiLang.es.local}`}
          message={`${multiLang.es.message}`}
          buttonSend={`${multiLang.es.buttonSend}`} />}  />
            <Route path='/' element={<Main 
          home={`${multiLang.pt.home}`}
          about= {`${multiLang.pt.about}`}
          container= {`${multiLang.pt.container}`}
          contact= {`${multiLang.pt.contact}`}
          brandInfo1= {`${multiLang.pt.brandInfo1}`}
          brandInfo2= {`${multiLang.pt.brandInfo2}`}
          aboutInfo1= {`${multiLang.pt.aboutInfo1}`}
          aboutInfo2= {`${multiLang.pt.aboutInfo2}`}
          aboutInfo3={`${multiLang.pt.aboutInfo3}`}
          aboutInfo4= {`${multiLang.pt.aboutInfo4}`}
          card_1_title= {`${multiLang.pt.card_1_title}`}
          card_1_description= {`${multiLang.pt.card_1_description}`}
          card_2_title= {`${multiLang.pt.card_2_title}`}
          card_2_description= {`${multiLang.pt.card_2_description}`}
          card_3_title= {`${multiLang.pt.card_3_title}`}
         card_3_description={`${multiLang.pt.card_3_description}`}
         card_4_title= {`${multiLang.pt.card_4_title}`}
         card_4_description= {`${multiLang.pt.card_4_description}`}
         loadCalculator={`${multiLang.pt.loadCalculator}`}
         enterName={`${multiLang.pt.enterName}`}
         nameRequiredContainer={`${multiLang.pt.nameRequiredContainer}`}
         enterQuantity={`${multiLang.pt.enterQuantity}`}
         quantityRequiredContainer={`${multiLang.pt.quantityRequiredContainer}`}
         enterPeso={`${multiLang.pt.enterPeso}`}
         pesoRequiredContainer={`${multiLang.pt.pesoRequiredContainer}`}
         enterVolume={`${multiLang.pt.enterVolume}`}
         volumeRequiredContainer={`${multiLang.pt.volumeRequiredContainer}`}
         buttonAdd={`${multiLang.pt.buttonAdd}`}
         searchProduct={`${multiLang.pt.searchProduct}`}
         productNotAdded={`${multiLang.pt.productNotAdded}`}
         productQuantity={`${multiLang.pt.productQuantity}`}
         productUniPeso={`${multiLang.pt.productUniPeso}`}
         productUniVolume={`${multiLang.pt.productUniVolume}`}
         productTotalPeso={`${multiLang.pt.productTotalPeso}`}
         productTotalVolume={`${multiLang.pt.productTotalVolume}`}
         pesoTotal={`${multiLang.pt.pesoTotal}`}
         volumeTotal={`${multiLang.pt.volumeTotal}`}
         selectContainer={`${multiLang.pt.selectContainer}`}
         pesoCapicity={`${multiLang.pt.pesoCapacity}`}
         cubCapacicity={`${multiLang.pt.cubCapacity}`}
        contactTitle={`${multiLang.pt.contactTitle}`}
        fullName={`${multiLang.pt.fullName}`}
        phone={`${multiLang.pt.phone}`}
        email={`${multiLang.pt.email}`}
        companyName={`${multiLang.pt.companyName}`}
        ramoAtividade={`${multiLang.pt.ramoAtividade}`}
        local={`${multiLang.pt.local}`}
        message={`${multiLang.pt.message}`}
        buttonSend={`${multiLang.pt.buttonSend}`} /> }  
        />

        </Routes>
    </Router>
      </>
   
    );
}

export default RoutesProvider;