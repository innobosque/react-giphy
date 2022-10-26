import { GifSearchedItem } from "./GifSearchedItem";

export const GifMapSearch = ({ searches }) => {

    return (
        <section>
            <h2 className="text-center text-2xl font-bold">{!!searches.length && 'Resultados'}</h2>
            {
                searches.map(search => (
                    <div className="grid grid-cols-5 gap-1" key={search.id} >
                        <h3 className="col-span-5 p-5 uppercase">{search.category}</h3>
                        <GifSearchedItem search={search} />
                    </div>
                ))
            }

        </section>
    )
}