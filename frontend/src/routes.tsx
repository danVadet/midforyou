import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './pages/Main';
import  multiLang  from './multiLang.json';

const RoutesProvider = () => {
    return (
      <>
  
       <Router>
       <Routes>
            <Route path='/en' element={ <Main 
            home={ multiLang.en.home}
            about= { multiLang.en.about}
            container= {multiLang.en.container}
            contact= {multiLang.en.contact}
            bannerInfo1= {multiLang.en.bannerInfo1}
            bannerInfo2= {multiLang.en.bannerInfo2}
            aboutInfo1= {multiLang.en.aboutInfo1}
            aboutInfo2= {multiLang.en.aboutInfo2}
            aboutInfo3={multiLang.en.aboutInfo3}
            aboutInfo4= {multiLang.en.aboutInfo4}
            card_1_title= {multiLang.en.card_1_title}
            card_1_description= {multiLang.en.card_1_description}
            card_2_title= {multiLang.en.card_2_title}
            card_2_description= {multiLang.en.card_2_description}
            card_3_title= {multiLang.en.card_3_title}
           card_3_description={multiLang.en.card_3_description}
           card_4_title= {multiLang.en.card_4_title}
           card_4_description= {multiLang.en.card_4_description}
           loadCalculator={multiLang.en.loadCalculator}
           enterName={multiLang.en.enterName}
           nameRequiredContainer={multiLang.en.nameRequiredContainer}
           enterQuantity={multiLang.en.enterQuantity}
           quantityRequiredContainer={multiLang.en.quantityRequiredContainer}
           enterPeso={multiLang.en.enterPeso}
           pesoRequiredContainer={multiLang.en.pesoRequiredContainer}
           enterVolume={multiLang.en.enterVolume}
           volumeRequiredContainer={multiLang.en.volumeRequiredContainer}
           buttonAdd={multiLang.en.buttonAdd}
           searchProduct={multiLang.en.searchProduct}
           productNotAdded={multiLang.en.productNotAdded}
           productQuantity={multiLang.en.productQuantity}
           productUniPeso={multiLang.en.productUniPeso}
           productUniVolume={multiLang.en.productUniVolume}
           productTotalPeso={multiLang.en.productTotalPeso}
           productTotalVolume={multiLang.en.productTotalPeso}
           pesoTotal={multiLang.en.pesoTotal}
           volumeTotal={multiLang.en.volumeTotal}
           selectContainer={multiLang.en.selectContainer}
           pesoCapicity={multiLang.en.pesoCapacity}
           cubCapacicity={multiLang.en.cubCapacity}
           incoterms={multiLang.en.incoterms}
           iconsIcoterm={multiLang.en.iconsIcoterms}
           costLabel={multiLang.en.costLabel} 
           riskLabel={multiLang.en.riskLabel} 
           insuranceLabel={multiLang.en.insuranceLabel}
           seller={multiLang.en.seller}
           buyer={multiLang.en.buyer}
           freight={multiLang.en.freight}
           modal={multiLang.en.modal}
           moreDetails={multiLang.en.moreDetails}
          contactTitle={multiLang.en.contactTitle}
          imageLegend={multiLang.en.imageLegend}
          enterFullName={multiLang.en.enterFullName}
          fullNameRequiredContact={multiLang.en.fullNameRequiredContact}
          enterPhone={multiLang.en.enterPhone}
          phoneRequiredContact={multiLang.en.phoneRequiredContact}
          enterEmail={multiLang.en.enterEmail}
          emailRequiredContact={multiLang.en.emailRequiredContact}
          enterCompanyName={multiLang.en.enterCompanyName}
          companyNameRequiredContact={multiLang.en.companyNameRequiredContact}
          enterRamoAtividade={multiLang.en.enterRamoAtividade}
          ramoAtividadeRequiredContact={multiLang.en.ramoAividadeRequiredContact}
          enterLocal={multiLang.en.enterLocal}
          localRequiredContact={multiLang.en.localRequiredContact}
          enterMessage={multiLang.en.enterMessage}
          messageRequiredContact={multiLang.en.messageRequiredContact}
          buttonSend={multiLang.en.buttonSend}
          buttonSending={multiLang.en.buttonSending} />}  />
            <Route path='/es' element={ <Main 
            home={multiLang.es.home}
            about= {multiLang.es.about}
            container= {multiLang.es.container}
            contact= {`${multiLang.es.contact}`}
            bannerInfo1= {multiLang.es.bannerInfo1}
            bannerInfo2= {multiLang.es.bannerInfo2}
            aboutInfo1= {multiLang.es.aboutInfo1}
            aboutInfo2= {multiLang.es.aboutInfo2}
            aboutInfo3= {multiLang.es.aboutInfo3}
            aboutInfo4= {multiLang.es.aboutInfo4}
            card_1_title= {multiLang.es.card_1_title}
            card_1_description= {multiLang.es.card_1_description}
            card_2_title= {multiLang.es.card_2_title}
            card_2_description= {multiLang.es.card_2_description}
            card_3_title= {multiLang.es.card_3_title}
           card_3_description={multiLang.es.card_3_description}
           card_4_title= {multiLang.es.card_4_title}
           card_4_description= {multiLang.es.card_4_description}
           loadCalculator={multiLang.es.loadCalculator}
           enterName={multiLang.es.enterName}
           nameRequiredContainer={multiLang.es.nameRequiredContainer}
           enterQuantity={multiLang.es.enterQuantity}
           quantityRequiredContainer={multiLang.es.quantityRequiredContainer}
           enterPeso={multiLang.es.enterPeso}
           pesoRequiredContainer={multiLang.es.pesoRequiredContainer}
           enterVolume={multiLang.es.enterVolume}
           volumeRequiredContainer={multiLang.es.volumeRequiredContainer}
           buttonAdd={multiLang.es.buttonAdd}
           searchProduct={multiLang.es.searchProduct}
           productNotAdded={multiLang.es.productNotAdded}
           productQuantity={multiLang.es.productQuantity}
           productUniPeso={multiLang.es.productUniPeso}
           productUniVolume={multiLang.es.productUniVolume}
           productTotalPeso={multiLang.es.productTotalPeso}
           productTotalVolume={multiLang.es.productTotalVolume}
           pesoTotal={multiLang.es.pesoTotal}
           volumeTotal={multiLang.es.volumeTotal}
           selectContainer={multiLang.es.selectContainer}
           pesoCapicity={multiLang.es.pesoCapacity}
           cubCapacicity={multiLang.es.cubCapacity}
           iconsIcoterm={multiLang.es.iconsIcoterms}
           incoterms={multiLang.es.incoterms}
           costLabel={multiLang.es.costLabel} 
           riskLabel={multiLang.es.riskLabel} 
           insuranceLabel={multiLang.es.insuranceLabel}
           seller={multiLang.es.seller}
           buyer={multiLang.es.buyer}
           freight={multiLang.es.freight}
           modal={multiLang.es.modal}
           moreDetails={multiLang.es.moreDetails}   
          contactTitle={multiLang.es.contactTitle}
          imageLegend={multiLang.es.imageLegend}
          enterFullName={multiLang.es.enterFullName}
          fullNameRequiredContact={multiLang.es.fullNameRequiredContact}
          enterPhone={multiLang.es.enterPhone}
          phoneRequiredContact={multiLang.es.phoneRequiredContact}
          enterEmail={multiLang.es.enterEmail}
          emailRequiredContact={multiLang.es.emailRequiredContact}
          enterCompanyName={multiLang.es.enterCompanyName}
          companyNameRequiredContact={multiLang.es.companyNameRequiredContact}
          enterRamoAtividade={multiLang.es.enterRamoAtividade}
          ramoAtividadeRequiredContact={multiLang.es.ramoAividadeRequiredContact}
          enterLocal={multiLang.es.enterLocal}
          localRequiredContact={multiLang.es.localRequiredContact}
          enterMessage={multiLang.es.enterMessage}
          messageRequiredContact={multiLang.es.messageRequiredContact}
          buttonSend={multiLang.es.buttonSend}
          buttonSending={multiLang.es.buttonSending} />}  />
            <Route path='/' element={<Main 
          home={multiLang.pt.home}
          about= {multiLang.pt.about}
          container= {multiLang.pt.container}
          contact= {multiLang.pt.contact}
          bannerInfo1= {multiLang.pt.bannerInfo1}
          bannerInfo2= {multiLang.pt.bannerInfo2}
          aboutInfo1= {multiLang.pt.aboutInfo1}
          aboutInfo2= {multiLang.pt.aboutInfo2}
          aboutInfo3= {multiLang.pt.aboutInfo3}
          aboutInfo4= {multiLang.pt.aboutInfo4}
          card_1_title= {multiLang.pt.card_1_title}
          card_1_description= {multiLang.pt.card_1_description}
          card_2_title= {multiLang.pt.card_2_title}
          card_2_description= {multiLang.pt.card_2_description}
          card_3_title= {multiLang.pt.card_3_title}
         card_3_description= {multiLang.pt.card_3_description}
         card_4_title= {multiLang.pt.card_4_title}
         card_4_description= {multiLang.pt.card_4_description}
         loadCalculator={multiLang.pt.loadCalculator}
         enterName={multiLang.pt.enterName}
         nameRequiredContainer={multiLang.pt.nameRequiredContainer}
         enterQuantity={multiLang.pt.enterQuantity}
         quantityRequiredContainer={multiLang.pt.quantityRequiredContainer}
         enterPeso={multiLang.pt.enterPeso}
         pesoRequiredContainer={multiLang.pt.pesoRequiredContainer}
         enterVolume={multiLang.pt.enterVolume}
         volumeRequiredContainer={multiLang.pt.volumeRequiredContainer}
         buttonAdd={multiLang.pt.buttonAdd}
         searchProduct={multiLang.pt.searchProduct}
         productNotAdded={multiLang.pt.productNotAdded}
         productQuantity={multiLang.pt.productQuantity}
         productUniPeso={multiLang.pt.productUniPeso}
         productUniVolume={multiLang.pt.productUniVolume}
         productTotalPeso={multiLang.pt.productTotalPeso}
         productTotalVolume={multiLang.pt.productTotalVolume}
         pesoTotal={multiLang.pt.pesoTotal}
         volumeTotal={multiLang.pt.volumeTotal}
         selectContainer={multiLang.pt.selectContainer}
         pesoCapicity={multiLang.pt.pesoCapacity}
         cubCapacicity={multiLang.pt.cubCapacity}
         iconsIcoterm={multiLang.pt.iconsIcoterms}
         incoterms= {multiLang.pt.incoterms}
        costLabel={multiLang.pt.costLabel} 
        riskLabel={multiLang.pt.riskLabel} 
        insuranceLabel={multiLang.pt.insuranceLabel}
        seller={multiLang.pt.seller}
        buyer={multiLang.pt.buyer}
        freight={multiLang.pt.freight}
        modal={multiLang.pt.modal}
        moreDetails={multiLang.pt.moreDetails}
        contactTitle={multiLang.pt.contactTitle}
        imageLegend={multiLang.pt.imageLegend}
        enterFullName={multiLang.pt.enterFullName}
        fullNameRequiredContact={multiLang.pt.fullNameRequiredContact}
        enterPhone={multiLang.pt.enterPhone}
        phoneRequiredContact={multiLang.pt.phoneRequiredContact}
        enterEmail={multiLang.pt.enterEmail}
        emailRequiredContact={multiLang.pt.emailRequiredContact}
        enterCompanyName={multiLang.pt.enterCompanyName}
        companyNameRequiredContact={multiLang.pt.companyNameRequiredContact}
        enterRamoAtividade={multiLang.pt.enterRamoAtividade}
        ramoAtividadeRequiredContact={multiLang.pt.ramoAividadeRequiredContact}
        enterLocal={multiLang.pt.enterLocal}
        localRequiredContact={multiLang.pt.localRequiredContact}
        enterMessage={multiLang.pt.enterMessage}
        messageRequiredContact={multiLang.pt.messageRequiredContact}
        buttonSend={multiLang.pt.buttonSend}
        buttonSending={multiLang.pt.buttonSending} /> }  
        />

        </Routes>
    </Router>
      </>
   
    );
}

export default RoutesProvider;