import { Link } from 'react-router-dom'
import ptFlag from '../assets/brazil-flag.png'
import enFlag from '../assets/english-flag.png'
import esFlag from '../assets/spaish-flag.png'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import  multiLang  from '../multiLang.json'


interface INavbarProps {
    home: string;
    about: string;
    container: string;
    contact: string;
    setContent(multiLang: object): void
    engLang: string;
    espLang: string;

}
const Navbar = (props: INavbarProps) => {

    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()  => {

        if (props.engLang === "en") {
            props.setContent(multiLang.en)

        } else if(props.espLang === "es") {
           props.setContent(multiLang.es);
        }
        
        
}, []);

    return (
        <nav>

           
{mobileMenu ? // icon close
                <i onClick={() => setMobileMenu(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="rgb(0, 175, 239)" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                            <g transform="scale(5.12,5.12)"> <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path>
                            </g>
                        </g>
                    </svg>
                </i>
                :
                // icon menu bar
                <i onClick={() => setMobileMenu(true)} className={`${styles.menuIcon}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="rgb(0, 175, 239)" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
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
                
               <div className={`${styles.selectLanguage}`}>
                <a href="http://localhost:3000"><img src={ptFlag} width={30} height={30}/></a> 
                <a href={props.engLang}><img src={enFlag} width={30} height={30}/></a>
                <a href={props.espLang}><img src={esFlag} width={30} height={30}/></a>
              </div>

            </ul>



        </nav>
    );
}

export default Navbar;