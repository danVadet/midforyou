
import { Link } from 'react-router-dom'
import logo from '../logo/logo.png'
import styles from './Navbar.module.css'



const Navbar = () => {
    return (
        <nav className={`${styles.container}`}>
            <div className={`${styles.navLogoContainer}`}>
            <img src={logo} alt=""  height={50}/>
            </div>
            <div className={`${styles.navItemContainer}`}>
            <div className={`${styles.navItem}`}>
            <Link to="/"> Início </Link>
            </div>

            <div className={`${styles.navItem}`}>
            <Link to="/contact"> Contato </Link>
            </div>

            </div>
        </nav>
    );
}

export default Navbar;