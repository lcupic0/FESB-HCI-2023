import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons"
import heading from "./heading.module.css"

export default function Heading(){
  return (
    <div className={heading.section}>
        <div className={heading.content}>
            <h1 className={heading.title}>NAŠ KUTAK</h1>
            <p className={heading.desc}>Tajanstveni i šarmantni kutak za prave zaljubljenike u vino i gurmanske delicije. </p>
            <p className={heading.desc}>
              Ovaj izvanredni ugostiteljski objekt smješten je u idiličnom gradiću Vinogradni Grad, gdje se susreću vinska kultura i kulinarska stručnost. S autentičnom atmosferom i impresivnom kartom vina, Naš kutak poziva vas na putovanje koje će zadovoljiti i najizbirljivija nepca.
            </p>
            <FontAwesomeIcon icon={faAnglesDown} className={heading["arrow-down"]}></FontAwesomeIcon>
            <button className={`${heading.button} is-hidden`}>VIŠE</button>
        </div>
    </div>
  )
}