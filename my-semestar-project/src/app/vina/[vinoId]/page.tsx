import style from "./vino.module.css"
import Image from 'next/image'
import vinoSlika from '../../../../public/images/vino6.jpg'

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
            <div className={style.data}>
                <Image src={vinoSlika} className={style.slika} alt="Slika Vina"/>
                <div className={style.rightcol}>
                    <h1>Sauvignon Blanc</h1>
                    <div className={style.facts}>
                        <div className={style.fact}>
                            <span>Pakiranje:</span>
                            <span>0,75L</span>
                        </div>
                        <div className={style.dostupnost}>
                            <span>Na zalihama</span>
                            <span>10.42 €</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.opis}>
                <p>Opis...</p>
                <button>Kontaktirajte nas</button>
            </div>
        </div>
    )
}