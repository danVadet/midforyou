import { useContext, useState } from 'react'
import { LanguageSelector } from './LanguageSelector';
import { NavContext } from '../contexts/NavContext';
import { LanguageContext } from '../contexts/LanguageContext';
import multiLang from "../multiLang.json";
import styles from './Navbar.module.css'
import { INavLang } from '../models/INavLang';

export interface IHeaderProps {
   navLangs: INavLang []
}

export const Navbar = (props: IHeaderProps) => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const { activeLinkId } = useContext(NavContext);
  const { language } = useContext(LanguageContext);


  const navLinks = [
       `${(language === "pt" && multiLang.pt.navItem.home) || (language === "en" && multiLang.en.navItem.home) || (language === "es" && multiLang.es.navItem.home)}`, 
       `${(language === "pt" && multiLang.pt.navItem.services) || (language === "en" && multiLang.en.navItem.services) || (language === "es" && multiLang.es.navItem.services)}`, 
       `${(language === "pt" && multiLang.pt.navItem.incoterms) || (language === "en" && multiLang.en.navItem.incoterms) || (language === "es" && multiLang.es.navItem.incoterms)}`, 
       `${(language === "pt" && multiLang.pt.navItem.cbmCalculator) || (language === "en" && multiLang.en.navItem.cbmCalculator ) || (language === "es" && multiLang.es.navItem.cbmCalculator)}`, 
       `${(language === "pt" && multiLang.pt.navItem.brazilPorts) || (language === "en" && multiLang.en.navItem.brazilPorts || (language === "es" && multiLang.es.navItem.brazilPorts))}`, 
       `${(language === "pt" && multiLang.pt.navItem.contact) || (language === "en" && multiLang.en.navItem.contact || (language === "es" && multiLang.es.navItem.contact))}`
  ];

  const renderNavLink = (content: string, index: number ) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      const element = document.getElementById(scrollToId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    return (
      <li key={index}>
        <a onClick={handleClickNav} className={activeLinkId === content ? styles.activeClass : ""}>{content}</a>
      </li>
    );
  }

  return (
    <header className={styles.header}>
      <nav>
        <div className={`${styles.navLogoContainer}`}>
          <img src={"../assets/logo.png"} alt="" height={40} />
        </div>

        <ul className={mobileMenu ? '' : `${styles.hideMobileMenu}`}>
          {navLinks.map((nav, index) => renderNavLink(nav, index))}
          <LanguageSelector navLangs={props.navLangs}  />
        </ul>
      </nav>

      <div className={`${styles.hamburger} ${mobileMenu ? styles.active : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </header>
  );
}