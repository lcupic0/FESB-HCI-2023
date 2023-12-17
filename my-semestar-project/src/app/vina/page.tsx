import style from "./vina.module.css"

export default function Vina() {
    return(
        <div className={style.vina}>
            <div className={style.leftcol}>
                <div className={style.odabir}>
                    <p>Kvaliteta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Kvalitetno
                        </label>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Vrhunsko
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Crno
                        </label>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Bijelo
                        </label>
                        <label className={style.label}>
                            <input type="radio" className={style.input}/>
                            Rose
                        </label>
                    </form>
                </div>
            </div>
            <div className={style.rightcol}>
                <div className={style.card}>
                    Medo
                </div>
                <div className={style.card}>
                    Brundo
                </div>
                <div className={style.card}>
                    Ludo
                </div>
                <div className={style.card}>
                    Zujo
                </div>
            </div>
        </div>
    )
}