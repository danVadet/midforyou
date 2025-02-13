import {Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import  multiLang  from './multiLang.json';
import TaxModal from './components/TaxModal';
import { useState } from 'react';

const RoutesProvider = () => {


      const location = useLocation();
      const previousLocation = location.state?.previousLocation;
      const [language, setLanguage] = useState("pt");
    return (
      <>
      <Routes location={previousLocation}>
            <Route path='/en' element={<Main 
               home={multiLang.en.home}
              about={multiLang.en.about}
              container={multiLang.en.container}
              brazilPorts={multiLang.en.brazilPorts}
              contact={multiLang.en.contact}
              linkLang={multiLang.en.linkLang}

          bannerInfo1= {multiLang.en.bannerInfo1}
          bannerInfo2= {multiLang.en.bannerInfo2}
          aboutInfo1={multiLang.en.aboutInfo1}
          aboutInfo2={multiLang.en.aboutInfo2}
          aboutInfo3={multiLang.en.aboutInfo3}
          aboutInfo4={multiLang.en.aboutInfo4}
          services={multiLang.en.services}
          sellerLabel={multiLang.en.sellerLabel}
          buyerLabel={multiLang.en.buyerLabel}
          riskTransferLabel={multiLang.en.riskTransferLabel}
          iconIcoterms={multiLang.en.iconsIcoterms}
          incoterms={multiLang.en.incoterms}
          freight={multiLang.en.freight}
          modal={multiLang.en.modal}
          moreDetails={multiLang.en.moreDetails}
          loadCalculator={multiLang.en.loadCalculator}
          enterName={multiLang.en.enterName}
          nameRequiredContainer={multiLang.en.nameRequiredContainer}
          enterQuantity={multiLang.en.enterQuantity}
          quantityRequiredContainer={multiLang.en.quantityRequiredContainer}
          enterLength={multiLang.en.enterLength}
          lengthRequiredContainer={multiLang.en.lengthRequiredContainer}
          enterWidth={multiLang.en.enterWidth}
          widthRequiredContainer={multiLang.en.widthRequiredContainer}
          enterHeight={multiLang.en.enterHeight}
          heightRequiredContainer={multiLang.en.heightRequiredContainer}
          enterPeso={multiLang.en.enterPeso}
          pesoRequiredContainer={multiLang.en.pesoRequiredContainer}
          buttonAdd={multiLang.en.buttonAdd}
          searchProduct={multiLang.en.searchProduct}
          productNotAdded={multiLang.en.productNotAdded}
          productUniPeso={multiLang.en.productUniPeso}
          productUniVolume={multiLang.en.productUniVolume}
          productQuantity={multiLang.en.productQuantity}
          productTotalPeso={multiLang.en.productTotalPeso}
          productTotalVolume={multiLang.en.productTotalVolume}
          pesoTotal={multiLang.en.pesoTotal}
          volumeTotal={multiLang.en.volumeTotal}
          selectContainer={multiLang.en.selectContainer}
          pesoCapicity={multiLang.en.pesoCapacity}
          cubCapacicity={multiLang.en.cubCapacity}
          totalCargoPeso={multiLang.en.totalCargoPeso}
          totalCargoVolume={multiLang.en.totalCargoVolume}
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
        buttonSending={multiLang.en.buttonSending} /> } />

<Route path='/es' element={<Main 
               home={multiLang.es.home}
              about={multiLang.es.about}
              container={multiLang.es.container}
              brazilPorts={multiLang.es.brazilPorts}

              contact={multiLang.es.contact}
              linkLang={multiLang.es.linkLang}

          bannerInfo1= {multiLang.es.bannerInfo1}
          bannerInfo2= {multiLang.es.bannerInfo2}
          aboutInfo1={multiLang.es.aboutInfo1}
          aboutInfo2={multiLang.es.aboutInfo2}
          aboutInfo3={multiLang.es.aboutInfo3}
          aboutInfo4={multiLang.pt.aboutInfo4}
          services={multiLang.es.services}
          sellerLabel={multiLang.es.sellerLabel}
          buyerLabel={multiLang.es.buyerLabel}
          riskTransferLabel={multiLang.es.riskTransferLabel}
          iconIcoterms={multiLang.es.iconsIcoterms}
          incoterms={multiLang.es.incoterms}
          freight={multiLang.es.freight}
          modal={multiLang.es.modal}
          moreDetails={multiLang.es.moreDetails}
          loadCalculator={multiLang.es.loadCalculator}
          enterName={multiLang.es.enterName}
          nameRequiredContainer={multiLang.es.nameRequiredContainer}
          enterQuantity={multiLang.es.enterQuantity}
          quantityRequiredContainer={multiLang.es.quantityRequiredContainer}
          enterLength={multiLang.es.enterLength}
          lengthRequiredContainer={multiLang.es.lengthRequiredContainer}
          enterWidth={multiLang.es.enterWidth}
          widthRequiredContainer={multiLang.es.widthRequiredContainer}
          enterHeight={multiLang.es.enterHeight}
          heightRequiredContainer={multiLang.es.heightRequiredContainer}
          enterPeso={multiLang.es.enterPeso}
          pesoRequiredContainer={multiLang.es.pesoRequiredContainer}
          buttonAdd={multiLang.es.buttonAdd}
          searchProduct={multiLang.es.searchProduct}
          productNotAdded={multiLang.es.productNotAdded}
          productUniPeso={multiLang.es.productUniPeso}
          productUniVolume={multiLang.es.productUniVolume}
          productQuantity={multiLang.es.productQuantity}
          productTotalPeso={multiLang.es.productTotalPeso}
          productTotalVolume={multiLang.es.productTotalVolume}
          pesoTotal={multiLang.es.pesoTotal}
          volumeTotal={multiLang.es.volumeTotal}
          selectContainer={multiLang.es.selectContainer}
          pesoCapicity={multiLang.es.pesoCapacity}
          cubCapacicity={multiLang.es.cubCapacity}
          totalCargoPeso={multiLang.es.totalCargoPeso}
          totalCargoVolume={multiLang.es.totalCargoVolume}
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
        buttonSending={multiLang.es.buttonSending} /> } />

        <Route path='/' element={<Main 
               home={multiLang.pt.home}
              about={multiLang.pt.about}
              container={multiLang.pt.container}
              brazilPorts={multiLang.pt.brazilPorts}

              contact={multiLang.pt.contact}
              linkLang={multiLang.pt.linkLang}
          bannerInfo1= {multiLang.pt.bannerInfo1}
          bannerInfo2= {multiLang.pt.bannerInfo2}
          aboutInfo1={multiLang.pt.aboutInfo1}
          aboutInfo2={multiLang.pt.aboutInfo2}
          aboutInfo3={multiLang.pt.aboutInfo3}
          aboutInfo4={multiLang.pt.aboutInfo4}
          services={multiLang.pt.services}
          sellerLabel={multiLang.pt.sellerLabel}
          buyerLabel={multiLang.pt.buyerLabel}
          riskTransferLabel={multiLang.pt.riskTransferLabel}
          iconIcoterms={multiLang.pt.iconsIcoterms}
          incoterms={multiLang.pt.incoterms}
          freight={multiLang.pt.freight}
          modal={multiLang.pt.modal}
          moreDetails={multiLang.pt.moreDetails}
          loadCalculator={multiLang.pt.loadCalculator}
          enterName={multiLang.pt.enterName}
          nameRequiredContainer={multiLang.pt.nameRequiredContainer}
          enterQuantity={multiLang.pt.enterQuantity}
          quantityRequiredContainer={multiLang.pt.quantityRequiredContainer}
          enterLength={multiLang.pt.enterLength}
          lengthRequiredContainer={multiLang.pt.lengthRequiredContainer}
          enterWidth={multiLang.pt.enterWidth}
          widthRequiredContainer={multiLang.pt.widthRequiredContainer}
          enterHeight={multiLang.pt.enterHeight}
          heightRequiredContainer={multiLang.pt.heightRequiredContainer}
          enterPeso={multiLang.pt.enterPeso}
          pesoRequiredContainer={multiLang.pt.pesoRequiredContainer}
          buttonAdd={multiLang.pt.buttonAdd}
          searchProduct={multiLang.pt.searchProduct}
          productNotAdded={multiLang.pt.productNotAdded}
          productUniPeso={multiLang.pt.productUniPeso}
          productUniVolume={multiLang.pt.productUniVolume}
          productQuantity={multiLang.pt.productQuantity}
          productTotalPeso={multiLang.pt.productTotalPeso}
          productTotalVolume={multiLang.pt.productTotalVolume}
          pesoTotal={multiLang.pt.pesoTotal}
          volumeTotal={multiLang.pt.volumeTotal}
          selectContainer={multiLang.pt.selectContainer}
          pesoCapicity={multiLang.pt.pesoCapacity}
          cubCapacicity={multiLang.pt.cubCapacity}
          totalCargoPeso={multiLang.pt.totalCargoPeso}
          totalCargoVolume={multiLang.pt.totalCargoVolume}
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
        buttonSending={multiLang.pt.buttonSending} />
      
    
      }  
        />

                

                


        </Routes>
        <Routes>
                          <Route path="/:lang/:code" element={<TaxModal />} />

        </Routes>

    

        
  
      

      </>
   
    );
}

export default RoutesProvider;