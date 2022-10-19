import { LoadingSpinner } from "../LoadingSpinner";
import { useFetchGifs } from "../../hooks/useFetchGifs";
export const GifItem = ({search} ) => {
    const {id,category} = search;
    const {isLoading,error,images} = useFetchGifs(category);
    return (
        <>
            {isLoading && <LoadingSpinner widthHeight={'40'} />}
            {!!error.message && error.message}
            {images.map(image=>(
                <img className="w-full h-full object-cover" key={image.id} src={image.url} alt={image.title} title={image.title} />
            ))}
        </>
    )
}