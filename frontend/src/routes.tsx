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
            <Route path='/' element={<Main 
          bannerInfo1= {multiLang.pt.bannerInfo1}
          bannerInfo2= {multiLang.pt.bannerInfo2}
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