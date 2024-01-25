import style from "./vino.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import contentfulService from "@/lib/contentfulClient";
import { TypeVineListItem } from "@/lib/contentfulClient";
import Infotab from "@/app/_components/VinoComponents/infotab/Infotab";
/*
- Dodati da se mijenja ikona i boja ovisno o stanju - crvena ili plava.
*/
interface Params{
    vinoId: string;
}

export interface VinoPageParams{
    params: Params;
}

// Vino #{params.vinoId}
const VinoPage = async ({params}: VinoPageParams) => {

    const vino = await contentfulService.getVineById(params.vinoId); // jel ode triba raditi provjeru preko typescripta???
    console.log(vino);
    if(!vino){
        return <div>Product not found!</div>
    }

    return (
        <div className={style.vino}>
            <div className={style.wrapper}>
                <div className={style.data}>
                    <div className={style.slika}></div>
                    <div className={style.rightcol}>
                        <h1>{vino.naziv}</h1>
                        <div className={style.facts}>
                        {Object.entries(vino).map(([key, value]) => (
                            !["id", "slika", "opis", "stanje", "cijena"].includes(key) && (
                                <Infotab key={key} params={{ fact: key, factValue: value }} />
                            )
                        ))}
                        </div>
                        <div className={style.dostupnost}>
                            <span>
                                <FontAwesomeIcon icon={vino.stanje ? faCheck : faXmark} className={style.ikona} style={{color: `${vino.stanje ? "var(--clr-accent-400)" : "var(--clr-error)"}`}}/>
                                {vino.stanje ? "Na zalihi" : "Nema na stanju"}
                            </span>
                            <span className={style.cijena}>{vino.cijena} €</span>
                        </div>
                    </div>
                </div>
                <div className={style.opis}>
                    <h1>Opis</h1>
                    <p>{vino.opis}</p>
                    <Link href="/kontakt" style={{textDecoration: 'none'}}>
                        <button className={style.botun}>Kontaktirajte nas</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VinoPage