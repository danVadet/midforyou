
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';

const RoutesProvider = () => {
    return (
    
        <Router>
            <Navbar></Navbar>
            <Main></Main>
            <Footer></Footer>
            
        
        </Router>

    )
}

export default RoutesProvider;