interface Params{
    vinoId: string;
}

export interface VinoPageParams{
    params: Params;
}

export default function VinoPage({params}: VinoPageParams) {
    return (
        <div>
            Vino #{params.vinoId}
        </div>
    )
}