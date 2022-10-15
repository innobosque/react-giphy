import { CategoryGif } from "./CategoryGif";

export const CategoriesGif = ({ categories }) => {

    return (
        <section>
            <h2 className="text-center text-2xl font-bold">Categorías</h2>
            {
                categories.map(category => (
                    <div className="grid grid-cols-5 gap-5" key={category} >
                        <h3 className="col-span-5 p-5 uppercase">{category}</h3>
                        <CategoryGif category={category} />
                    </div>
                ))
            }

        </section>
    )
}