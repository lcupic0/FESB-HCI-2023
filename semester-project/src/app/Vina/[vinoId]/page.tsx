import { Wine } from "../page";

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

interface Params {
    vinoId: string;
}

const getWine = async(id: string): Promise<Wine> => {
    const data = await fetch(`${BASE_API_URL}/posts/${id}`);
    // console.log(data.json());
    return data.json();
}

async function Vino({params}: {params: Params}) {
    const vino = await getWine(params.vinoId);

    return (
        <div className="vino">
            <h1>
                Odabrano vino: {vino.title}
            </h1>
            <p>
                {vino.body}
            </p>
        </div>
    )
}

export default Vino;