import styles from './Navbar.module.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { LanguageContext } from '../Context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import  multiLang  from '../multiLang.json';

interface INavbarProps {
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void

  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  incotermsRef: React.RefObject<HTMLDivElement>;
  conteinersRef: React.RefObject<HTMLDivElement>;
  mapRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

interface NavItems {
  id: number
  ref: React.RefObject<HTMLDivElement>;
  name: string
}


const Navbar = (props: INavbarProps) => {

  const { language, setLanguage } = useContext(LanguageContext);

  const navItems: NavItems[] = [

    { id: 1,  ref: props.homeRef , name: `${(language === "pt" && `${multiLang.pt.home}`) || (language === "en"  && `${multiLang.en.home}`) ||( language === "es" && `${multiLang.es.home}`)}` },
    { id: 2, ref: props.aboutRef, name: `${(language === "pt" && `${multiLang.pt.about}`) || (language === "en"  && `${multiLang.en.about}`) ||( language === "es" && `${multiLang.es.about}`)}` },
    { id: 3,  ref: props.incotermsRef, name: 'Incoterms' },
    {id: 4, ref: props.conteinersRef, name: `${(language === "pt" && `${multiLang.pt.container}`) || (language === "en"  && `${multiLang.en.container}`) ||( language === "es" && `${multiLang.es.container}`)}` },
    {id: 5,  ref: props.mapRef, name: "Portos do Brasil",},
    {id: 6, ref: props.contactRef, name: `${(language === "pt" && `${multiLang.pt.contact}`) || (language === "en"  && `${multiLang.en.contact}`) ||( language === "es" && `${multiLang.es.contact}`)}` },

  ]

  const [activeLink, setActiveLink] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (index: number) => {
    setActiveLink(index)
    switch (index) {
      case 1:
        props.scrollToSection(props.homeRef)
        break
      case 2:
        props.scrollToSection(props.aboutRef)
        break
      case 3:
        props.scrollToSection(props.incotermsRef)
        break
      case 4:
        props.scrollToSection(props.conteinersRef)
      break
      case 5:
        props.scrollToSection(props.mapRef)
        break
      case 6:
        props.scrollToSection(props.contactRef)
        break
      default:
        break
    }
  }

  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        switch (entry.target) {
          case props.homeRef.current:
            setActiveLink(1)
            break
          case props.aboutRef.current:
            setActiveLink(2)
            break
          case props.incotermsRef.current:
            setActiveLink(3)
            break
          case props.conteinersRef.current:
            setActiveLink(4)
            break
          case props.mapRef.current:
            setActiveLink(5)
           break
          case props.contactRef.current:
            setActiveLink(6)
            break
          default:
            break
        }
      }
  }, {
    threshold: 0.25,
  })

  {navItems.map((navItem) => {
    if(navItem.ref.current)
       observer.observe(navItem.ref.current)
  })}

    return () => {
      {navItems.map((navItem) => {
        if(navItem.ref.current)
           observer.unobserve(navItem.ref.current)
      })}
    }
  }, [props.homeRef, props.aboutRef, props.incotermsRef, props.conteinersRef, props.contactRef])

  useEffect(() => {
    
    const handleOutSideClick = (event: { target: any }) => {
      if (!navRef.current?.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("touchstart", handleOutSideClick);

    return () => {
      window.removeEventListener("touchstart", handleOutSideClick);
    };
  }, [navRef]);

  return (
    <nav>
      <div ref={navRef} className={`${styles.hamburger} ${mobileMenu ? styles.active : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>

      <div className={`${styles.navLogoContainer}`}>
        <img src={`logo.png`} alt="" height={40} />
      </div>
      <ul className={mobileMenu ? '' : `${styles.hideMobileMenu}`}>

        {navItems.map((navItem, index) => (
          <li key={index}>
            <a className={activeLink === index + 1 ? `${styles.activeLink}` : ""} onClick={() => handleLinkClick(index + 1)}>{navItem.name}</a>
          </li>
        ))}
        <li>
          <LanguageSelector setLanguage={setLanguage}/>
        </li>
      </ul>
    </nav>
  );

}

export default Navbar;