
import { Link } from 'react-router-dom'
import logo from '../logo/logo.png'
import iconMenu from '../icon/icon-menu.png'
import styles from './Navbar.module.css'

import { useState } from 'react'



const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        return mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav>
            <div className={`${styles.navLogoContainer}`}>
                <img src={logo} alt="" height={40} />
            </div>

            <ul className={mobileMenu ? '' : `${styles.hideMobileMenu}`}>
                <li>
                    <Link to="/"> Início </Link>
                </li>
                <li>
                    <Link to="/servicos"> Serviços </Link>
                </li>
                <li>
                    <Link to="/incoterms"> Incoterms </Link>
                </li>
                <li>
                    <Link to="/conteiner"> Conteiners </Link>
                </li>
                <li>
                    <Link to="/contact"> Contato </Link>
                </li>
                
            </ul>
            <img src={iconMenu} className={`${styles.menuIcon}`} onClick={toggleMenu} />

        </nav>
    );
}

export default Navbar;