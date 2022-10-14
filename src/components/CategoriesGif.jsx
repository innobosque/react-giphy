import { CategoryGif } from "./CategoryGif";

export const CategoriesGif = ({ categories }) => {

    return (
        <section>
            <h2>Categorías</h2>
            {
                categories.map(category => (
                    <div key={category} >
                        <h3>{category}</h3>
                        <CategoryGif category={category} />
                    </div>
                ))
            }

        </section>
    )
}