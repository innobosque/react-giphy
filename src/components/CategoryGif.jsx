import { useFetchGifs } from "../hooks/useFetchGifs";
export const CategoryGif = ({ category }) => {
    const {isLoading,images} = useFetchGifs(category);
    return (
        <>
            {isLoading && 'Cargando'}
            {images.map(image=>(
                <img className="w-full h-full object-cover" key={image.id} src={image.url} alt={image.title} />
            ))}
        </>
    )
}