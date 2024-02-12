"use client"
import izbornik from "./izbornik.module.css"
import contentfulService from "@/lib/contentfulClient";
import { TypeVineListItem } from "@/lib/contentfulClient";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import vino2 from "../../../../public/images/vino2.png"
import Image from 'next/image'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from "react";

export default function Izbornik() {
    const [vines, setVines] = useState<TypeVineListItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedVines = await contentfulService.getAllVines();
            setVines(fetchedVines);
        };

        fetchData();
    }, []);

  return (
    <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        navigation
        speed={1000}
        effect="coverflow"
        followFinger={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
        }}
    >
    {vines.map((vino)=> (
    <SwiperSlide key={vino.id}>
    <div className={izbornik.background}>     
        <div className={izbornik.mywrapper}>
            <div className={izbornik["even-columns"]}>
                <div className={izbornik.informacije}>
                    <div className={izbornik["glavni-info"]}>
                        <span className={izbornik.kategorija}>{vino.vrsta} vino</span>
                        <h2 className={izbornik.ime}>{vino.naziv}</h2>
                        <span className={izbornik.berba}>Berba {vino.berba}.</span>
                        <p className={izbornik.opis}>
                        {vino.opis}
                        </p>
                    </div>
                    <p className={izbornik.opislarge}>
                    {vino.opis}
                    </p>
                    <Link href="/vina" style={{textDecoration: 'none'}}>
                        <button className={izbornik["read-more"]}>Pročitaj više</button>
                    </Link>
                </div>

                <div className={izbornik.vino}>
                    <FontAwesomeIcon icon={faArrowLeft} className={`${izbornik.strelica}`}></FontAwesomeIcon>
                    <Image src={vino2} alt="Vino" className={izbornik.slika} priority />
                    <FontAwesomeIcon icon={faArrowRight} className={`${izbornik.strelica}`}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    </div>
    </SwiperSlide>
    ))}
    </Swiper>
  )
}
