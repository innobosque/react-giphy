import { useFetchGifs } from "../hooks/useFetchGifs";
import { ImgItem } from "./ImgItem";
export const CategoryGif = ({ category }) => {
    const {isLoading,images} = useFetchGifs(category);
    return (
        <>
            {isLoading && 'Cargando'}
            {images.map(image=>(
                <ImgItem key={image.id} url={image.url} />
            ))}
        </>
    )
}