"use client"
import { useEffect, useState } from "react";
import style from "./vina.module.css"

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

export default function Vina() {
    const [vines, setVines] = useState<Vino[]>([]);
    const [filters, setFilters] = useState({
        kvaliteta: "",
        vrsta: ""
    });

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:5001/vina")
            .then((res) => res.json())
            .then((data) => setVines(data))
            .catch((error) => console.log(error));
        }    
        fetchData();

        
    }, []);

    const handleFilterChange = (event: any) => {
        const {name, value} = event.target;

        setFilters(prevFilters => ({...filters, [name]: value}))
        // console.log(filters) --> Ovo mi ne ispise nove filtere a ne razumim iz koje razloga. Cak i kad setTimeout stavim ne ispise ga odma.
    }

    const filteredData = vines.filter(vino => {
        const testKvaliteta = filters.kvaliteta === "" || filters.kvaliteta === vino.kvaliteta;
        const testVrsta = filters.vrsta === "" || filters.vrsta === vino.vrsta;

        return testKvaliteta && testVrsta;
    });

    return(
        <div className={style.vina}>
            <div className={style.leftcol}>
                <div className={style.odabir}>
                    <p>Kvaliteta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="" checked={filters.kvaliteta === ""} onChange={handleFilterChange} className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Kvalitetno" checked={filters.kvaliteta === "Kvalitetno"} onChange={handleFilterChange} className={style.input}/>
                            Kvalitetno
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="kvaliteta" value="Vrhunsko" checked={filters.kvaliteta === "Vrhunsko"} onChange={handleFilterChange} className={style.input}/>
                            Vrhunsko
                        </label>
                    </form>
                </div>
                <div className={style.odabir}>
                    <p>Vrsta:</p>
                    <form className={style.forma}>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="" checked={filters.vrsta === ""} onChange={handleFilterChange} className={style.input}/>
                            Sve
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Bijelo" checked={filters.vrsta === "Bijelo"} onChange={handleFilterChange} className={style.input}/>
                            Bijelo
                        </label>
                        <label className={style.label}>
                            <input type="radio" name="vrsta" value="Crno" checked={filters.vrsta === "Crno"} onChange={handleFilterChange} className={style.input}/>
                            Crno
                        </label>
                    </form>
                </div>
            </div>
            <div className={style.rightcol}>
                {vines ? (
                    filteredData.map((vino) => (
                        <div className={style.card} key={vino.id} style={{backgroundImage: `url("/images/${vino.image}")`}}>
                            {vino.naziv}
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}               
            </div>
        </div>
    )
}