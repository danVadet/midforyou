import styles from './Navbar.module.css'
import { useContext, useEffect, useRef, useState } from 'react'
import LangaugeLink from './LanguageLink';

interface INavbarProps {
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void

  home: string;
  about: string;
  container: string;
  contact: string;
  brazilPorts: string;

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

  const navItems: NavItems[] = [

    { id: 1,  ref: props.homeRef , name: `${props.home}` },
    { id: 2, ref: props.aboutRef, name: `${props.about}` },
    { id: 3,  ref: props.incotermsRef, name: 'Incoterms' },
    {id: 4, ref: props.conteinersRef, name: `${props.container}` },
    {id: 5,  ref: props.mapRef, name: `${props.brazilPorts}`,},
    {id: 6, ref: props.contactRef, name: `${props.contact}` },

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
        <img  src={`logo.png`} alt="" height={40} />
      </div>
      <ul className={mobileMenu ? '' : `${styles.hideMobileMenu}`}>

        {navItems.map((navItem, index) => (
          <li key={index}>
            <a className={activeLink === index + 1 ? `${styles.activeLink}` : ""} onClick={() => handleLinkClick(index + 1)}>{navItem.name}</a>
          </li>
        ))}

         <LangaugeLink to='/'> <img src={`./assets/brazil-flag.png`} width={35} height={35} /> </LangaugeLink>
         <LangaugeLink to='/en'>  <img src={`./assets/english-flag.png`} width={35} height={35} /></LangaugeLink>
         <LangaugeLink to='/es'> <img src={`./assets/spanish-flag.png`} width={35} height={35} /> </LangaugeLink>
      </ul>
    </nav>
  );

}

export default Navbar;