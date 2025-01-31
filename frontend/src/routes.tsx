import {Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import  multiLang  from './multiLang.json';
import TaxModal from './components/TaxModal';
import { LanguageContext} from './Context/LanguageContext';
import { useState } from 'react';

const RoutesProvider = () => {


      const location = useLocation();
      const previousLocation = location.state?.previousLocation;
      const [language, setLanguage] = useState("pt");


    

  
    return (
      <>
      <LanguageContext.Provider  value={{language, setLanguage}}>
      <Routes location={previousLocation}>

      <Route path='/en' element={ <Main 
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
           destinationPort={multiLang.en.destinationPort}
           destinationPlace={multiLang.en.destinationPlace}
           destination={multiLang.en.destination}
           incoterms={multiLang.en.incoterms}
           iconsIcoterm={multiLang.en.iconsIcoterms}
           costLabel={multiLang.en.costLabel} 
           riskLabel={multiLang.en.riskLabel} 
           insuranceLabel={multiLang.en.insuranceLabel}
           seller={multiLang.en.seller}
           agreedPlace={multiLang.en.agreedPlace}
           loadPort={multiLang.en.loadPort}
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
            <Route path='/' element={<Main 
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
         iconsIcoterm={multiLang.pt.iconsIcoterms}
         incoterms= {multiLang.pt.incoterms}
        costLabel={multiLang.pt.costLabel} 
        riskLabel={multiLang.pt.riskLabel} 
        insuranceLabel={multiLang.pt.insuranceLabel}
        seller={multiLang.pt.seller}
        agreedPlace={multiLang.pt.agreedPlace}
        loadPort={multiLang.pt.loadPort}
        destinationPort={multiLang.pt.destinationPort}
        destinationPlace={multiLang.pt.destinationPlace}
        destination={multiLang.pt.destination}
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
        buttonSending={multiLang.pt.buttonSending} />
      
    
      }  
        />
                  <Route path="/:code" element={<TaxModal />} />

                


        </Routes>
      </LanguageContext.Provider>
  
      

      </>
   
    );
}

export default RoutesProvider;