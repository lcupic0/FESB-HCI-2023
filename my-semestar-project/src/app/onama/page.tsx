"use client"
import style from "./onama.module.css"
import { Swiper, SwiperSlide} from "swiper/react"
import { EffectFade } from "swiper/modules"
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/effect-fade';
import slika1 from "../../../public/images/bilogrozde.jpg"
import slika2 from "../../../public/images/crnogrozde.jpg"
import slika3 from "../../../public/images/bacve.jpg"
import slika4 from "../../../public/images/vinograd.jpg"

export default function Onama() {

    const team = [
        {
            ime: "Ante Antić",
            pozicija: "Vlasnik",
            slika: "/images/avatars/bezos.jpg"
        },
        {
            ime: "Ivo Ivić",
            pozicija: "Prodaja",
            slika: "/images/avatars/rainnwilson.jpg"
        },
        {
            ime: "Marko Markić",
            pozicija: "Voditelj vinarije",
            slika: "/images/avatars/billgates.jpg"
        },
        {
            ime: "Mladen Grdović",
            pozicija: "Enolog",
            slika: "/images/avatars/markzuck.jpg"
        },
        {
            ime: "Milorad Milic",
            pozicija: "Prerada mesa",
            slika: "/images/avatars/tonysoprano.jpg"
        },
    ]

    return (
        <div className={style.onama}>
            <div className={style.header}></div>
            <div className={style.content}>
                <div className={style.uvod}>
                    <div className={style.naslov}>
                        <div>Dobrodošli u</div>
                        <h1>VINARIJU NAŠ KUTAK</h1>
                    </div>
                    <div className={style.opis}>
                        <p>
                            Početak novog tisućljeća za obitelj Krolo bio je ujedno i početak planiranja povratka zemlji svojih predaka. Danas, desetljećima kasnije, to područje oštre kontinentalne klime dom je vinima punog tijela, prepoznate elegancije i jedinstvene svježine.
                        </p>
                        <p>
                            Vinogradarstvo je u obitelji Krolo tradicija stara preko 300 godina no Dražen Krolo jedini je potomak koji je uz duboko poštovanje prema naslijeđu, vinu posvetio svoj privatni i poslovni život, zarazivši tom strašću i ostatak obitelji.
                        </p>
                    </div>
                </div>
                <div className={style.prozorcic}>
                    <div className={style["left-col"]}>
                        <div className={style.naslov}>
                            <div>LOKACIJA</div>
                            <h1>NAŠEG KUTKA</h1>
                        </div>
                        <p>
                            Na više od šest hektara zemlje, Krolini vinogradi smješteni su na području Strmendolca, maloga mjesta u Dalmatinskoj zagori. Udaljeno je 30-tak kilometara sjeverno od Splita te je zadnja geografska linija uzgajanja vinove loze. Zbog nadmorske visine te oštre kontinentalne klime koju formiraju planinski lanci kojima je područje okruženo, tijekom cijele godine noćne temperature su relativno niske. Na više od šest hektara zemlje, Krolini vinogradi smješteni su na području Strmendolca, maloga mjesta u Dalmatinskoj zagori. Udaljeno je 30-tak kilometara sjeverno od Splita te je zadnja geografska linija uzgajanja vinove loze.
                        </p>
                    </div>
                    <div className={style["right-col"]}></div>
                </div>
                <div className={style.tim}>
                    <div className={style.podnaslov}>
                        <div>UPOZNAJTE</div>
                        <h1>NAŠ TIM</h1>
                    </div>
                    <div className={style.list}>
                        {team.map(el => (
                            <div className={style["list-item"]} key={el.ime}>
                                <div className={style.avatar} style={{ backgroundImage: `url("${el.slika}")` }}></div>
                                <div className={style.opisavatara}>
                                    <span>{el.ime}</span>
                                    <span>{el.pozicija}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.photovideo}>
                    <div className={style.video}>
                        <div>
                            <h1>PROMO VIDEO</h1>
                            <iframe src="https://www.youtube.com/embed/7gquYRxLMFI?si=qaqF8H2u4yGc3y9C" className={style.videoeditor}>
                            </iframe>
                        </div>
                    </div>
                    <div className={style.photo}>
                        <div>
                            <h1>GALERIJA</h1>
                            <Swiper
                                modules={[EffectFade]}
                                speed={1500}
                                effect="fade"
                                followFinger={true}
                                className={style.swiper}
                            >
                                <SwiperSlide>
                                    <Image src={slika1} alt="Vino" className={style.slika} priority />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slika2} alt="Vino" className={style.slika} priority />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slika3} alt="Vino" className={style.slika} priority />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={slika4} alt="Vino" className={style.slika} priority />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}