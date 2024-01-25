import style from "./infotab.module.css";

interface Params{
    fact: string;
    factValue: string | number;
}

export interface InfotabParams{
    params: Params;
}

const Infotab = ({params}: InfotabParams) => {
    const {fact, factValue} = params;

    return (
        <div className={style.wrapper}>
            <span>{fact}:</span>
            <span>{factValue}</span>
        </div>
    )
}

export default Infotab