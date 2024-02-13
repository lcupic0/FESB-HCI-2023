"use client"
import style from "./vina.module.css"
import { useEffect, useState } from "react";
import { FC } from "react";
import Link from "next/link";

import contentfulService from "@/lib/contentfulClient";
import { TypeVineListItem } from "@/lib/contentfulClient";
import Filter from "@/components/filter/filter";

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
    
    const filterKvaliteta = {
        naziv: "kvaliteta",
        inputs: [
            {value: "", ime: "Sve"},
            {value: "Kvalitetno", ime: "Kvalitetno"},
            {value: "Vrhunsko", ime: "Vrhunsko"},
        ]
    }

    const filterVrsta = {
        naziv: "vrsta",
        inputs: [
            {value: "", ime: "Sve"},
            {value: "Bijelo", ime: "Bijelo"},
            {value: "Crno", ime: "Crno"},
        ]
    }

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
                <Filter filter={filterKvaliteta} handleFilterChange={handleFilterChange} filters={filters} />
                <Filter filter={filterVrsta} handleFilterChange={handleFilterChange} filters={filters} />
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