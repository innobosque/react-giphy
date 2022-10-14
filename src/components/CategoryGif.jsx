import { useFetchGifs } from "../hooks/useFetchGifs";
export const CategoryGif = ({ category }) => {
    const {isLoading,images} = useFetchGifs(category);
    return (
        <div>
            {isLoading && 'Cargando'}
            {images.map(image=>(
                <img key={image.id} src={image.url} alt={image.title} />
            ))}
        </div>
    )
}