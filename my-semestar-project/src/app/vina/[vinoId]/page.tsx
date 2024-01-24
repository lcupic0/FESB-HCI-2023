import style from "./vino.module.css"
import Image from 'next/image'
import vinoSlika from '../../../../public/images/vino6.jpg'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

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

export default function VinoPage({params}: VinoPageParams) {
    return (
        <div className={style.vino}>
            <div className={style.wrapper}>
                <div className={style.data}>
                    <Image src={vinoSlika} className={style.slika} alt="Slika Vina"/>
                    <div className={style.rightcol}>
                        <h1>Sauvignon Blanc</h1>
                        <div className={style.facts}>
                            <div className={style.fact}>
                                <span>Pakiranje:</span>
                                <span>0,75L</span>
                            </div>
                            <div className={style.fact}>
                                <span>Kvaliteta:</span>
                                <span>Vrhunsko</span>
                            </div>
                            <div className={style.fact}>
                                <span>Vrsta:</span>
                                <span>Crno</span>
                            </div>
                            <div className={style.fact}>
                                <span>Sorta:</span>
                                <span>Debitos</span>
                            </div>
                            <div className={style.fact}>
                                <span>Alkohol:</span>
                                <span>13,5 %</span>
                            </div>
                            <div className={style.fact}>
                                <span>Berba:</span>
                                <span>2015</span>
                            </div>
                        </div>
                        <div className={style.dostupnost}>
                            <span><FontAwesomeIcon icon={faCheck} className={style.ikona}/>Na zalihi</span>
                            <span className={style.cijena}>10.42 €</span>
                        </div>
                    </div>
                </div>
                <div className={style.opis}>
                    <h1>Opis</h1>
                    <p>O podrijetlu ove sorte dugo je postojalo više hipoteza. Najčešće se tvrdilo da su ga davno, za potrebe „prve“ obnove vinograda korčulanski pomorci s Istoka donijeli na svoj otok. Ovu hipotezu su potvrđivala i ispitivanja koja su pokazala da Pošip po svojim morfološkim karakteristikama pripada ekološko-geografskoj skupini Conv. Occidentalis. No tek su najnovija DNK ispitivanja otkrila da je ta „orijentalna“ morfološka svojstva Pošip samo naslijedio, a da je on uistinu pravi i autohtoni Korčulanin. </p>
                    <Link href="/kontakt" style={{textDecoration: 'none'}}>
                        <button className={style.botun}>Kontaktirajte nas</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}