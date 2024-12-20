import styles from './Navbar.module.css'
import { useEffect, useRef, useState } from 'react'

interface INavbarProps {
    home: string;
    about: string;
    container: string;
    contact: string;
}

const Navbar = (props: INavbarProps) => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const selectLang = (lang: string) => {
        window.onbeforeunload = null;
        window.location.href = `${lang}`
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        })
    }


    useEffect(() => {


        const handleOutSideClick = (event: { target: any }) => {
          if (!ref.current?.contains(event.target)) {
            setMobileMenu(false);
          }
        };
    
        window.addEventListener("touchstart", handleOutSideClick);
    
        return () => {
          window.removeEventListener("touchstart", handleOutSideClick);
        };
      }, [ref]);

    return (
        <nav>

            <div ref={ref} className={`${styles.hamburger} ${mobileMenu ? styles.active : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
            </div>

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
                    <a onClick={() => selectLang("/")}><img src={`./assets/brazil-flag.png`} width={35} height={35} /></a>
                    <a onClick={() => selectLang("/en")}><img src={`./assets/english-flag.png`} width={35} height={35} /></a>
                    <a onClick={() => selectLang("/es")}><img src={`./assets/spanish-flag.png`} width={35} height={35} /></a>
                </li>

            </ul>
            <style>{`
        
          html {
            scroll-behavior: smooth;
          }

        `}</style>
        </nav>
    );

}

export default Navbar;