import izbornik from "./izbornik.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Izbornik() {
  return (
    <div className={izbornik.background}>     
    <div className={izbornik.wrapper}>
        <div className={izbornik["even-columns"]}>
            <div className={izbornik.informacije}>
                <div className={izbornik["glavni-info"]}>
                    <span className={izbornik.kategorija}>BIJELA VINA</span>
                    <h2 className={izbornik.ime}>GRAŠEVINA</h2>
                    <span className={izbornik.berba}>Berba 2018.</span>
                    <p className={izbornik.opis}>
                    Graševina, bijela sorta grožđa i istoimenog vina. 
                    Pretpostavlja se da je porijeklom iz srednje Europe, ali se toliko udomaćila kod nas da je mnogi smatraju autohtonom sortom. 
                    U Hrvatskoj je to jedna od najpopularnijih bijelih sorti.
                    </p>
                </div>
                <p className={izbornik.opislarge}>
                Graševina, bijela sorta grožđa i istoimenog vina. 
                Pretpostavlja se da je porijeklom iz srednje Europe, ali se toliko udomaćila kod nas da je mnogi smatraju autohtonom sortom. 
                U Hrvatskoj je to jedna od najpopularnijih bijelih sorti.
                </p>
                <button className={izbornik["read-more"]}>Pročitaj više</button>
            </div>
            
            <div className={izbornik.vino}>
                <FontAwesomeIcon icon={faArrowLeft} className={izbornik.strelica}></FontAwesomeIcon>
                <img src="/images/vino2.png" alt="Vino" />
                <FontAwesomeIcon icon={faArrowRight} className={izbornik.strelica}></FontAwesomeIcon>
            </div>
        </div>
    </div>
    </div>
  )
}
