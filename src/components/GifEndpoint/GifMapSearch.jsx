import { GifItem } from "./GifItem";

export const GifMapSearch = ({ categories }) => {

    return (
        <section>
            <h2 className="text-center text-2xl font-bold">{!!categories.length && 'Resultados'}</h2>
            {
                categories.map(category => (
                    <div className="grid grid-cols-5 gap-5" key={category} >
                        <h3 className="col-span-5 p-5 uppercase">{category}</h3>
                        <GifItem category={category} />
                    </div>
                ))
            }

        </section>
    )
}