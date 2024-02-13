import about from './about.module.css'
import Image from 'next/image'
import vinograd from '../../../../public/images/vinograd.jpg'
import crnoGrozde from '../../../../public/images/crnogrozde.jpg'
import drnis5 from '../../../../public/images/drnis5.jpg'
import bijeloGrozde from '../../../../public/images/bilogrozde.jpg'
// Ovaj način importa slika se naziva Local Images. Next.js will automatically determine the width and height of your image based on the imported file.

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
          <figure className={about.figure}>
          <Image src={vinograd} className={about.slika} alt="Vinograd" />
          </figure>
          <div className={about["quad-images"]}>
            <figure className={about.figure}>
              <Image src={crnoGrozde} className={about.slika} alt="Crno Grozde" />
            </figure>
            <figure className={about.figure}>
              <Image src={vinograd} className={about.slika} alt="Vinograd" />
            </figure>
            <figure className={about.figure}>
              <Image src={drnis5} className={about.slika} alt="Grad Drnis" />
            </figure>
            <figure className={about.figure}>
              <Image src={bijeloGrozde} className={about.slika} alt="Bijelo Grozde" />
            </figure>
          </div>
        </div>
        <div className={about.post}>
          <h1 className={about.naslov}>GASTRONOMIJA</h1>
          <p>Dalmacija i Šibenik s okolicom puni su prirodnih ljepota koje oduzimaju dah, poput brojnih i slikovitih vinograda koji krase osunčane obronke. Vino se ovdje radi već dvije tisuće godina, o čemu svjedoče testamenti iz davnih vremena, neki čak i iz doba starog Rima. Tri su takva testamenta. Prvi je hipokaust iz 2. stoljeća, grijana prostorija koju su stari Rimljani često koristili za dozrijevanje obranog grožđa. Drugi su 102 antičke amfore korištene za prijevoz vina i maslinovog ulja, pronađene na dnu Jadranskog mora kraj Šibenika. A treći je Machina Nova, preša za grožđe koju je u 16. stoljeću izumio poznati izumitelj Faust Vrančić, rodom iz okolice Šibenika.</p>
          <div className={about["quad-images"]}>
          <figure className={about.figure}>
              <Image src={crnoGrozde} className={about.slika} alt="Crno Grozde" />
            </figure>
            <figure className={about.figure}>
              <Image src={vinograd} className={about.slika} alt="Vinograd" />
            </figure>
            <figure className={about.figure}>
              <Image src={drnis5} className={about.slika} alt="Grad Drnis" />
            </figure>
            <figure className={about.figure}>
              <Image src={bijeloGrozde} className={about.slika} alt="Bijelo Grozde" />
            </figure>
          </div>
        </div>
    </div>
    </div>
  )
}