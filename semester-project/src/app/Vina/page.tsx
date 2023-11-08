import Link from "next/link";

export interface Wine {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getWines = async (): Promise<Wine[]> => {
    const data = await fetch(`${BASE_API_URL}/posts?_limit=5`);
    return data.json();
};

async function Vina() {
    const wines = await getWines();
    console.log(wines);

    return (
        <div className="vina">
            <ul className="flex flex-col gap-10">
                {wines.map((wine) => (
                    <li key={wine.id}>
                        <Link href={`vina/${wine.id}`}>
                            Wine {wine.id}: {wine.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Vina;
