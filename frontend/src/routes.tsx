
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const RoutesProvider = () => {
    return (
    
        <Router>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
            
        
        </Router>

    )
}

export default RoutesProvider;