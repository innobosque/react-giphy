import { LoadingSpinner } from "../LoadingSpinner";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifImage } from "./GifImage";
export const GifSearchedItem = ({search} ) => {
    const {id,category} = search;
    const {isLoading,error,images} = useFetchGifs(category);
    return (
        <>
            {isLoading && <LoadingSpinner widthHeight={'40'} />}
            {!!error.message && error.message}
            {images.map(image=>(
                <GifImage key={image.id} src={image.url} alt={image.title} />
            ))}
        </>
    )
}