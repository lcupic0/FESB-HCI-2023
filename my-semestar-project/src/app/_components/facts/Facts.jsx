import facts from "./facts.module.css"

export default function Facts() {
  return (
    <div className={facts.wrapper}>
        <div className={facts.group}>
            <div className={facts.fact}>
                <p className={facts.number}>30+</p>
                <p className={facts.info}>Godina tradicije</p>
            </div>
            <div className={facts.fact}>
                <p className={facts.number}>4000</p>
                <p className={facts.info}>Litara godišnje</p>
            </div>
            <div className={facts.fact}>
                <p className={facts.number}>11000</p>
                <p className={facts.info}>Vinove loze</p>
            </div>
            <div className={facts.fact}>
                <p className={facts.number}>100%</p>
                <p className={facts.info}>Domaći proizvod</p>
            </div>
        </div>
    </div>
  )
}
