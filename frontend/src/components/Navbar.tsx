import styles from './Navbar.module.css'
import { useState } from 'react'

interface INavbarProps {
    home: string;
    about: string;
    container: string;
    contact: string;


}
const Navbar = (props: INavbarProps) => {

    const [mobileMenu, setMobileMenu] = useState(false);
    
    return (
        <nav>


            {mobileMenu ? // icon close
                <i onClick={() => setMobileMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="rgb(0, 175, 239)">
                            <g transform="scale(5.12,5.12)"> <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
                            </g>
                        </g>
                    </svg>
                </i>
                :
                // icon menu bar
                <i onClick={() => setMobileMenu(true)} className={`${styles.menuIcon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="rgb(0, 175, 239)">
                            <g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                            </g>
                        </g>
                    </svg>
                </i>
            }
            <div className={`${styles.navLogoContainer}`}>
                <img src={`logo.png`} alt="" height={40} />
            </div>
            <ul className={mobileMenu ? '' : `${styles.hideMobileMenu}`}>
                <li>
                    <a href="#"> {props.home} </a>
                </li>
                <li>
                    <a href="#about">{props.about}</a>

                </li>
                <li>
                    <a href="#incoterms"> Incoterms </a>
                </li>
                <li>
                    <a href="#conteiners">{props.container}</a>
                </li>
                <li>
                    <a href="#contact">{props.contact}</a>
                </li>

                <li className={`${styles.listLanguage}`}>
                    <a href="/"><img src={`./assets/brazil-flag.png`} width={35} height={35} /></a>
                    <a href="/en"><img src={`./assets/english-flag.png`} width={35} height={35} /></a>
                    <a href="/es"><img src={`./assets/spanish-flag.png`} width={35} height={35} /></a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;