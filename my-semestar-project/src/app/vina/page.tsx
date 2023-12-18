import style from "./vina.module.css"

/*
{
    "id": 1,
    "naziv": "Pošip",
    "vrsta": "Bijelo",
    "kvaliteta": "Kvalitetno",
    "berba": 2015,
    "alkohol": "13.5%",
    "stanje": "true",
    "image": "vino1.jpg"
}
*/

export interface Vino {
    id: number;
    naziv: string;
    vrsta: string;
    kvaliteta: string;
    berba: number;
    alkohol: string;
    stanje: string;
    image: string;
}

// const getWines = async (): Promise<Vino[]> => {
//     const data = await fetch(`http://localhost:5001/vina`);
//     return data.json();
// }

export default async function Vina() {
    // const vina = await getWines();
    // console.log(vina);

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
                    Pošip
                </div>
                <div className={style.card}>
                    Maraština
                </div>
                <div className={style.card}>
                    Debit
                </div>
                <div className={style.card}>
                    Merlot
                </div>
                <div className={style.card}>
                    Plavina
                </div>
                <div className={style.card}>
                    Plavac
                </div>
                
            </div>
        </div>
    )
}

/*
<div className={style.rightcol}>
    {vina.map((vino) => (
        <div className={style.card} key={vino.id}>
            {vino.naziv}
        </div>
    ))}
</div>
*/