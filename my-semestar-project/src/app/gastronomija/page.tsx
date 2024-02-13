"use client"
import style from "./gastronomija.module.css"
import { FC } from "react";
import Link from "next/link";

const Gastronomija: FC<any> = () => {

    return(
        <div className={style.gastronomija}>
            <div className={style.wrapper}>
                <h1>Hrana</h1>
                <h1>stiže</h1>
                <h1>uskoro!</h1>
                <p>Stranica gastronomske ponude je trenutno u izradi...</p>
                <Link href="/kontakt" style={{textDecoration: 'none'}}>
                    <button className={style.button}>Kontakt</button>
                </Link>
            </div>
        </div>
    )
}

export default Gastronomija;