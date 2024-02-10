"use client"
import style from "./vina.module.css"
import { useEffect, useState } from "react";
import { FC } from "react";
import Link from "next/link";

import contentfulService from "@/lib/contentfulClient";
import { TypeVineListItem } from "@/lib/contentfulClient";

const Vina: FC<any> = () => {
    const [vines, setVines] = useState<TypeVineListItem[]>([]);
    const [filters, setFilters] = useState({
        kvaliteta: "",
        vrsta: "",
    })
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchedVines = await contentfulService.getAllVines();
            setVines(fetchedVines);
        };
        
        fetchData();
    }, []);

    const handleFilterChange = (event: any) => {
        const {name, value} = event.target;
        setFilters(prevFilters => ({...prevFilters, [name]: value}));
    }

    const filteredData = vines.filter(vino => {
        const testKvaliteta = filters.kvaliteta === "" || vino.kvaliteta === filters.kvaliteta;
        const testVrsta = filters.vrsta === "" || vino.vrsta === filters.vrsta;
        return testKvaliteta && testVrsta;
    })

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
                            <input type="radio" name="kvaliteta" value="" className={style.input} onChange={handleFilterChange} checked={filters.kvaliteta === ""}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Kvalitetno" className={style.input} onChange={handleFilterChange} checked={filters.kvaliteta === "Kvalitetno"}/>
                            Kvalitetno
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Vrhunsko"className={style.input} onChange={handleFilterChange} checked={filters.kvaliteta === "Vrhunsko"}/>
                            Vrhunsko
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === ""}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Bijelo" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === "Bijelo"}/>
                            Bijelo
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Crno" className={style.input} onChange={handleFilterChange} checked={filters.vrsta === "Crno"}/>
                            Crno
                        </label>
                    </form>
                </div>
            </div>
            <div className={style.rightcol}>
                {vines ? (
                    filteredData.map((vino) => (
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