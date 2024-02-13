"use client"
import style from "./filter.module.css"

interface FilterInput{
    value: string;
    ime: string;
}

interface Filter{
    naziv: string;
    inputs: FilterInput[];
}

interface Props{
    filter: Filter;
    handleFilterChange: (event: any) => void;
    filters: any;
}

const Filter: React.FC<Props> = ({filter, handleFilterChange}) => {

    return(
        <div className={style.odabir}>
            <p>{filter.naziv}:</p>
            <form className={style.forma}>
                {
                    filter.inputs.map((input, i) => (
                        <label className={style.label} key={i}>
                            <input type="radio" name={filter.naziv} value={input.value} className={style.input} onChange={handleFilterChange} />
                            {input.ime}
                        </label>
                    ))
                }
            </form>
        </div>
    )
}

export default Filter