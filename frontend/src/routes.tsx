import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Main } from './pages/Main';
import { LanguageProvider } from './contexts/LanguageContext';
import multiLang from "./multiLang.json";
import { NavProvider } from './contexts/NavContext';
import { TaxModal } from './components/TaxModal';

export const RoutesProvider = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as { previousLocation?: Location };


    return (
        <LanguageProvider>
            <NavProvider>
                
                <Routes  location={state?.previousLocation || location}>
                    <Route path="/en" element={<Main navLangs={multiLang.en.navLangs} services={multiLang.en.services} incoterms={multiLang.en.incoterms} incotermIcons={multiLang.en.incotermIcons} />} />
                    <Route path="/es" element={<Main navLangs={multiLang.es.navLangs} services={multiLang.es.services} incoterms={multiLang.es.incoterms} incotermIcons={multiLang.es.incotermIcons} />} />
                    <Route path="/" element={<Main navLangs={multiLang.pt.navLangs} services={multiLang.pt.services} incoterms={multiLang.pt.incoterms} incotermIcons={multiLang.pt.incotermIcons} />} />
                </Routes>

                {state?.previousLocation && (
                    <Routes>
                        <Route path="/en/:code" element={<TaxModal closeModal={() => { navigate(state.previousLocation || "/en")}} />}></Route>
                        <Route path="/es/:code" element={<TaxModal closeModal={() => { navigate(state.previousLocation || "/es")}} />}></Route>
                        <Route path="/:code"  element={<TaxModal closeModal={() => { navigate(state.previousLocation || "/")}} />}></Route>
                    </Routes>
                )}

            </NavProvider>
        </LanguageProvider>
    )
}
