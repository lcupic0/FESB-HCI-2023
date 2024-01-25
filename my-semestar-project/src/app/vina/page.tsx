"use client"
import style from "./vina.module.css"
import { useEffect, useState } from "react";
import { FC } from "react";
import Link from "next/link";

import contentfulService from "@/lib/contentfulClient";
import { TypeVineListItem } from "@/lib/contentfulClient";

const Vina: FC<any> = () => {
    const [vines, setVines] = useState<TypeVineListItem[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchedVines = await contentfulService.getAllVines();
            setVines(fetchedVines);
        };
        
        fetchData();
        console.log(vines);
    }, []);

    if(!vines){
        return <div>Products not found!</div>
    }

    return(
        <div className={style.vina}>
            <div className={style.leftcol}>
                <div className={style.odabir}>
                    <p>Kvaliteta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="" className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Kvalitetno" className={style.input}/>
                            Kvalitetno
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Vrhunsko"className={style.input}/>
                            Vrhunsko
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="" className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Bijelo" className={style.input}/>
                            Bijelo
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Crno" className={style.input}/>
                            Crno
                        </label>
                    </form>
                </div>
            </div>
            <div className={style.rightcol}>
                {vines ? (
                    vines.map((vino) => (
                        <Link href={`vina/${vino.id}`} style={{textDecoration: 'none', color: 'unset'}} key={vino.id} >
                            <div className={style.card} key={vino.id} style={{backgroundImage: `url("${vino.slika}")`}}>
                                {vino.naziv}
                            </div>
                        </Link>
                    ))
                ) : (
                    <div>Loading...</div>
                )}               
            </div>
        </div>
    )
}

export default Vina;