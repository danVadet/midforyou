
import React from 'react';

import {BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';


const RoutesProvider = () => {
    return (
    
        <Router>
           <Main></Main>
        </Router>

    )
}

export default RoutesProvider;