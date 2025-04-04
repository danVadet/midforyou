
import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { LanguageProvider } from './contexts/LanguageContext';
import multiLang from "./multiLang.json";

export const RoutesProvider = () => {

    return (
            <LanguageProvider>
                <Routes>
                    <Route path="/en" element={<Main services={multiLang.en.services} />} />
                    <Route path="/es" element={<Main services={multiLang.es.services} />} />
                    <Route path="/" element={<Main services={multiLang.pt.services} />} />
                </Routes>
            </LanguageProvider>
    )
}
