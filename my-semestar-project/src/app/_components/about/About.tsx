import about from "./about.module.css"
import Image from 'next/image'

export default function About() {
  return (
    <div className={about.background}>
    <div className={about.wrapper}>
        <div className={about.post}>
          <h1 className={about.naslov}>O NAMA</h1>
          <p>
            Dalmacija i Šibenik s okolicom puni su prirodnih ljepota koje oduzimaju dah, poput brojnih i slikovitih vinograda koji krase osunčane obronke. Vino se ovdje radi već dvije tisuće godina, o čemu svjedoče testamenti iz davnih vremena, neki čak i iz doba starog Rima. Tri su takva testamenta. Prvi je hipokaust iz 2. stoljeća, grijana prostorija koju su stari Rimljani često koristili za dozrijevanje obranog grožđa. Drugi su 102 antičke amfore korištene za prijevoz vina i maslinovog ulja, pronađene na dnu Jadranskog mora kraj Šibenika. A treći je Machina Nova, preša za grožđe koju je u 16. stoljeću izumio poznati izumitelj Faust Vrančić, rodom iz okolice Šibenika.
          </p>
          <p>
            Naša je kušaonica smještena u malom mjestu Jadrtovcu, među brežuljcima s kojih se pruža pogled na Jadransko more i šibenski arhipelag, i rado primamo posjete – pozvani ste! Naš je stručni enolog, autoritet za dalmatinska vina, uz pomoć inovativne tehnologije, stvorio bogata i kompleksna vina koja vas svojim opojnim okusom približavaju prirodi
          </p>
          <img src="/images/vinograd.jpg" alt="Vinograd"/>
          <div className={about["quad-images"]}>
            <img src="/images/crnogrozde.jpg" alt=""/>
            <img src="/images/vinograd.jpg" alt="" />
            <img src="/images/drnis5.jpg" alt="" />
            <img src="/images/bilogrozde.jpg" alt="" />
          </div>
        </div>
        <div className={about.post}>
          <h1 className={about.naslov}>GASTRONOMIJA</h1>
          <p>Dalmacija i Šibenik s okolicom puni su prirodnih ljepota koje oduzimaju dah, poput brojnih i slikovitih vinograda koji krase osunčane obronke. Vino se ovdje radi već dvije tisuće godina, o čemu svjedoče testamenti iz davnih vremena, neki čak i iz doba starog Rima. Tri su takva testamenta. Prvi je hipokaust iz 2. stoljeća, grijana prostorija koju su stari Rimljani često koristili za dozrijevanje obranog grožđa. Drugi su 102 antičke amfore korištene za prijevoz vina i maslinovog ulja, pronađene na dnu Jadranskog mora kraj Šibenika. A treći je Machina Nova, preša za grožđe koju je u 16. stoljeću izumio poznati izumitelj Faust Vrančić, rodom iz okolice Šibenika.</p>
          <div className={about["quad-images"]}>
            <img src="/images/crnogrozde.jpg" alt=""/>
            <img src="/images/vinograd.jpg" alt="" />
            <img src="/images/drnis5.jpg" alt="" />
            <img src="/images/bilogrozde.jpg" alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}