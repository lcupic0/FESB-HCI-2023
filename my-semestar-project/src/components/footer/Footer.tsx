import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import footer from "./footer.module.css"; 

function Footer() {
  return (
    <div className={`${footer.wrapper} | bg-color-900`}>
        <h2 className={footer.title}>NAŠ KUTAK</h2>
        <p className={footer.quote}>100% domaći proizvod stvoren na obiteljskom poljoprivrednom gospodarstvu!</p>
        <div className={footer.izbornik}>
          <span className={footer.link}>POČETAK</span>
          <span className={footer.link}>VINA</span>
          <span className={footer.link}>O NAMA</span>
          <span className={footer.link}>GASTRONOMIJA</span>
        </div>
        <div className={footer.info}>
          <span className={footer.potpis}>&copy; 2023. HCI - Luka Čupić</span>
          <div className={footer["drustvene-mreze"]}>
            <FontAwesomeIcon icon={faInstagram} className={footer.icon}/>
            <FontAwesomeIcon icon={faFacebook} className={footer.icon} />
          </div>
        </div>
    </div>
  )
}

export default Footer
