import { Link, useMatch } from "react-router-dom";
import styles from './LanguageLink.module.css'
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

interface ILanguageLink {

    to: string;
  children: React.ReactNode;
}

const LangaugeLink = (props: ILanguageLink) => {
  const isActive = useMatch(`${props.to}`)
    const { language, setLanguage } = useContext(LanguageContext);
  

  return (
    <li className={isActive ? `${styles.activeLink}` : ""}>
      <Link to={`${props.to}`} > {props.children} </Link>
    </li>
  );

}
export default LangaugeLink;