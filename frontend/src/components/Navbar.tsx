import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useEffect, useRef, useState } from 'react'

interface INavbarProps {
    home: string;
    about: string;
    container: string;
    contact: string;
}

const Navbar = (props: INavbarProps) => {
     const [isActive, setIsActive] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const toggleActive = () => {
      if(!isActive) {
        window.onbeforeunload = null;
        setIsActive(true);
      }
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

      const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
    
        const targetId = href.replace(/.*#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };

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
                    <a href="#home" onClick={handleScroll}> {props.home} </a>
                </li>
                <li>
                    <a href="#about"  onClick={handleScroll}>{props.about}</a>

                </li>
                <li>
                    <a href="#incoterms"  onClick={handleScroll}> Incoterms </a>
                </li>
                <li>
                    <a href="#conteiners"  onClick={handleScroll}>{props.container}</a>
                </li>
                <li>
                    <a href="#contact"  onClick={handleScroll}>{props.contact}</a>
                </li>

                <li className={`${styles.listLanguage}`}>
                    <a href='/' className={!isActive ? styles.activeLink : ''} onClick={() =>  toggleActive() }><img src={`./assets/brazil-flag.png`} width={35} height={35} /></a>

                     <a href='/en' className={!isActive ? styles.activeLink : ''} onClick={() =>  toggleActive() }><img src={`./assets/english-flag.png`} width={35} height={35} /></a>

                    <a href='/es' className={!isActive ? styles.activeLink : ''} onClick={() => toggleActive()}><img src={`./assets/spanish-flag.png`} width={35} height={35} /></a>
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